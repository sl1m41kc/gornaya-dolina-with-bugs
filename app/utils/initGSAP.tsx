"use client";
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

export function InitGSAP() {
  gsap.registerPlugin(ScrollTrigger);
  
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     smoothTouch: 0.1,
  //     effects: true,
  //   });
  // });

  return <></>;
}