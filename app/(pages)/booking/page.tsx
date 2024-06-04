"use client";

import React, { useEffect, useRef } from "react";

import classes from "./page.module.css";
import clsx from "clsx";

const Page = () => {
  const script1Ref = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const loadScript1 = () => {
      const script1 = document.createElement("script");
      script1.src =
        "https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js";
      script1.async = true;
      script1.onload = loadScript2;
      script1Ref.current = script1;
      document.body.appendChild(script1);
    };

    const loadScript2 = () => {
      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.innerHTML = `(function () {
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
      document.body.appendChild(script2);
    };

    loadScript1();

    return () => {
      document.body.removeChild(script1Ref.current!);
    };
  }, []);

  return (
    <div className={clsx(classes.container, 'container')}>
      <div
        id="booking_iframe"
        style={{ position: "relative", paddingBottom: "30px" }}
      />
    </div>
  );
};

export default Page;
