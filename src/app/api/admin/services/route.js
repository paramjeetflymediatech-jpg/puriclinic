import { NextResponse } from 'next/server';
import { Service } from '@/lib/models';
import { deletePhysicalFiles } from '@/lib/utils/fileStorage';

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

    // Collect all image paths for deletion
    const filesToDelete = [];
    if (service.image_url) filesToDelete.push(service.image_url);
    if (service.hero_image) filesToDelete.push(service.hero_image);

    // Parse gallery images
    if (service.gallery_images) {
      try {
        const gallery = typeof service.gallery_images === 'string' 
          ? JSON.parse(service.gallery_images) 
          : service.gallery_images;
        if (Array.isArray(gallery)) filesToDelete.push(...gallery);
      } catch (e) {
        console.error("Failed to parse gallery_images for deletion:", e);
      }
    }

    // Parse treatment_types images
    if (service.treatment_types) {
      try {
        const types = typeof service.treatment_types === 'string' 
          ? JSON.parse(service.treatment_types) 
          : service.treatment_types;
        if (Array.isArray(types)) {
          types.forEach(item => {
            if (item.image) filesToDelete.push(item.image);
          });
        }
      } catch (e) {
        console.error("Failed to parse treatment_types for deletion:", e);
      }
    }

    // Physically delete the files
    await deletePhysicalFiles(filesToDelete);

    // Destroy the DB record
    await service.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
