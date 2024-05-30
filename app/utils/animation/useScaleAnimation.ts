import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useScaleAnimation = (ref: any) => {
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(ref.current, {
        scale: 1.15,
        scrollTrigger: {
          trigger: ref.current,
          start: "30% bottom",
          end: "30% center",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return;
};

export default useScaleAnimation;
