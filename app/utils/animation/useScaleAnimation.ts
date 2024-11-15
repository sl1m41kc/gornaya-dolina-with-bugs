import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const useScaleAnimation = (ref: any, scale: number = 1.15, contentLoaded: boolean = true) => {
  useGSAP(
    () => {
      if (contentLoaded && ref.current) {
        gsap.from(ref.current, {
          scale: scale,
          scrollTrigger: {
            trigger: ref.current,
            start: "30% bottom",
            end: "30% center",
            scrub: 1.25,
          },
        });
      }
    },
    [contentLoaded]
  );

  return;
};

export default useScaleAnimation;
