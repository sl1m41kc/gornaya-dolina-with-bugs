"use client";

import React, { useState } from "react";
import classes from "./burger-menu.module.css";
import clsx from "clsx";
import { Link } from "react-scroll";

const BurgerMenu = () => {
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

  const onClickLink = () => {
    setIsOpen(false);
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
            duration={500}
            activeClass={classes.active}
            className={classes.link}
            key={item.id}
            onClick={onClickLink}
          >
            {item.name}
          </Link>
        ))}
        <p className={classes.phone}>+7 (913) 019-62-79</p>
      </div>
    </div>
  );
};

export default BurgerMenu;
