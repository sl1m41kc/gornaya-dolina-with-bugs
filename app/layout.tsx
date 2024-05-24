import type { Metadata } from "next";

import "./globals.css";

import '@/fonts/philosopher/philosopher.css';
import '@/fonts/PT-Sans/PT-sans.css';

export const metadata: Metadata = {
  title: "Горная Долина",
  description: "База отдыха горная долина",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
