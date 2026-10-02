"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero-item]");
        const heroMedia = gsap.utils.toArray<HTMLElement>("[data-hero-media]");
        const heroPhoto = gsap.utils.toArray<HTMLElement>("[data-hero-photo]");

        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (heroItems.length) {
          intro.from(heroItems, {
            y: 24,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.1,
            clearProps: "all",
          });
        }

        if (heroMedia.length) {
          intro.from(
            heroMedia,
            {
              y: 32,
              autoAlpha: 0,
              duration: 1.05,
              ease: "power2.out",
              clearProps: "all",
            },
            0.15,
          );
        }

        if (heroPhoto.length) {
          gsap.set(heroPhoto, { scale: 1.06, transformOrigin: "center center" });
          gsap.to(heroPhoto, {
            yPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-hero]",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 32,
            autoAlpha: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          });
        });

        gsap.utils
          .toArray<HTMLElement>("[data-reveal-group]")
          .forEach((group) => {
            const items = group.querySelectorAll<HTMLElement>(
              ":scope > [data-reveal-item]",
            );
            if (!items.length) return;

            gsap.from(items, {
              y: 28,
              autoAlpha: 0,
              duration: 0.75,
              stagger: 0.12,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: group,
                start: "top 86%",
                once: true,
              },
            });
          });
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh);

      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
