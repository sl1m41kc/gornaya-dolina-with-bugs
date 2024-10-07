interface YandexMetrikaProps {
  yid: number;
  clickmap?: boolean;
  trackLinks?: boolean;
  accurateTrackBounce?: boolean;
  webvisor?: boolean;
}

interface YandexMetrikaTagProps extends Omit<YandexMetrikaProps, 'yid'> {
  yid: number;
}

interface YandexMetrikaPixelProps {
  yid: number;
}

// Функция для конвертации логических значений в строковые
function convertParam(
  boolValue: boolean | undefined,
  defaultValue: boolean
): string {
  return (boolValue === undefined ? defaultValue : boolValue)
    ? 'true'
    : 'false';
}

// Компонент для внедрения тега Яндекс Метрики с поддержкой JavaScript
function YandexMetrikaTag({
  yid,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
  webvisor = true,
}: YandexMetrikaTagProps) {
  // Преобразование параметров в строковые значения для передачи в скрипт
  let clickmapStr = convertParam(clickmap, true),
    trackLinksStr = convertParam(trackLinks, true),
    accurateTrackBounceStr = convertParam(accurateTrackBounce, true),
    webvisorStr = convertParam(webvisor, true);

  // Скрипт для внедрения тега Яндекс Метрики
  const scriptInjectorHTML = `
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
            ${scriptInjectorHTML}
            ym(${yid}, "init", {
                clickmap:${clickmapStr},
                trackLinks:${trackLinksStr},
                accurateTrackBounce:${accurateTrackBounceStr},
                webvisor:${webvisorStr}
            });
      `,
      }}
    />
  );
}

// Компонент для использования пикселя Яндекс Метрики при отсутствии поддержки JavaScript
function YandexMetrikaPixel({ yid }: YandexMetrikaPixelProps) {
  const pixelSource = `https://mc.yandex.ru/watch/${yid}`;

  return (
    <noscript>
      <div>
        <img
          src={pixelSource}
          style={{ position: 'absolute', left: '-9999px' }}
          alt=""
        />
      </div>
    </noscript>
  );
}

// Основной компонент для Яндекс Метрики
export default function YandexMetrika({
  yid,
  clickmap = true,
  trackLinks = true,
  accurateTrackBounce = true,
  webvisor = true,
}: YandexMetrikaProps) {
  return (
    <>
      <YandexMetrikaTag
        yid={yid}
        clickmap={clickmap}
        trackLinks={trackLinks}
        accurateTrackBounce={accurateTrackBounce}
        webvisor={webvisor}
      />
      <YandexMetrikaPixel yid={yid} />
    </>
  );
}
