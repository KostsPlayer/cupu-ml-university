import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import Lenis from "lenis";

export default function SmoothScroll() {
  useIsomorphicLayoutEffect(() => {
    const lenis = new Lenis({
      easing: easeOutCubic,
      duration: 2,
    });

    function easeOutCubic(x) {
      return 1 - Math.pow(1 - x, 3);
    }

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}
