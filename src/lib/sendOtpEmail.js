import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

function cleanEnvValue(val) {
  if (!val) return '';
  let s = String(val).trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }
  return s.trim();
}

/**
 * Reads the designated 2FA email strictly from .env.
 * Priority: ADMIN_2FA_EMAIL > ADMIN_EMAIL > CLINIC_EMAIL
 */
export function getTwoFactorEmail() {
  let fileEmail = '';
  try {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          const val = trimmed.slice(eqIdx + 1).trim();
          if (key === 'ADMIN_2FA_EMAIL' && val) {
            fileEmail = val;
            break;
          } else if (!fileEmail && (key === 'ADMIN_EMAIL' || key === 'CLINIC_EMAIL') && val) {
            fileEmail = val;
          }
        }
      }
    }
  } catch (e) {
    // Ignore file read issues, fallback to process.env
  }

  const raw =
    fileEmail ||
    process.env.ADMIN_2FA_EMAIL ||
    process.env.ADMIN_EMAIL ||
    process.env.CLINIC_EMAIL 

  return cleanEnvValue(raw);
}

/**
 * Masks an email address for privacy in the login UI (e.g. p***i@yopmail.com)
 */
export function maskEmail(email) {
  if (!email || !email.includes('@')) return 'your registered admin email';
  const [local, domain] = email.split('@');
  if (local.length <= 2) {
    return `${local[0]}*@${domain}`;
  }
  return `${local[0]}${'*'.repeat(Math.min(local.length - 2, 4))}${local[local.length - 1]}@${domain}`;
}

/**
 * Sends a 6-digit OTP verification email to the email specified in .env
 */
export async function sendOtpEmail(targetEmail, otp) {
  const host = cleanEnvValue(process.env.SMTP_HOST) || 'smtp-relay.brevo.com';
  const port = parseInt(cleanEnvValue(process.env.SMTP_PORT) || '587');
  const user = cleanEnvValue(process.env.SMTP_USER);
  const pass = cleanEnvValue(process.env.SMTP_PASS);
  const senderEmail = cleanEnvValue(process.env.CLINIC_EMAIL) 

  console.log(`\n==================================================`);
  console.log(`[2FA] 🔐 ADMIN LOGIN OTP GENERATED: [ ${otp} ]`);
  console.log(`[2FA] ✉️  RECIPIENT (STRICTLY FROM .ENV): ${targetEmail}`);
  console.log(`==================================================\n`);

  let emailSent = false;
  let emailError = null;

  if (user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      const html = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 32px 24px; background-color: #ffffff; border: 1px solid #f1f5f9; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.06);">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; padding: 6px 16px; background: #fdf2f8; border-radius: 9999px; color: #EA6490; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em;">
              Admin Security Verification
            </div>
            <h1 style="color: #0f172a; font-size: 24px; font-weight: 800; margin: 16px 0 6px 0;">Puri Skin Clinic</h1>
            <p style="color: #64748b; font-size: 14px; margin: 0;">Two-Factor Authentication (2FA)</p>
          </div>

          <div style="background: linear-gradient(135deg, #fdf2f8 0%, #f0fdfa 100%); border: 1px solid #fbcfe8; border-radius: 18px; padding: 26px 20px; text-align: center; margin: 24px 0;">
            <p style="color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 12px 0;">
              Your 6-Digit Verification Code
            </p>
            <div style="font-size: 40px; font-weight: 900; letter-spacing: 0.3em; color: #EA6490; font-family: monospace; background: #ffffff; padding: 14px 24px; border-radius: 14px; border: 2px dashed #EA6490; display: inline-block; box-shadow: 0 4px 15px rgba(234, 100, 144, 0.15);">
              ${otp}
            </div>
            <p style="color: #475569; font-size: 13px; font-weight: 600; margin: 16px 0 0 0;">
              ⏱️ Valid for <strong>10 minutes</strong>
            </p>
          </div>

          <p style="color: #334155; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
            A login request was initiated for your administrator account. To complete the sign-in process, enter this verification code in the portal.
          </p>

          <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 8px; margin-bottom: 24px;">
            <p style="color: #92400e; font-size: 12px; margin: 0; line-height: 1.5;">
              <strong>Security Notice:</strong> Never share this code with anyone. Puri Skin Clinic staff will never ask for your verification code.
            </p>
          </div>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 20px; color: #94a3b8; font-size: 11px; line-height: 1.5; text-align: center;">
            <p style="margin: 0 0 4px 0;">If you did not attempt to log in, please secure your credentials immediately.</p>
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Puri Skin Clinic. All rights reserved.</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `Puri Skin Clinic Security <${senderEmail}>`,
        to: targetEmail,
        subject: `🔐 ${otp} - Your Puri Skin Clinic Admin 2FA Code`,
        text: `Your Puri Skin Clinic Admin verification code is: ${otp}. It will expire in 10 minutes.`,
        html,
      });

      emailSent = true;
      console.log(`[2FA] ✅ Verification code successfully emailed to: ${targetEmail}`);
    } catch (err) {
      emailError = err.message;
      console.error(`[2FA] ❌ SMTP Email Delivery Error:`, err.message);
    }
  } else {
    emailError = 'SMTP credentials not configured in environment.';
    console.warn(`[2FA] ⚠️ SMTP user/pass missing in .env.`);
  }

  return { success: emailSent, error: emailError };
}
