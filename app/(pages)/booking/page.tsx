'use client';

import React, { useRef, useState } from 'react';
import Script from 'next/script';
import classes from './page.module.css';
import clsx from 'clsx';
import { Loading } from '@/app/components/Loading/Loading';
import { isLegacyDevice } from '@/app/utils/isLegacyDevice/isLegacyDevice';

const Page = () => {
  const scriptRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true); // состояние загрузки скрипта

  return (
    <div className={clsx(classes.container, 'container')}>
      {isLegacyDevice ? (
        <div className={classes.notWork}>Версия браузера устарела {':('}</div>
      ) : (
        <>
          {loading && <Loading />}
          {/* Оптимизированный компонент Script для внешнего скрипта */}
          <Script
            src="https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js"
            strategy="lazyOnload" // Скрипт загрузится только при взаимодействии с пользователем
            onLoad={() => {
              // Инициализация внешнего скрипта произойдет после загрузки
              const scriptContainer = scriptRef.current;
              if (scriptContainer) {
                const initScript = `(function () {
                  var BnovoBookFrame = new BookingIframe({
                      html_id: "booking_iframe",
                      uid: "c17878d5-f6c6-48bb-9e2e-cc42aae119ca",
                      lang: "ru", 
                      width: "auto",
                      height: "auto",
                      rooms: "",
                      IsMobile: "0",
                      scroll_to_rooms: "0",
                  });
                  BnovoBookFrame.init();
                })();`;
                const inlineScript = document.createElement('script');
                inlineScript.type = 'text/javascript';
                inlineScript.innerHTML = initScript;
                scriptContainer.appendChild(inlineScript);
                console.log('finish loader');
              }
              setLoading(false); // Отключаем лоадер после загрузки скрипта
            }}
          />
          {/* Контейнер для инициализации скрипта */}
          <div ref={scriptRef}>
            <div
              id="booking_iframe"
              style={{
                position: 'relative',
                paddingBottom: '30px',
                minHeight: '100vh',
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
