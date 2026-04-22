import { NextResponse } from 'next/server';
import { Contact } from '@/lib/models';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Basic validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required fields.' },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      name,
      phone,
      email,
      message,
    });

    // --- Send Email Notification ---
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `PuriSkinClinic <${process.env.CLINIC_EMAIL}>`,
        to: `anujguptaflymedia@gmail.com, pravi.flymediatech@gmail.com, puriskinclinic@gmail.com, ${process.env.CLINIC_EMAIL}`,
        subject: `New Contact Inquiry - ${name}`,
        html: `
          <h3>New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };
      const user_mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: `Thanks for contacting us! `,
        html: `
          <h3>Thanks for contacting us!</h3>
          <p>Dear ${name}</p> 
          <p>Thank you for reaching out to us. We have received your message and appreciate you considering Puri Clinic for your healthcare needs.</p>
          <p>Our team will review your message and get back to you as soon as possible, typically within 24-48 business hours.</p>
          <p>In the meantime, you can learn more about our services and expertise on our website.</p>
          <p>We look forward to assisting you!</p>
          <p>Best regards,</p>
          <p>PuriSkinClinic Team</p>
          <hr />
          <h3>Your Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(user_mailOptions);
        console.log('Contact notification email sent successfully.');
      } else {
        console.warn('Mail credentials not provided; skipped sending email.');
      }
    } catch (emailError) {
      console.warn('Failed to send contact email. Contact saved in DB.', emailError);
    }

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
