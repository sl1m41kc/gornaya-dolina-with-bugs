"use client";

import React from "react";
import classes from "./main.module.css";
import Image from "next/image";
import BnovoWidget from "./booking/booking";
import useScreenWidth from "@/app/utils/useScreenWidth";

import LogoSVG from "@/public/sprites/logo.svg";
import platform from "platform";
import clsx from "clsx";

interface IProps {
  // Сделаны гибкие данные фото чтобы переиспользовать блок
  imageSrc: string;
  imageAlt: string;
  isMain?: boolean;
}

const Main = ({ imageSrc, imageAlt }: IProps) => {
  const screenWidth = useScreenWidth();

  // const legacy = platform.os?.family === "iOS" && Number(platform.os.version?.split(".")[0]) < 13
  const legacy = false;

  return (
    <main className={clsx(classes.main, legacy && classes.legacy)} id="main">
      {true && screenWidth <= 768 && screenWidth !== 0 && (
        <div className={classes.logoContainer}>
          <div className={classes.logoWrapper}>
            <LogoSVG className={classes.logo} />
            <h1 className={classes.title}>Горная&nbsp;долина</h1>
          </div>
        </div>
      )}

      <div className={classes.mask}>
        <Image
          className={classes.image}
          src={imageSrc}
          alt={imageAlt}
          width={1920}
          height={1080}
          priority
        />
      </div>

      {!legacy && <BnovoWidget />}
    </main>
  );
};

export default Main;
