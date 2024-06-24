"use client";

import React, { useState } from "react";
import classes from "./burger-menu.module.css";
import clsx from "clsx";
import { Link as ScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { data } from "@/data/data";
import { scroller } from "react-scroll";

const BurgerMenu = () => {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const linkItem = [
    {
      id: "main",
      name: "Главная",
    },
    {
      id: "houses",
      name: "Размещение",
    },
    {
      id: "about-us",
      name: "О нас",
    },
    {
      id: "photoGallery",
      name: "Фотогалерея",
    },
    {
      id: "camping",
      name: "Активный отдых",
    },
    {
      id: "reviews",
      name: "Отзывы",
    },
    {
      id: "contacts",
      name: "Контакты",
    },
  ];

  const onClickBurger = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const onClickLink = (id: string) => {
    setIsOpen(false);
    document.body.style.overflow = "auto";

    if (path !== "/") {
      router.push(`/#${id}`);
    } else {
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <div>
      <div
        className={clsx(classes.burgerMenu, isOpen && classes.active)}
        onClick={onClickBurger}
      >
        <span />
        <span />
        <span />
      </div>

      <div className={clsx(classes.menu, isOpen && classes.active)}>
        {linkItem.map((item) => (
          <ScrollLink
            key={item.id}
            className={classes.link}
            to={item.id}
            smooth={true}
            offset={-50}
            activeClass={classes.active}
            onClick={() => onClickLink(item.id)}
          >
            {item.name}
          </ScrollLink>
        ))}
        <div className={classes.phoneWrapper}>
          <a
            href={data.socialMedia.phone.link}
            className={clsx(classes.phone, "mylink", "linkReverse")}
          >
            {data.socialMedia.phone.number}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
