"use client";

import { useEffect } from "react";
import { scroller } from "react-scroll";

const Scrollto = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
      scroller.scrollTo(hash, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }
  }, []);

  return <></>;
};

export default Scrollto;
