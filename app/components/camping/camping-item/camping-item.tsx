'use client'

import React, { useRef } from "react";
import classes from "./camping-item.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScaleAnimation from "@/app/utils/animation/useScaleAnimation";

interface IProps {
  title: string | JSX.Element;
  imageSrc: string;
  icon: JSX.Element;
}

const CampingItem = ({ title, imageSrc, icon }: IProps) => {
  const alt = title as string;
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  // Анимация
  useScaleAnimation(imageRef);
  
  return (
    <div className={classes.item} ref={itemRef}>
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
    </div>
  );
};

export default CampingItem;
