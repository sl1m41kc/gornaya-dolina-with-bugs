import type { Metadata } from "next";

import "./globals.css";

import "@/fonts/philosopher/philosopher.css";
import "@/fonts/PT-Sans/PT-sans.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { YandexMetrika } from "./components/yandex-metrika/yandex-metrika";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Горная долина",
  description: "База отдыха Горная долина",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Suspense>
          <YandexMetrika />
        </Suspense>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
