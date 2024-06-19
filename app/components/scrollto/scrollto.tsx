"use client";

import { useEffect } from "react";
import { scroller } from "react-scroll";

const Scrollto = () => {
  useEffect(() => {
    const hash = window.location.href.split("#")[1];

    if (hash) {
      window.location.hash = '';
      scroller.scrollTo(hash, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, []);

  return <></>;
};

export default Scrollto;
