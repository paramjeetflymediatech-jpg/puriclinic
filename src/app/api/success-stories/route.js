import { NextResponse } from 'next/server';
import { SuccessStory } from '@/lib/models';

export async function GET() {
  try {
    const data = await SuccessStory.findAll({ 
      where: { is_active: true },
      order: [['createdAt', 'DESC']] 
    });
    return NextResponse.json({ successStories: data });
  } catch (error) {
    console.error('Public Success Stories Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch success stories' }, { status: 500 });
  }
}
