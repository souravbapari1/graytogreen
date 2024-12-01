import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname, searchParams } = req.nextUrl;

  // Protect the /account and /donate pages
  if (
    ((pathname.startsWith("/account") || pathname.startsWith("/donate")) &&
      !req.auth?.user) ||
    (pathname.startsWith("/membership/apply") && !req.auth?.user)
  ) {
    const url = new URL("/auth/signin", req.nextUrl.origin);
    if (pathname !== "/auth/signin") {
      url.searchParams.set(
        "redirect",
        pathname + "?" + searchParams.toString()
      );
    }
    return NextResponse.redirect(url);
  }

  // Handle language (ln) from cookies
  const ln = req.cookies.get("ln");
  if (ln && !searchParams.has("ln")) {
    searchParams.set("ln", ln.value);
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
