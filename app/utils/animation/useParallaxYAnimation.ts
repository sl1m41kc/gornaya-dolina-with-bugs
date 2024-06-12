import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useParallaxYAnimation = (ref: any, offset: number = -400) => {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(ref.current, {
        y: offset,
        scrollTrigger: {
          trigger: ref.current,
          start: "30% bottom",
          end: "bottom center",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return;
};

export default useParallaxYAnimation;
