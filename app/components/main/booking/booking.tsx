import React, { useEffect, useRef } from 'react';

import classes from './booking.module.css';

const BnovoWidget = () => {
  const script1Ref = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const loadScript1 = () => {
      const script1 = document.createElement('script');
      script1.src = '//widget.reservationsteps.ru/js/bnovo.js';
      script1.async = true;
      script1.onload = loadScript2;
      script1Ref.current = script1;
      document.body.appendChild(script1);
    };

    const loadScript2 = () => {
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.innerHTML = `(function(){
        Bnovo_Widget.init(function(){
          Bnovo_Widget.open('_bn_widget_', {
            type: "horizontal",
            uid: "c17878d5-f6c6-48bb-9e2e-cc42aae119ca",
            lang: "ru",
            currency: "RUB",
            width: "80%",
            width_mobile: "300",
            background: "#ffffff",
            background_mobile: "#ffffff",
            bg_alpha: "100",
            bg_alpha_mobile: "100",
            border_color_mobile: "#C6CAD3",
            padding: "24",
            padding_mobile: "24",
            border_radius: "24",
            button_font_size: "14",
            button_height: "42",
            font_type: "inter",
            without_title: "on",
            title_color: "#242742",
            title_color_mobile: "#242742",
            title_size: "22",
            title_size_mobile: "22",
            inp_color: "#472e0b",
            inp_bordhover: "#5c4729",
            inp_bordcolor: "#A88451",
            inp_alpha: "10",
            btn_background: "#FBF4EA",
            btn_background_over: "#eddbc2",
            btn_textcolor: "#A88451",
            btn_textover: "#A88451",
            btn_bordcolor: "#ffffff",
            btn_bordhover: "#ffffff",
            min_age: "0",
            max_age: "17",
            adults_default: "1",
            btn_text: "ЗАБРОНИРОВАТЬ",
            dates_preset: "on",
            dfrom_today: "on",
            dfrom_value: "2",
            dto_nextday: "on",
            dto_value: "2",
            cancel_color: "#1875F0",
            url: " горная-долина.рф/booking",
            switch_mobiles_width: "800",
          });
        });
      })();`;
      document.body.appendChild(script2);
    };

    loadScript1();

    return () => {
      document.body.removeChild(script1Ref.current!);
    };
  }, []);

  return (
    <div >
      <div className={classes.container} id="_bn_widget_">
        <a href="https://bnovo.ru/" id="_bnovo_link_" target="_blank">
          Bnovo
        </a>
      </div>
    </div>
  );
};

export default BnovoWidget;