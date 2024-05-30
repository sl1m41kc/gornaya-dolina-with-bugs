"use client";

import React, { useRef } from "react";
import classes from "./house-item.module.css";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IProps {
  subtitle: string;
  imageSrc: string;
  href: string;
}

const HouseItem = ({ subtitle, imageSrc, href }: IProps) => {
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(imageRef.current, {
        scale: 1.15,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "30% bottom",
          end: "30% center",
          scrub: true,
        },
      });
    },
    { scope: itemRef }
  );

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
      />
    </a>
  );
};

export default HouseItem;
