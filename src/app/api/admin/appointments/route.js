import { NextResponse } from 'next/server';
import { Appointment } from '@/lib/models';

export async function GET() {
  try {
    const data = await Appointment.findAll({ order: [['createdAt', 'DESC']] });
    return NextResponse.json({ appointments: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
  }
}
