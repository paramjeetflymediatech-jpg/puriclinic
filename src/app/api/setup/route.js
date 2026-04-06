import { NextResponse } from 'next/server';
import { syncDB } from '@/lib/models';

// A temporary setup route to initialize the tables
export async function GET() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await syncDB();
    return NextResponse.json({ message: 'Database synced successfully!' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
