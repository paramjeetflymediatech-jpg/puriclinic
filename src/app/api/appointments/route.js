import { NextResponse } from 'next/server';
import { Appointment } from '@/lib/models';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required fields.' },
        { status: 400 }
      );
    }

    const appointment = await Appointment.create({
      name,
      phone,
      email,
      service,
      message,
      status: 'pending'
    });

    // --- Send Email Notification ---
    try {
      // Create transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Optional: Use host/port for other providers or AWS SES
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: `anujguptaflymedia@gmail.com, pravi.flymediatech@gmail.com, puriskinclinic@gmail.com`,
        subject: `New Appointment Request - ${name}`,
        html: `
          <h3>New Appointment Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message || 'None'}</p>
        `,
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log('Admin notification email sent successfully.');
      } else {
        console.warn('Mail credentials not provided; skipped sending email.');
      }
    } catch (emailError) {
      console.warn('Failed to send appointment email. Appointment saved in DB.', emailError);
    }

    return NextResponse.json({ success: true, id: appointment.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to submit appointment request.' },
      { status: 500 }
    );
  }
}
