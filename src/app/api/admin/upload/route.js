import { NextResponse } from 'next/server';
import { mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import formidable from 'formidable';
import { Readable } from 'stream';

export const maxDuration = 300; 
export const dynamic = 'force-dynamic';

// Helper to convert Web Request to Node.js IncomingMessage-like stream for Formidable
async function requestToNodeStream(request) {
  const reader = request.body.getReader();
  const stream = new Readable({
    async read() {
      const { done, value } = await reader.read();
      if (done) {
        this.push(null);
      } else {
        this.push(Buffer.from(value));
      }
    }
  });
  
  // Formidable expects headers on the stream
  stream.headers = Object.fromEntries(request.headers.entries());
  return stream;
}

export async function POST(request) {
  try {
    const uploadDir = join(process.cwd(), 'data', 'uploads');
    
    // Ensure directory exists
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {}

    const nodeStream = await requestToNodeStream(request);

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 100 * 1024 * 1024, // 100MB
      maxTotalSize: 105 * 1024 * 1024,
      filename: (name, ext, part, form) => {
        return `${uuidv4()}${ext}`;
      },
      filter: (part) => {
        const allowedTypes = [
          'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp',
          'video/mp4', 'video/webm', 'video/ogg', 'video/quicktime'
        ];
        return allowedTypes.includes(part.mimetype);
      }
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(nodeStream, (err, fields, files) => {
        if (err) {
          console.error('FORMIDABLE PARSE ERROR details:', err);
          reject(err);
        } else {
          resolve([fields, files]);
        }
      });
    });

    const file = files.file?.[0] || files.file;
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded or invalid file type' }, { status: 400 });
    }

    const relativePath = `/uploads/${file.newFilename}`;

    return NextResponse.json({ 
      success: true, 
      url: relativePath,
      type: file.mimetype.startsWith('video/') ? 'video' : 'image',
      size: file.size
    });
  } catch (error) {
    console.error('CRITICAL UPLOAD ERROR details:', error);
    
    let errorMessage = 'Media processing failed.';
    if (error.message?.includes('intrinsic')) {
      errorMessage = 'Upload interrupted. Please try again.';
    } else if (error.message?.includes('maxFileSize')) {
      errorMessage = 'Video exceeds the 100MB size limit.';
    } else if (error.code === 'ECONNRESET') {
      errorMessage = 'Connection reset during upload.';
    }

    return NextResponse.json({ 
      error: errorMessage, 
      details: error.message,
      code: error.code 
    }, { status: 500 });
  }
}
