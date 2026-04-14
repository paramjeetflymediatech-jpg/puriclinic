import { NextResponse } from 'next/server';
import { Contact } from '@/lib/models';

export async function GET() {
  try {
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']]
    });
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact inquiries.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    const contact = await Contact.findByPk(id);
    if (!contact) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    await contact.destroy();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json(
      { error: 'Failed to delete contact inquiry.' },
      { status: 500 }
    );
  }
}
