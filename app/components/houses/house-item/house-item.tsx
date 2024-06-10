"use client";

import React, { useRef } from "react";
import classes from "./house-item.module.css";
import Image from "next/image";
import useScaleAnimation from "@/app/utils/animation/useScaleAnimation";

interface IProps {
  subtitle: string;
  imageSrc: string;
  href: string;
}

const HouseItem = ({ subtitle, imageSrc, href }: IProps) => {
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  // Анимация
  useScaleAnimation(imageRef);

  return (
    <a className={classes.item} ref={itemRef} href={href}>
      <h3 className={classes.subtitle}>{subtitle}</h3>
      <Image
        ref={imageRef}
        className={classes.image}
        src={imageSrc}
        alt={subtitle}
        width={1920}
        height={1080}
        sizes="(max-width: 1024px) 90vw, 40vw"
      />
    </a>
  );
};

export default HouseItem;
