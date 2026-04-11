import { NextResponse } from 'next/server';
import { Testimonial } from '@/lib/models';

export async function GET() {
  try {
    const data = await Testimonial.findAll({ 
      where: { is_active: true },
      order: [['createdAt', 'DESC']],
      limit: 10 
    });
    return NextResponse.json({ testimonials: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}
