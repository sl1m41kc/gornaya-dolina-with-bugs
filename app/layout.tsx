import './globals.css';
import type { Metadata } from 'next';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { PTSAns } from '@/app/fonts/fonts';
import { InitGSAP } from './utils/initGSAP';
import { MobileProvider } from './utils/adaptive/MobileContext';
import { isMobileSSR } from './utils/adaptive/isMobileSSR';
import { YandexMetrika } from './components/YandexMetrika/YandexMetrika';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

export const metadata: Metadata = {
  title: 'Горная долина',
  description:
    'База отдыха Горная долина — это идеальное место для отдыха в горах с комфортабельными домиками, живописными видами, пешими прогулками и активными развлечениями на свежем воздухе. Забронируйте ваш отдых уже сегодня!',
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
      <body className={PTSAns.className}>
        <YandexMetrika yid={process.env.YID!} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <MobileProvider initialIsMobile={isMobileSSR()}>
              {children}
            </MobileProvider>
            <Footer />
          </div>
        </div>
        <Header />
        <ScrollToTop />
      </body>
      <InitGSAP />
    </html>
  );
}
