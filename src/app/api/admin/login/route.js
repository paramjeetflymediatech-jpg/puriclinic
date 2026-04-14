import { NextResponse } from 'next/server';
import { encrypt } from '@/lib/auth';
import { Admin } from '@/lib/models';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Look up the admin in the database
    const adminUser = await Admin.findOne({ where: { username } });

    if (adminUser && await adminUser.validPassword(password)) {
      const sessionToken = await encrypt({ admin: true, user: username });

      // Build the response with cookie
      const res = NextResponse.json({ success: true });
      res.cookies.set('adminSession', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60, // 1 day
      });
      return res;
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
