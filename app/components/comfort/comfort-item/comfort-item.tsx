"use client";

import React, { useRef, useState } from "react";
import classes from "./comfort-item.module.css";
import Image, { StaticImageData } from "next/image";
import useScaleAnimation from "@/app/utils/animation/useScaleAnimation";
import clsx from "clsx";
import { Philosopher } from "@/app/fonts/fonts";

interface IProps {
  type: string;
  title: string | React.ReactNode;
  image: StaticImageData;
  icon: React.ReactNode;
}

const ComfortItem = ({ title, image, icon, type }: IProps) => {
  const alt = title as string;
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Анимация
  useScaleAnimation(imageRef, 1.2, isImageLoaded);

  return (
    <a className={classes.item} href={`/comfort/${type}`}>
      <div className={classes.icon}>{icon}</div>
      <h3 className={clsx(classes.title, Philosopher.className)}>{title}</h3>
      <Image
        ref={imageRef}
        onLoad={() => setIsImageLoaded(true)}
        className={classes.image}
        placeholder="blur"
        src={image}
        alt={alt}
      />
    </a>
  );
};

export default ComfortItem;
