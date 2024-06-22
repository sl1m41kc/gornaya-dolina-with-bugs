"use client";

import Image from "next/image";
import React, { useRef } from "react";
import classes from "./separator.module.css";
import useParallaxYAnimation from "@/app/utils/animation/useParallaxYAnimation";
import platform from "platform";

const Separator = () => {
  const imageRef = useRef(null);

  const legacy = platform.os?.family === "iOS" && Number(platform.os.version?.split(".")[0]) < 13

  // Анимация
  if (!legacy) useParallaxYAnimation(imageRef, -500);

  return (
    <div className={classes.mask}>
      <Image
        ref={imageRef}
        className={classes.image}
        src="/images/horse.jpg"
        alt="Лошади в поле"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default Separator;
