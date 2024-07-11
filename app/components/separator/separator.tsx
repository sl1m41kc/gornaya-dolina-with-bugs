"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import classes from "./separator.module.css";
import useParallaxYAnimation from "@/app/utils/animation/useParallaxYAnimation";

const Separator = () => {
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Анимация
  useParallaxYAnimation(imageRef, -500, isImageLoaded);

  return (
    <div className={classes.container}>
      <div className={classes.mask}>
      <Image
        ref={imageRef}
        onLoad={() => setIsImageLoaded(true)}
        className={classes.image}
        src="/images/horse.jpg"
        alt="Лошади в поле"
        width={1920}
        height={1080}
      />
    </div>
    </div>
  );
};

export default Separator;
