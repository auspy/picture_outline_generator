import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Public routes that don't require authentication
  publicRoutes: [
    "/",
    "/privacy",
    "/api/waitlist",
    "/sign-in",
    "/sign-up",
    "/success",
  ],
  // Routes that bypass middleware completely
  ignoredRoutes: ["/api/webhook", "/_next/static/(.*)", "/favicon.ico"],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
