import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    // Admin routes
    const adminSession = request.cookies.get('admin_session')?.value
    const isAdminRoute = request.nextUrl.pathname.startsWith('/admin/dashboard')

    if (isAdminRoute && adminSession !== process.env.ADMIN_SESSION_TOKEN) {
        return NextResponse.redirect(new URL('/admin/auth', request.url))
    }

    // Client routes  
    const clientSession = request.cookies.get('client_session')?.value
    const isClientRoute = request.nextUrl.pathname.startsWith('/client/dashboard')

    if (isClientRoute && !clientSession) {
        return NextResponse.redirect(new URL('/client/auth', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/admin/dashboard/:path*',
        '/client/dashboard/:path*',
    ],
}
