'use client';
import React, { useEffect, useState } from 'react';
import BurgerMenu from './burger-menu/burger-menu';
import classes from './header.module.css';
import PhoneSVG from '@/public/sprites/icons/phone.svg';
import clsx from 'clsx';
import LogoSVG from '@/public/sprites/logo.svg';
import { usePathname, useRouter } from 'next/navigation';
import { data } from '@/data/data';
import { Philosopher } from '@/app/fonts/fonts';
import { useMobileContext } from '@/app/utils/adaptive/MobileContext';
import { isBooking } from '@/app/utils/isBooking';

const Header = () => {
  const { isMobile } = useMobileContext();
  const [scrollOnTop, setScrollOnTop] = useState(true);
  const router = useRouter();
  const path = usePathname();

  const onClick = () => {
    if (path !== '/') {
      router.push('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrollOnTop(true);
      } else {
        setScrollOnTop(false);
      }
    };

    if (typeof window !== 'undefined') {
      if (!isMobile) {
        window.addEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile]);

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
          className={clsx(
            classes.title,
            !scrollOnTop && classes.titleCorrect,
            Philosopher.className
          )}
        >
          Горная долина
        </h1>
      </div>

      <div className={classes.actions}>
        <a href={data.socialMedia.phone.link} className={classes.phoneWrapper}>
          <PhoneSVG className={classes.phone} />
          <p className="mylink">{data.socialMedia.phone.number}</p>
        </a>
        {isBooking && (
          <a className={clsx('button', classes.button)} href="/booking">
            Забронировать
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
