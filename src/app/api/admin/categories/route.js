import { NextResponse } from 'next/server';
import { Category } from '@/lib/models';

export async function GET() {
  try {
    const data = await Category.findAll({ order: [['name', 'ASC']] });
    return NextResponse.json({ categories: data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const category = await Category.create(body);
    return NextResponse.json({ success: true, category });
  } catch(err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const category = await Category.findByPk(id);
    if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });

    await category.update(updateData);
    return NextResponse.json({ success: true, category });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    const category = await Category.findByPk(id);
    if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });

    await category.destroy();
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
