"use client";

import Image from "next/image";
import React, { useRef } from "react";
import classes from "./horse-block.module.css";
import useParallaxYAnimation from "@/app/utils/animation/useParallaxYAnimation";

const HorseBlock = () => {
  const imageRef = useRef(null);

  // Анимация
  useParallaxYAnimation(imageRef);

  return (
    <div className={classes.mask}>
      <Image
        ref={imageRef}
        className={classes.image}
        src="/images/horse.png"
        alt="Лошади в поле"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default HorseBlock;
