import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Container } from "@/components/Container";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  breadcrumb,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  breadcrumb?: { href?: string; label: string }[];
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-tide/40 blur-3xl"
      />
      <Container
        className={`grid items-center gap-10 py-16 lg:py-24 ${image ? "lg:grid-cols-2" : ""}`}
      >
        <div className="relative">
          {breadcrumb ? (
            <div className="mb-6">
              <Breadcrumb items={breadcrumb} tone="dark" />
            </div>
          ) : null}
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            {description}
          </p>
          {actions ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {actions}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/30">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}

export function PageSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}
