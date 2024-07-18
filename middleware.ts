import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(["/api/uploadthing"])

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};