'use client'

import React, { useRef } from "react";
import classes from "./comfort-item.module.css";
import Image from "next/image";
import useScaleAnimation from "@/app/utils/animation/useScaleAnimation";

interface IProps {
  type: string;
  title: string | React.ReactNode;
  imageSrc: string;
  icon: React.ReactNode;
}

const ComfortItem = ({ title, imageSrc, icon, type }: IProps) => {
  const alt = title as string;
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  // Анимация
  useScaleAnimation(imageRef, 1.3);
  
  return (
    <a className={classes.item} href={`/comfort/${type}`} ref={itemRef}>
      <div className={classes.icon}>{icon}</div>
      <h3 className={classes.title}>{title}</h3>
      <Image
        ref={imageRef}
        className={classes.image}
        src={imageSrc}
        alt={alt}
        width={1920}
        height={1080}
      />
    </a>
  );
};

export default ComfortItem;
