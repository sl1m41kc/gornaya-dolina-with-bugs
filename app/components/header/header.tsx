"use client";

import React, { useEffect, useState } from "react";
import BurgerMenu from "./burger-menu/burger-menu";
import classes from "./header.module.css";
import PhoneSVG from "@/public/sprites/icons/phone.svg";
import clsx from "clsx";
import LogoSVG from '@/public/sprites/logo.svg'

const Header = () => {
  const [scrollOnTop, setScrollOnTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrollOnTop(true);
    } else {
      setScrollOnTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(classes.header, !scrollOnTop && classes.paddingCorrect)}
    >
      <BurgerMenu />

      <a href="/" className={classes.logoWrapper}>
        <LogoSVG className={clsx(classes.logo, !scrollOnTop && classes.logoCorrect)} />
        <h1 className={clsx(classes.title, !scrollOnTop && classes.titleCorrect)}>Горная Долина</h1>
      </a>

      <div className={classes.actions}>
        <a href="tel:+79130196279" className={classes.phoneWrapper}>
          <PhoneSVG className={classes.phone} />
          <p>+7 (913) 019-62-79</p>
        </a>
        <button className={classes.button} type="button">
          Забронировать
        </button>
      </div>
    </header>
  );
};

export default Header;
