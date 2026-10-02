import Image from "next/image";
import { images } from "@/data/images";
import { phoneHref, site } from "@/data/site";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";

const facts = [
  { label: "Service Area", value: "Nashville & 11 Surrounding Cities" },
  { label: "Open", value: site.hours.days },
  { label: "Hours", value: site.hours.time },
];

export function HomeCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep py-20 sm:py-28 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.ctaTrust.src}
          alt={images.ctaTrust.alt}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/75" />
      </div>

      <Container className="relative">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-copper">
            <Icon name="pin" className="h-3.5 w-3.5" />
            Middle Tennessee Service Network
          </span>

          <h2 className="mt-5 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Whether you are located in Nashville or one of the surrounding
            Middle Tennessee communities, our team is ready to help. Contact us
            today to discuss your needs and request a quote.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="/contact"
              variant="light"
              withArrow
              className="w-full sm:w-auto text-center"
            >
              Get a Free Quote
            </ButtonLink>
            {site.phone ? (
              <a
                href={phoneHref(site.phone)}
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10"
              >
                <Icon name="phone" className="h-4 w-4 text-copper" />
                Call {site.phone}
              </a>
            ) : null}
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="min-w-0 sm:px-4 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-copper">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-bold text-white">
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
