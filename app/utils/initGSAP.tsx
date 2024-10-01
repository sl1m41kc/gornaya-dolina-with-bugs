"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

export function InitGSAP() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      smoothTouch: 0.1,
      effects: true,
    });
  });

  return <></>;
}