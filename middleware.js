import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { LOGIN, PUBLIC_ROUTES, ROOT } from "./utils/routes";

let defaultLocale = "en";
let locales = ["bn", "en"];

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  console.log(languages);

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }

  // for privet route
  const { auth } = NextAuth(authConfig);
  const { nextUrl } = request;
  // console.log("req from auth", request);
  const isAuthenticated = !!request.auth;

  console.log("isAuthenticated", isAuthenticated);

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname == ROOT ||
    nextUrl.pathname == "/en" ||
    nextUrl.pathname == "/bn";

  console.log(" nextUrl.pathname", nextUrl.pathname, "isPublicRoute", {
    isPublicRoute,
  });

  if (!isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(LOGIN, nextUrl));
}

// for protected rotes
// const { auth } = NextAuth(authConfig);

// export default auth((req) => {

//   const { nextUrl } = req;
//   console.log("req from auth", req);
//   const isAuthenticated = !!req.auth;

//   console.log(isAuthenticated, nextUrl.pathname);

//   const isPublicRoute =
//     PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
//     nextUrl.pathname === ROOT;

//   console.log("isPublicRoute", { isPublicRoute });

//   if (!isAuthenticated && !isPublicRoute)
//     return Response.redirect(new URL(LOGIN, nextUrl));
// });
export const config = {
  matcher: [
    "/((?!api|assets|.*\\..*|_next).*)",
    '/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)',
    // '/'
  ],
};
