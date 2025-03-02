import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add cache-control header
  response.headers.set(
    "Cache-Control",
    "s-maxage=31536000, stale-while-revalidate"
  );

  return response;
}
