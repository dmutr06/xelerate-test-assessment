import { i18n } from "./config";

import type defaultDictionary from "@/dictionaries/en.json";

export type Dictionary = typeof defaultDictionary;
export type Locale = (typeof i18n)["locales"][number];
