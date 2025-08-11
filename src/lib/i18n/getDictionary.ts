import "server-only";
import type { Locale } from "./types";
import { headers } from "next/headers";

const dicts = {
    en: () => import("@/dictionaries/en.json").then(module => module.default),
    ua: () => import("@/dictionaries/ua.json").then(module => module.default),
};

const getLocaleFromHeaders = () => headers().then(headers => headers.get("x-locale") || "en") as Promise<Locale>;

export const getDictionaryByLocale = (locale: Locale) => dicts[locale]();

export const getDictionary = async () => getDictionaryByLocale(await getLocaleFromHeaders());
