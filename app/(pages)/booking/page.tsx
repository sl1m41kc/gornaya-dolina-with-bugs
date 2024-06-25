"use client";

import React, { useEffect, useRef } from "react";

import classes from "./page.module.css";
import clsx from "clsx";
import platform from "platform";

const Page = () => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const src =
      "https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js";
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

    const loadScript = () => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = initScript;
        document.body.appendChild(script);
      };
      scriptRef.current = script;
      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      document.body.removeChild(scriptRef.current!);
    };
  }, []);

  const isOldIos =
    platform.os?.family === "iOS" &&
    Number(platform.os.version?.split(".")[0]) < 15;

  return (
    <div className={clsx(classes.container, "container")}>
      {isOldIos ? (
        <div className={classes.notWork}>Версия браузера устарела {":("}</div>
      ) : (
        <div
          id="booking_iframe"
          style={{ position: "relative", paddingBottom: "30px" }}
        />
      )}
    </div>
  );
};

export default Page;

