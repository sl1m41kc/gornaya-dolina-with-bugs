'use client';

import React, { useEffect, useState } from 'react';
import classes from './burger-menu.module.css';
import clsx from 'clsx';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import { data } from '@/data/data';
import { scroller } from 'react-scroll';

const BurgerMenu = () => {
  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const linkItem = [
    {
      id: 'main',
      name: 'Главная',
    },
    {
      id: 'houses',
      name: 'Размещение',
    },
    {
      id: 'about-us',
      name: 'О нас',
    },
    {
      id: 'photoGallery',
      name: 'Фотогалерея',
    },
    {
      id: 'camping',
      name: 'Активный отдых',
    },
    {
      id: 'reviews',
      name: 'Отзывы',
    },
    {
      id: 'contacts',
      name: 'Контакты',
    },
  ];

  const onClickLink = (id: string) => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';

    if (path !== '/') {
      router.push(`/#${id}`);
    } else {
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        offset: -80,
        smooth: 'easeInOutQuart',
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Получение ширины скролла
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;
      // Применение ширины скролла к body
      document.body.style.marginRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.marginRight = '0px';
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div>
      <div
        className={clsx(classes.burgerMenu, isOpen && classes.active)}
        onClick={() => setIsOpen(!isOpen)}
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
            smooth={false}
            activeClass={classes.active}
            onClick={() => onClickLink(item.id)}
          >
            {item.name}
          </ScrollLink>
        ))}
        <div className={classes.phoneWrapper}>
          <a
            href={data.socialMedia.phone.link}
            className={clsx(classes.phone, 'mylink', 'linkReverse')}
          >
            {data.socialMedia.phone.number}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
