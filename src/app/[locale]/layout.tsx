import type { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import i18nConfig from "@/i18nConfig";
import TranslationProvider from "@/components/translationProvider/translationProvider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import initTranslations from "../../utils/i18n";
import "../../styles/index.scss";

export const metadata: Metadata = {
  title: "NextJS Web Application Template",
  description: "NextJS Web Application Template",
};

export function generateStaticParams() {
 return i18nConfig.locales.map((locale) => ({ locale }));
}
const i18nNamespaces = ["translation"];

interface LayoutProps extends PropsWithChildren{
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: Readonly< LayoutProps>) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale}>
      <body>
        <TranslationProvider
          locale={locale}
          resources={resources}
          namespaces={i18nNamespaces}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
