import { NextResponse } from 'next/server';
import { Testimonial } from '@/lib/models';

export async function GET() {
  try {
    const data = await Testimonial.findAll({ 
      where: { is_active: true },
      order: [['createdAt', 'DESC']] 
    });
    return NextResponse.json({ testimonials: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const testimonial = await Testimonial.create(body);
    return NextResponse.json({ success: true, testimonial });
  } catch(err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const testimonial = await Testimonial.findByPk(id);
    if (!testimonial) return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });

    await testimonial.update(updateData);
    return NextResponse.json({ success: true, testimonial });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const testimonial = await Testimonial.findByPk(id);
    if (!testimonial) return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });

    await testimonial.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
