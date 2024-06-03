import type { Metadata } from "next";

import "./globals.css";

import "@/fonts/philosopher/philosopher.css";
import "@/fonts/PT-Sans/PT-sans.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
