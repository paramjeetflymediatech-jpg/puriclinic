import { NextResponse } from 'next/server';
import { Doctor } from '@/lib/models';

export async function GET() {
  try {
    const data = await Doctor.findAll({ order: [['order', 'ASC'], ['createdAt', 'DESC']] });
    return NextResponse.json({ doctors: data });
  } catch (error) {
    console.error('Fetch Doctors Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to fetch doctors' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const doctor = await Doctor.create(body);
    return NextResponse.json({ success: true, doctor });
  } catch(err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const doctor = await Doctor.findByPk(id);
    if (!doctor) return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });

    await doctor.update(updateData);
    return NextResponse.json({ success: true, doctor });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const doctor = await Doctor.findByPk(id);
    if (!doctor) return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });

    await doctor.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
