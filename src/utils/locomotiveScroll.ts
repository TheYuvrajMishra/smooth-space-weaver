
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

export const useLocomotiveScroll = () => {
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!locomotiveScroll) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true
      });

      setLocomotiveScroll(scroll);

      // Update locomotive scroll when window resizes
      window.addEventListener("resize", () => {
        scroll.update();
      });
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
        setLocomotiveScroll(null);
      }
    };
  }, [locomotiveScroll]);

  return locomotiveScroll;
};

export const scrollTo = (target: string, options?: any) => {
  const element = document.querySelector(target);
  if (element) {
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]") as HTMLElement,
      smooth: true
    });
    
    locomotiveScroll.scrollTo(element, options);
  }
};
