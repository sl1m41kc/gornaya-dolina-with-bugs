import Script from 'next/script';
import { useEffect } from 'react';

interface YandexMetrikaProps {
  yid: number;
  clickmap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
  webvisor?: boolean;
}

export default function YandexMetrika({
  yid,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
  webvisor = true,
}: YandexMetrikaProps) {
  // Преобразование параметров в строковые значения для передачи в скрипт
  const clickmapStr = clickmap ? 'true' : 'false';
  const trackLinksStr = trackLinks ? 'true' : 'false';
  const accurateTrackBounceStr = accurateTrackBounce ? 'true' : 'false';
  const webvisorStr = webvisor ? 'true' : 'false';

  return (
    <>
      {/* Внедрение скрипта Яндекс Метрики */}
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
      >
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
          ym(${yid}, "init", {
            clickmap: ${clickmapStr},
            trackLinks: ${trackLinksStr},
            accurateTrackBounce: ${accurateTrackBounceStr},
            webvisor: ${webvisorStr}
          });
        `}
      </Script>

      {/* Пиксель Яндекс Метрики для браузеров без поддержки JavaScript */}
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${yid}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
