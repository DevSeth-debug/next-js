import { NextResponse } from 'next/server'
import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

export const { auth } = NextAuth(authConfig)

export default auth((req) => {
  // If user is not authenticated and not on login page, redirect to login
  if (!req.auth && req.nextUrl.pathname !== "/auth/signin") {
    return NextResponse.redirect(new URL("/auth/signin", req.url))
  }
  
  // If user is authenticated and on login page, redirect to home
  if (req.auth && req.nextUrl.pathname === "/auth/signin") {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
})

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 