import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ success: true });
  // Clear the session cookie
  res.cookies.set('adminSession', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: new Date(0), // expire immediately
  });
  return res;
}
