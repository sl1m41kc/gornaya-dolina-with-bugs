"use client";

import { useEffect, useMemo, useRef } from "react";
import classes from "./booking.module.css";
import useScreenWidth from "@/app/useScreenWidth";

const BnovoWidget = () => {
  const benovoJsRef = useRef<HTMLScriptElement | null>(null);
  const benovoWidgetRef = useRef<HTMLScriptElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const screenWidth = useScreenWidth();

  const widgetType = useMemo(() => {
    if (screenWidth >= 1024) {
      return "horizontal";
    } else {
      return "vertical";
    }
  }, [screenWidth]);

  const script2InnerHTML = `(function(){
    Bnovo_Widget.init(function(){
      Bnovo_Widget.open('_bn_widget_', {
        type: "${widgetType}",
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
        border_radius: "8",
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
        url: "https://xn----7sbbjhyumfdet1r.xn--p1ai/booking",
        switch_mobiles_width: "800",
      });
    });
  })();`

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.id = "bnovojs";
    script1.src = "//widget.reservationsteps.ru/js/bnovo.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.id = "bnovowidget";
    script2.type = "text/javascript";
    script2.innerHTML = script2InnerHTML;

    benovoJsRef.current = script1;
    benovoWidgetRef.current = script2;

    script1.onload = () => {
      if (benovoWidgetRef.current) document.body.appendChild(benovoWidgetRef.current);
    };
    if (benovoJsRef.current) document.body.appendChild(benovoJsRef.current);

    return () => {
      if (benovoJsRef.current) document.body.removeChild(benovoJsRef.current);
      if (benovoWidgetRef.current) document.body.removeChild(benovoWidgetRef.current);
    };
  }, []);

  useEffect(() => {
    const script2 = document.createElement("script");
    script2.id = "bnovowidget";
    script2.type = "text/javascript";
    script2.innerHTML = script2InnerHTML;
    benovoWidgetRef.current = script2;

    const script = document.querySelector<HTMLScriptElement>("#bnovowidget");
    if (script) {
      if (containerRef.current) containerRef.current.innerHTML = "";
      document.body.removeChild(script);
      document.body.appendChild(benovoWidgetRef.current);
    }
  }, [widgetType]);

  return <div className={classes.container} ref={containerRef} id="_bn_widget_" />;
};

export default BnovoWidget;
