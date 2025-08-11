import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { I18nProvider, Locale } from "@/lib/i18n";
import { getDictionaryByLocale } from "@/lib/i18n/getDictionary";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Achievements",
};

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}>) {
    const { locale } = await params;
    const dictionary = await getDictionaryByLocale(locale);

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <I18nProvider locale={locale} dictionary={dictionary}>
                    <div className="container">
                        {children}
                    </div>
                </I18nProvider>
            </body>
        </html>
    );
}
