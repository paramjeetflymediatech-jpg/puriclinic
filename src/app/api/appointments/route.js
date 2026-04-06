import { NextResponse } from 'next/server';
import { Appointment } from '@/lib/models';

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

    return NextResponse.json({ success: true, id: appointment.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to submit appointment request.' },
      { status: 500 }
    );
  }
}
