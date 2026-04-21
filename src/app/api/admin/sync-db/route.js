import { NextResponse } from 'next/server';
import { syncDB } from '@/lib/models';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  // Simple security check: You can add a secret key in .env if you want
  // For now, we'll just allow it to be run.
  try {
    console.log('Manually triggering database sync...');
    await syncDB();
    return NextResponse.json({ 
      success: true, 
      message: 'Database schema updated successfully (alter: true applied).' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}
