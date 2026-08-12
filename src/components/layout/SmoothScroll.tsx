"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerLenis } from "@/lib/scrollLock";

gsap.registerPlugin(ScrollTrigger);

const HEADER_OFFSET = -96;

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    root.classList.add("lenis-active");

    const lenis = new Lenis({
      lerp: 0.14,
      wheelMultiplier: 1.15,
      smoothWheel: true,
      syncTouch: false,
    });
    registerLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: HEADER_OFFSET,
        onComplete: () => {
          const element = target as HTMLElement;
          element.setAttribute("tabindex", "-1");
          element.focus({ preventScroll: true });
        },
      });
    };

    document.addEventListener("click", onAnchorClick);

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 92%", once: true },
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", onAnchorClick);
      context.revert();
      gsap.ticker.remove(ticker);
      registerLenis(null);
      lenis.destroy();
      root.classList.remove("lenis-active");
    };
  }, []);

  return <>{children}</>;
}
