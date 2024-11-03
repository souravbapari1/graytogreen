import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  console.log(req.auth);

  // Protect the /account page
  if (pathname.startsWith("/account") && !req.auth?.user) {
    const url = new URL("/auth/signin", req.url);
    return NextResponse.redirect(url);
  }

  // Default response
  return NextResponse.next();
});

export const config = {
  matcher: ["/account/:path*"],
};
