import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useParallaxYAnimation = (ref: any) => {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(ref.current, {
        y: -400,
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
