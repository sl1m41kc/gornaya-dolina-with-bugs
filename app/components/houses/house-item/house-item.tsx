"use client";

import React, { useRef, useState } from "react";
import classes from "./house-item.module.css";
import Image, { StaticImageData } from "next/image";
import useScaleAnimation from "@/app/utils/animation/useScaleAnimation";
import clsx from "clsx";
import { Philosopher } from "@/app/fonts/fonts";

interface IProps {
  subtitle: string;
  image: StaticImageData;
  href: string;
}

const HouseItem = ({ subtitle, image, href }: IProps) => {
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Анимация
  useScaleAnimation(imageRef, 1.2, isImageLoaded);

  return (
    <a className={classes.item} href={href}>
      <h3 className={clsx(classes.subtitle, Philosopher.className)}>{subtitle}</h3>
      <Image
        ref={imageRef}
        onLoad={() => setIsImageLoaded(true)}
        className={classes.image}
        src={image}
        alt={subtitle}
        placeholder="blur"
      />
    </a>
  );
};

export default HouseItem;
