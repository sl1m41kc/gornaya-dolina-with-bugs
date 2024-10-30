'use client';

import React from 'react';
import classes from './main.module.css';
import Image, { StaticImageData } from 'next/image';
import BnovoWidget from './booking/booking';

import LogoSVG from '@/public/sprites/logo.svg';
import clsx from 'clsx';
import { isLegacyDevice } from '@/app/utils/isLegacyDevice/isLegacyDevice';
import { getIsSeasonNow } from '@/app/utils/isSeason/isSeason';
import { Philosopher } from '@/app/fonts/fonts';
import { useMobileContext } from '@/app/utils/adaptive/MobileContext';

interface IProps {
  // Сделаны гибкие данные фото чтобы переиспользовать блок
  image: StaticImageData;
  imageAlt: string;
  isMain?: boolean;
}

const Main = ({ image, imageAlt }: IProps) => {
  const isSeason = getIsSeasonNow();
  const { isMobile } = useMobileContext();

  return (
    <main
      className={clsx(classes.main, isLegacyDevice && classes.legacy, !isSeason && classes.unseason)}
      id="main"
    >
      {isMobile && (
        <div className={classes.logoContainer}>
          <div className={classes.logoWrapper}>
            <LogoSVG className={classes.logo} />
            <h1 className={clsx(classes.title, Philosopher.className)}>
              Горная&nbsp;долина
            </h1>
          </div>
        </div>
      )}

      <div className={classes.mask}>
        <Image
          className={classes.image}
          placeholder="blur"
          src={image}
          alt={imageAlt}
          priority
        />
      </div>

      {!isLegacyDevice &&
        (isSeason ? (
          <BnovoWidget />
        ) : (
          <div className={classes.billetContainer}>
            <p>
              Бронирование на&nbsp;сезон 2025&nbsp;г. откроется с&nbsp;
              <span>1&nbsp;марта</span> 2025&nbsp;г.
            </p>
          </div>
        ))}
    </main>
  );
};

export default Main;
