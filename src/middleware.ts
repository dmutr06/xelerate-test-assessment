import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n, Locale } from "./lib/i18n";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): Locale {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const locales = [...i18n.locales];

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
        locales,
    );

    const locale = matchLocale(languages, locales, i18n.defaultLocale) as Locale;

    return locale;
}

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const matchedLocale = i18n.locales.find(locale =>
        pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );

    if (!matchedLocale) {
        const locale = getLocale(request);

        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url,
            ),
        );
    }

    const res = NextResponse.next();
    res.headers.set("x-locale", matchedLocale);

    return res;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
