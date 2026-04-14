import { NextResponse } from 'next/server';
import { Service } from '@/lib/models';

export async function GET() {
  try {
    const data = await Service.findAll({ order: [['createdAt', 'DESC']] });
    return NextResponse.json({ services: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (Array.isArray(body.gallery_images)) {
      body.gallery_images = JSON.stringify(body.gallery_images);
    }
    const service = await Service.create(body);
    return NextResponse.json({ success: true, service });
  } catch(err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    if (Array.isArray(updateData.gallery_images)) {
      updateData.gallery_images = JSON.stringify(updateData.gallery_images);
    }

    const service = await Service.findByPk(id);
    if (!service) return NextResponse.json({ error: 'Service not found' }, { status: 404 });

    await service.update(updateData);
    return NextResponse.json({ success: true, service });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const service = await Service.findByPk(id);
    if (!service) return NextResponse.json({ error: 'Service not found' }, { status: 404 });

    await service.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
