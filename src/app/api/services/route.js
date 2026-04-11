import { NextResponse } from 'next/server';
import { Service } from '@/lib/models';

export async function GET() {
  try {
    const data = await Service.findAll({ order: [['createdAt', 'DESC']] });
    return NextResponse.json({ services: data });
  } catch (error) {
    console.error('Public Services Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}
