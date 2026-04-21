import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const dynamic = 'force-dynamic';

const MIME_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ogg': 'video/ogg',
  '.mov': 'video/quicktime',
  '.avif': 'image/avif',
};

export async function GET(request, { params }) {
  try {
    const pathSegments = (await params).path;
    const filename = pathSegments.join('/');

    // Security: prevent path traversal
    if (filename.includes('..')) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    const filePath = join(process.cwd(), 'data', 'uploads', filename);

    if (!existsSync(filePath)) {
      return new NextResponse('Not Found', { status: 404 });
    }

    const ext = ('.' + filename.split('.').pop()).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('File serve error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
