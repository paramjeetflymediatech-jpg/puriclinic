import { NextResponse } from 'next/server';
import { Blog } from '@/lib/models';

export async function GET() {
  try {
    const data = await Blog.findAll({ order: [['createdAt', 'DESC']] });
    return NextResponse.json({ blogs: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const blog = await Blog.create(body);
    return NextResponse.json({ success: true, blog });
  } catch(err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const blog = await Blog.findByPk(id);
    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    await blog.update(updateData);
    return NextResponse.json({ success: true, blog });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const blog = await Blog.findByPk(id);
    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    await blog.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
