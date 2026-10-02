"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/cn";
import { TestimonialCard } from "@/components/TestimonialCard";

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, []);

  function updateEnds() {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    setAtStart(scroller.scrollLeft <= 8);
    setAtEnd(scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 8);
  }

  function scrollByCard(direction: -1 | 1) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? scroller.clientWidth) + 20;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollBy({
      left: amount * direction,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-end gap-2">
        <CarouselButton
          label="Previous testimonials"
          disabled={atStart}
          onClick={() => scrollByCard(-1)}
        >
          <span aria-hidden="true">←</span>
        </CarouselButton>
        <CarouselButton
          label="Next testimonials"
          disabled={atEnd}
          onClick={() => scrollByCard(1)}
        >
          <span aria-hidden="true">→</span>
        </CarouselButton>
      </div>
      <div
        ref={scrollerRef}
        onScroll={updateEnds}
        className="flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Customer testimonials"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-card
            className="w-[min(100%,22rem)] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
          >
            <TestimonialCard testimonial={testimonial} className="min-h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CarouselButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: ReactNode;
  label: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand bg-white text-navy transition hover:border-tide hover:text-tide-deep",
        disabled && "cursor-not-allowed opacity-40 hover:border-sand hover:text-navy",
      )}
    >
      {children}
    </button>
  );
}
