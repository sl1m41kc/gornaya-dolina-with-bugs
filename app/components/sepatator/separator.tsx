"use client";

import Image from "next/image";
import React, { useRef } from "react";
import classes from "./separator.module.css";
import useParallaxYAnimation from "@/app/utils/animation/useParallaxYAnimation";

const Separator = () => {
  const imageRef = useRef(null);

  // Анимация
  useParallaxYAnimation(imageRef);

  return (
    <div className={classes.mask}>
      <Image
        ref={imageRef}
        className={classes.image}
        src="/images/horse.jpg"
        alt="Лошади в поле"
        width={1920}
        height={1080}
        sizes="100vw"
      />
    </div>
  );
};

export default Separator;
