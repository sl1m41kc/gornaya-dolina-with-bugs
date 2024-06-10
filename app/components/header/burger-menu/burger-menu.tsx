"use client";

import React, { useState } from "react";
import classes from "./burger-menu.module.css";
import clsx from "clsx";
import { Link } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { data } from "@/data/data";

const BurgerMenu = () => {
  const path = usePathname()
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
      id: 'camping',
      name: 'Активный отдых',
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
  };

  const onClickLink = async (id: string) => {
    setIsOpen(false);
    if (path !== '/') {
      router.push(`/#${id}`)
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
          <Link
            to={item.id}
            spy={true}
            smooth={true}
            offset={-100}
            activeClass={classes.active}
            className={classes.link}
            key={item.id}
            onClick={() => onClickLink(item.id)}
          >
            {item.name}
          </Link>
        ))}
        <div className={classes.phoneWrapper}>
        <a href={data.socialMedia.phone.link} className={clsx(classes.phone, 'link', 'linkReverse')}>{data.socialMedia.phone.number}</a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
