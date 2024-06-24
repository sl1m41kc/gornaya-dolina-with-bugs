'use client'

import clsx from "clsx";
import classes from "./scroll-to-top.module.css"
import { useEffect, useState } from "react"
import SchevronRight from '@/public/sprites/icons/chevron_right.svg'
import { scroller } from "react-scroll";

const ScrollToTop = () => {
    const [scrollOnTop, setScrollOnTop] = useState(false)

    const onClick = () => {
        scroller.scrollTo("main", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutCubic",
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 1000) {
            setScrollOnTop(true)
        } else {
            setScrollOnTop(false)
        }
      };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

  return (
    <div onClick={onClick} className={clsx(classes.scrollToTop, scrollOnTop && classes.show)}><SchevronRight className={classes.icon} /></div>
  )
}

export default ScrollToTop