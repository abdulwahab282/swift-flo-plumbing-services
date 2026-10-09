import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";

const facts = [
  { label: "Service area", value: site.locationLabel },
  { label: "Open", value: site.hours.days },
  { label: "Hours", value: site.hours.time },
];

export function Hero() {
  return (
    <section className="bg-paper" data-hero>
      <Container className="grid items-stretch gap-10 py-12 md:grid-cols-2 md:py-16 lg:gap-14 lg:py-20">
        <div className="@container flex min-w-0 flex-col justify-center">
          <p
            data-hero-item
            className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep"
          >
            {site.name}
          </p>
          <h1
            data-hero-item
            className="mt-4 font-display text-[clamp(1.9rem,8.4cqi,3.35rem)] leading-[1.05] text-navy"
          >
            Your Trusted & Professional Residential or Commercial #1 Plumbing
            Contractor
          </h1>
          <p
            data-hero-item
            className="mt-5 text-base leading-relaxed text-muted sm:text-lg"
          >
            Looking for a local and trusted residential or commercial buildings
            plumbing services contractor in Smyrna, TN? Swift Flo Plumbing
            Services delivers expert water pipe leak repairs and kitchen or
            bathroom line solutions. Contact our best plumbing services
            specialists today!
          </p>
          <div
            data-hero-item
            className="mt-8 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center"
          >
            <ButtonLink
              href="/contact#request-service"
              withArrow
              className="w-full lg:w-auto"
            >
              Request Plumbing Service
            </ButtonLink>
            <CallNowLink className="w-full lg:w-auto" />
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-5 border-t border-sand pt-6 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-sand">
            {facts.map((fact) => (
              <div
                key={fact.label}
                data-hero-item
                className="min-w-0 lg:px-4 lg:first:pl-0 lg:last:pr-0"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-deep">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-snug text-navy">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          data-hero-media
          className="relative h-full min-w-0 md:min-h-[32rem]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] md:absolute md:inset-0 md:aspect-auto">
            <div data-hero-photo className="absolute inset-0">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
