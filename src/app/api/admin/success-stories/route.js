import { NextResponse } from 'next/server';
import { SuccessStory } from '@/lib/models';

export async function GET() {
  try {
    const data = await SuccessStory.findAll({ order: [['createdAt', 'DESC']] });
    return NextResponse.json({ successStories: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch success stories' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const story = await SuccessStory.create(body);
    return NextResponse.json({ success: true, successStory: story });
  } catch(err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const story = await SuccessStory.findByPk(id);
    if (!story) return NextResponse.json({ error: 'Story not found' }, { status: 404 });

    await story.update(updateData);
    return NextResponse.json({ success: true, successStory: story });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const story = await SuccessStory.findByPk(id);
    if (!story) return NextResponse.json({ error: 'Story not found' }, { status: 404 });

    await story.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
