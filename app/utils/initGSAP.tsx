"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function InitGSAP() {
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother);
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      smoothTouch: 0.1,
      effects: true,
    });
  });

  return <></>;
}