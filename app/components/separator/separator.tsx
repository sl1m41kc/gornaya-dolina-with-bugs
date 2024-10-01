"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import classes from "./separator.module.css";
import useParallaxYAnimation from "@/app/utils/animation/useParallaxYAnimation";
import HorseIMG from "@/public/images/horse.jpg";

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
        src={HorseIMG}
        alt="Лошади в поле"
        placeholder="blur"
      />
    </div>
    </div>
  );
};

export default Separator;
