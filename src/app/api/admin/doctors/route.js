import { NextResponse } from 'next/server';
import { Doctor } from '@/lib/models';
import { deletePhysicalFiles } from '@/lib/utils/fileStorage';

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
    console.error('POST Doctor Error:', err);
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
    console.error('PUT Doctor Error:', err);
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

    // Collect all image paths for deletion
    const filesToDelete = [];
    if (doctor.image_url) filesToDelete.push(doctor.image_url);

    // Parse achievement_images
    if (doctor.achievement_images) {
      try {
        const images = typeof doctor.achievement_images === 'string' 
          ? JSON.parse(doctor.achievement_images) 
          : doctor.achievement_images;
        if (Array.isArray(images)) filesToDelete.push(...images);
      } catch (e) {
        console.error("Failed to parse achievement_images for deletion:", e);
      }
    }

    // Physically delete the files
    await deletePhysicalFiles(filesToDelete);

    // Destroy the DB record
    await doctor.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
