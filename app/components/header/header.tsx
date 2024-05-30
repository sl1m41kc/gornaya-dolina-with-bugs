"use client";

import React, { useEffect, useState } from "react";
import BurgerMenu from "./burger-menu/burger-menu";
import classes from "./header.module.css";
import PhoneSVG from "@/public/sprites/icons/phone.svg";
import clsx from "clsx";
import LogoSVG from "@/public/sprites/logo.svg";
import { scroller } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import useScreenWidth from "@/app/useScreenWidth";

const Header = () => {
  const screenWidth = useScreenWidth();
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const router = useRouter();
  const path = usePathname();

  const onClick = () => {
    if (path !== "/") {
      router.push("/");
    }
    scroller.scrollTo("main", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutCubic",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollOnTop(true);
      } else {
        setScrollOnTop(false);
      }
    };
  
    if (typeof window !== "undefined") {
      if (screenWidth >= 1024) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
  
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [screenWidth]);

  return (
    <header
      className={clsx(classes.header, !scrollOnTop && classes.paddingCorrect)}
    >
      <BurgerMenu />

      <div className={classes.logoWrapper} onClick={onClick}>
        <LogoSVG
          className={clsx(classes.logo, !scrollOnTop && classes.logoCorrect)}
        />
        <h1
          className={clsx(classes.title, !scrollOnTop && classes.titleCorrect)}
        >
          Горная Долина
        </h1>
      </div>

      <div className={classes.actions}>
        <a href="tel:+79130196279" className={classes.phoneWrapper}>
          <PhoneSVG className={classes.phone} />
          <p>+7 (913) 019-62-79</p>
        </a>
        <button className={clsx("button", classes.button)} type="button">
          Забронировать
        </button>
      </div>
    </header>
  );
};

export default Header;
