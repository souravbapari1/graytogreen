import { auth } from "@/auth";

import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const { searchParams } = req.nextUrl;

  // Protect the /account page
  if (pathname.startsWith("/account") && !req.auth?.user) {
    const url = new URL("/auth/signin", req.url);
    return NextResponse.redirect(url);
  }

  const ln = req.cookies.get("ln");
  if (!searchParams.has("ln") && ln) {
    searchParams.set("ln", ln.value); // Use the value from the cookie
    const url = req.nextUrl.clone();
    url.search = searchParams.toString();
    return NextResponse.redirect(url);
  }
  // Default response if everything is fine
  return NextResponse.next();
});

// Define the matcher to apply the middleware to all paths
export const config = {
  matcher: ["/:path*"],
};
