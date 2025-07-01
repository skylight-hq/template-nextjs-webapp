import type { Metadata } from "next";
import React, { ReactNode } from 'react';
import i18nConfig from '@/i18nConfig';
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "NextJS Web Application Template",
  description: "NextJS Web Application Template",
};

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children, params: {locale}
}: Readonly<{
  children: ReactNode;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any
}>) {
  return (
      <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}