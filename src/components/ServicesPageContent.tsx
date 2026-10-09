import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeCta } from "@/components/HomeCta";
import { HowItWorks } from "@/components/HowItWorks";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { site } from "@/data/site";

const highlights = [
  {
    title: "Residential & Commercial",
    text: "Plumbing support for homes, offices, and commercial buildings across Middle Tennessee.",
    icon: "wrench" as const,
  },
  {
    title: "Licensed Specialists",
    text: "Clean workmanship, clear communication, and dependable results on every visit.",
    icon: "shield" as const,
  },
  {
    title: "Convenient Hours",
    text: `Open ${site.hours.days}, ${site.hours.time}.`,
    icon: "clock" as const,
  },
];

export function ServicesPageContent() {
  return (
    <>
      <section className="relative isolate min-h-[min(82vh,40rem)] overflow-hidden bg-navy text-white">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-navy/50"
        />
        <Container className="relative flex min-h-[min(82vh,40rem)] flex-col justify-end pb-16 pt-24 sm:justify-center sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <Breadcrumb
            items={[{ href: "/", label: "Home" }, { label: "Services" }]}
            tone="dark"
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Plumbing Services · Smyrna, TN
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.08] sm:text-4xl lg:text-[2.75rem]">
            Residential or Commercial Buildings Refrigerator or Plumbing
            Services Company - Swift Flo Plumbing Services
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Trust Swift Flo Plumbing Services, your premier residential or
            commercial buildings refrigerator or plumbing services company, for
            expert water lines, leak repairs, and seamless installation
            solutions across Smyrna, TN.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href="/contact#request-service"
              variant="light"
              withArrow
            >
              Request Plumbing Service
            </ButtonLink>
            <CallNowLink variant="ghost" />
          </div>
        </Container>
      </section>

      <section className="relative z-10 -mt-8 sm:-mt-10">
        <Container>
          <div className="grid gap-3 rounded-[1.75rem] border border-sand bg-white p-3 shadow-xl shadow-navy/10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-sand sm:p-0 sm:py-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="flex items-start gap-4 rounded-[1.35rem] px-5 py-5 sm:rounded-none"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-xl text-navy">{item.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24" id="all-services">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="Expert plumbing for every job."
            text="Browse our full lineup of residential and commercial plumbing services — each with a clear description and a direct way to request help."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const image = images[service.image];

              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-tide/35 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-80"
                    />
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-tide-deep shadow-sm backdrop-blur-sm">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-2xl leading-snug text-navy">
                      {service.name}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                      {service.summary}
                    </p>
                    <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                      <ButtonLink
                        href={`/services/${service.slug}`}
                        className="sm:flex-1"
                      >
                        Learn More
                      </ButtonLink>
                      <ButtonLink
                        href="/contact#request-service"
                        variant="secondary"
                        className="sm:flex-1"
                      >
                        Request
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <HomeAbout />

      <HowItWorks tone="light" />

      <HomeCta />
    </>
  );
}
