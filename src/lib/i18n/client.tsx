"use client";

import { createContext, useContext } from "react";
import type { Locale } from "./types";
import type { Dictionary } from "./types";

type I18nContextValue = {
    locale: Locale;
    dictionary: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
    locale,
    dictionary,
    children,
}: {
    locale: Locale;
    dictionary: Dictionary;
    children: React.ReactNode;
}) {
    return (
        <I18nContext.Provider value={{ locale, dictionary }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used inside I18nProvider");

    return ctx;
}
