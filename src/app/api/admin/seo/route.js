import { NextResponse } from 'next/server';
import { SeoSetting } from '@/lib/models';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const schema = searchParams.get('schema');

    if (schema === 'global' || page === '__schema__') {
      const row = await SeoSetting.findOne({ where: { page_key: '__schema__' } });
      return NextResponse.json({ schema: row ? JSON.parse(row.schema_json || '{}') : null });
    }

    if (page) {
      const row = await SeoSetting.findOne({ where: { page_key: page } });
      return NextResponse.json({ seo: row || null });
    }

    const rows = await SeoSetting.findAll({
      where: { page_key: { [require('sequelize').Op.ne]: '__schema__' } },
      order: [['page_key', 'ASC']],
    });
    return NextResponse.json({ settings: rows });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { page_key, schema_json, ...rest } = body;

    if (!page_key) return NextResponse.json({ error: 'page_key required' }, { status: 400 });

    const payload = { page_key, ...rest };
    if (schema_json !== undefined) {
      payload.schema_json = typeof schema_json === 'string' ? schema_json : JSON.stringify(schema_json);
    }

    const [row, created] = await SeoSetting.findOrCreate({
      where: { page_key },
      defaults: payload,
    });

    if (!created) {
      await row.update(payload);
    }

    return NextResponse.json({ success: true, seo: row });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
