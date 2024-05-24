"use client";

import Image from "next/image";
import React, { useRef } from "react";
import classes from "./horse-block.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorseBlock = () => {
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(imageRef.current, {
        y: -400,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "30% bottom",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      });
    },
    { scope: itemRef }
  );

  return (
    <div ref={itemRef}>
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
    </div>
  );
};

export default HorseBlock;
