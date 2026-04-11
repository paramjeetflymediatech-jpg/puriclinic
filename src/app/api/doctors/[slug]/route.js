import { NextResponse } from 'next/server';
import { Doctor } from '@/lib/models';

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const doctor = await Doctor.findOne({ where: { slug, is_active: true } });
    
    if (!doctor) {
      return NextResponse.json({ error: 'Doctor not found' }, { status: 404 });
    }
    
    const docData = doctor.get({ plain: true });
    if (docData.achievement_images) {
      try {
        docData.achievement_images = JSON.parse(docData.achievement_images);
      } catch (e) {
        docData.achievement_images = [];
      }
    } else {
      docData.achievement_images = [];
    }
    
    return NextResponse.json({ doctor: docData });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch doctor' }, { status: 500 });
  }
}
