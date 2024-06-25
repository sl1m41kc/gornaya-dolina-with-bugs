import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useScaleAnimation = (ref: any, scale: number = 1.15, contentLoaded: boolean = true) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      if (contentLoaded && ref.current) {
        gsap.from(ref.current, {
          scale: scale,
          scrollTrigger: {
            trigger: ref.current,
            start: "30% bottom",
            end: "30% center",
            scrub: true,
          },
        });
      }
    },
    [contentLoaded]
  );

  return;
};

export default useScaleAnimation;
