import React, { PropsWithChildren } from "react";
import initTranslations from "@/i18n";
import TranslationProvider from "@/app/[locale]/translationProvider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const i18nNamespaces = ["translation"];

interface LayoutProps extends PropsWithChildren{
  params: Promise<{ locale: string }>;
}

export default async function Layout({
  children, params
}: LayoutProps){
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </TranslationProvider>
  );
}
