import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { HomeCta } from "@/components/HomeCta";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceAreaFinder } from "@/components/ServiceAreaFinder";
import { formatServiceAreaList, serviceAreas } from "@/data/service-areas";
import { images } from "@/data/images";
import { site } from "@/data/site";

const highlights = [
  {
    title: "Local Coverage",
    text: "Professional plumbing service across Nashville and surrounding Middle Tennessee communities.",
    icon: "pin" as const,
  },
  {
    title: "Reliable Service",
    text: "Dependable plumbing workmanship focused on quality, clear communication, and lasting results.",
    icon: "shield" as const,
  },
  {
    title: "Convenient Availability",
    text: `Open ${site.hours.days}, ${site.hours.time}, so scheduling a visit fits around your week.`,
    icon: "clock" as const,
  },
];

const faqs = [
  {
    question: "What areas does Swift Flo Plumbing Services serve?",
    answer: `${site.name} provides professional plumbing services throughout Nashville and surrounding Middle Tennessee communities, including ${formatServiceAreaList(8)}.`,
  },
  {
    question: "Can I see which cities offer a specific service?",
    answer:
      "Yes. On this page, select a plumbing service to view every confirmed community where that service is available. All listed services are offered across our Middle Tennessee coverage area.",
  },
  {
    question: "What plumbing services do you offer?",
    answer: `${site.name} provides ${site.service.toLowerCase()} for homeowners and businesses throughout ${site.locationFull}. Describe the plumbing work you need when you request a visit.`,
  },
  {
    question: "What are your business hours?",
    answer: `We are open ${site.hours.days}, ${site.hours.time}. Plumbing visits are arranged within these published hours.`,
  },
  {
    question: "How do I request plumbing service?",
    answer:
      "Use the contact form to share your name, a way to reach you, your location, and a description of the plumbing work you need. Our team follows up from there.",
  },
  {
    question: "Is my city covered if it is near Nashville?",
    answer: `We currently serve ${serviceAreas.length} confirmed communities across Middle Tennessee. If your city is listed on this page, you are in our service area. If you are nearby and unsure, contact us and we will confirm availability.`,
  },
];

export function ServiceAreasPageContent({
  initialServiceSlug,
}: {
  initialServiceSlug?: string;
}) {
  return (
    <>
      <section className="relative isolate min-h-[min(78vh,38rem)] overflow-hidden bg-navy text-white">
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
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-navy/45"
        />
        <Container className="relative flex min-h-[min(78vh,38rem)] flex-col justify-center py-16 sm:py-20 lg:py-24">
          <Breadcrumb
            items={[{ href: "/", label: "Home" }, { label: "Service Areas" }]}
            tone="dark"
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {site.city} · {site.stateName}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Professional Plumbing Across {site.region}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Select a service, then open any city page for that service to review
            content and design one page at a time — including{" "}
            {formatServiceAreaList(4)}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#find-by-service" variant="light" withArrow>
              Select a Service
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

      <ServiceAreaFinder initialServiceSlug={initialServiceSlug} />

      <section className="bg-foam py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={images.galleryCopper.src}
              alt={images.galleryCopper.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              About our coverage
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Local plumbing with a regional reach.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                {site.name} is built around professional plumbing service for
                customers across {site.locationFull}. From everyday repairs to
                larger plumbing needs, the focus stays on clear communication,
                quality workmanship, and a straightforward experience.
              </p>
              <p>
                Whether you are in Nashville, Franklin, Brentwood, Murfreesboro,
                or another community we serve, requesting service is simple and
                designed around your schedule.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex font-semibold text-tide-deep underline decoration-copper underline-offset-4"
            >
              Learn more about Swift Flo
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Service area questions"
              text="Common answers about coverage, services, and how to request a visit."
            />
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-[1.5rem] border border-sand bg-white px-5 py-4 sm:px-6 sm:py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-navy sm:text-2xl">
                  {faq.question}
                  <Icon
                    name="chevron"
                    className="h-5 w-5 shrink-0 text-copper-deep transition duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <HomeCta />
    </>
  );
}
