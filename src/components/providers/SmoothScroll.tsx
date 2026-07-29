"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
      // Ajuda ScrollTrigger pin a não brigar com o smooth scroll
      autoRaf: false,
    });

    // Expõe para seções que precisam forçar sync
    (
      window as Window & { __lenis?: Lenis; __scrollTriggerRefresh?: () => void }
    ).__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };
    (
      window as Window & { __scrollTriggerRefresh?: () => void }
    ).__scrollTriggerRefresh = refresh;

    const onResize = () => refresh();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", refresh);

    // Layout + fontes
    const t1 = window.setTimeout(refresh, 100);
    const t2 = window.setTimeout(refresh, 500);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      delete (window as Window & { __lenis?: Lenis }).__lenis;
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return <>{children}</>;
}
