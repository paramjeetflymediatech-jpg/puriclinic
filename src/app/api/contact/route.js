import { NextResponse } from 'next/server';
import { Contact } from '@/lib/models';

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

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
