"use client";

import { useEffect } from "react";
import { scroller } from "react-scroll";

const AnchorScrollLogic = () => {
  useEffect(() => {
    // Получаем хэш в формате #block_id
    const hash = window.location.hash;
    // Вырезаем # из хэша
    const blockId = hash.replace("#", "");

    if (blockId) {
      // Заменяем хэш на пустую строку
      window.history.replaceState({}, document.title, window.location.pathname);

      const element = document.getElementById(blockId);
      // Проверяем есть ли такой блок на странице
      if(element) {
        // Сначала браузер обновляет интерфейс - потом срабатывает timeout (защита от багов с скроллом)
        setTimeout(() => {
          scroller.scrollTo(blockId, {
            duration: 0,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -80,
          });
        }, 300)
      }
    }
  }, []);

  return null;
};

export default AnchorScrollLogic;
