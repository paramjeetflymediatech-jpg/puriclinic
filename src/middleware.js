import { NextResponse } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request) {
  // Check if we're trying to access an admin route
  const currentPath = request.nextUrl.pathname;
  
  if (currentPath.startsWith('/admin') && !currentPath.startsWith('/admin/login')) {
    // 1. Get the session cookie
    const sessionCookie = request.cookies.get('adminSession')?.value;
    console.log('[Middleware] Admin route accessed:', currentPath);
    console.log('[Middleware] Has session cookie?', !!sessionCookie);

    // 2. If no cookie, redirect to login
    if (!sessionCookie) {
      console.log('[Middleware] No cookie found. Redirecting to login.');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // 3. Decrypt and verify session
    const payload = await decrypt(sessionCookie);
    console.log('[Middleware] Decrypted payload:', payload);
    if (!payload || !payload.admin) {
      console.log('[Middleware] Invalid payload. Redirecting to login.');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  // Protect API routes the same way
  if (currentPath.startsWith('/api/admin') && !currentPath.startsWith('/api/admin/login')) {
      const sessionCookie = request.cookies.get('adminSession')?.value;
      if (!sessionCookie) {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      const payload = await decrypt(sessionCookie);
      if (!payload || !payload.admin) {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
