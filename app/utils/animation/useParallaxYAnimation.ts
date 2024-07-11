import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useParallaxYAnimation = (ref: any, offset: number = -400, contentLoaded: boolean = true) => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(
    () => {
      if (contentLoaded && ref.current) {
        gsap.from(ref.current, {
          y: offset,
          scrollTrigger: {
            trigger: ref.current,
            start: "30% bottom",
            end: "bottom center",
            scrub: true,
          },
        });
      }
    },
    [contentLoaded]
  );

  return;
};

export default useParallaxYAnimation;
