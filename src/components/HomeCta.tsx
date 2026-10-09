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

export function HomeCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={images.ctaKitchen.src}
        alt={images.ctaKitchen.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {site.locationLabel}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.08] text-white sm:text-5xl">
            Hire Now a Plumbing Services Contractor in Smyrna, TN!
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Don&apos;t let plumbing issues disrupt your day. Hire now a plumbing
            services contractor in Smyrna, TN, or get ready for booking a
            professional plumbing contractor in Smyrna, TN, to restore your
            property fast.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="/contact#request-service"
              variant="light"
              withArrow
              className="w-full sm:w-auto"
            >
              Request Plumbing Service
            </ButtonLink>
            <CallNowLink variant="ghost" className="w-full sm:w-auto" />
          </div>
          <dl className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-5 border-t border-white/15 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            {facts.map((fact) => (
              <div key={fact.label} className="min-w-0 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-snug text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
