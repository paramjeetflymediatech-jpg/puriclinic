import { NextResponse } from 'next/server';
import { Doctor } from '@/lib/models';

export async function GET() {
  try {
    const data = await Doctor.findAll({
      where: { is_active: true },
      order: [['order', 'ASC'], ['name', 'ASC']]
    });
    return NextResponse.json({ doctors: data });
  } catch (error) {
    console.error('Public Doctors Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  }
}
