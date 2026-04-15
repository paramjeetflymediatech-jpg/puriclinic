import { NextResponse } from 'next/server';
import { Testimonial } from '@/lib/models';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const reviews = await Testimonial.findAll({
      where: { source: 'Google' },
      order: [['createdAt', 'DESC']],
    });
    return NextResponse.json({ reviews });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { id, is_active } = await request.json();
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const row = await Testimonial.findByPk(id);
    if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    await row.update({ is_active });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    const row = await Testimonial.findByPk(id);
    if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    await row.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
