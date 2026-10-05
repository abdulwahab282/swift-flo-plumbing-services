import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceAreaCards } from "@/components/ServiceAreaCards";
import { formatServiceAreaList, serviceAreas } from "@/data/service-areas";
import { images } from "@/data/images";
import { services } from "@/data/services";
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

const detailPoints = [
  {
    title: "Service coverage",
    text: "Plumbing service is available throughout our published Middle Tennessee service areas.",
  },
  {
    title: "Professional approach",
    text: "Every request is handled with attention to quality workmanship and customer needs.",
  },
  {
    title: "Customer communication",
    text: "Clear updates from the initial inquiry through scheduling and completion.",
  },
  {
    title: "Scheduling",
    text: `Visits are arranged within published hours: ${site.hours.days}, ${site.hours.time}.`,
  },
  {
    title: "Quality standards",
    text: "A professional process designed to deliver dependable plumbing results.",
  },
  {
    title: "Local availability",
    text: "Serving Nashville and nearby communities with a local, customer-focused team.",
  },
];

const whyChoose = [
  {
    title: "Local Expertise",
    text: "Serving communities throughout Middle Tennessee with professional plumbing service.",
    icon: "pin" as const,
  },
  {
    title: "Professional Service",
    text: "Focused on quality workmanship and customer satisfaction on every visit.",
    icon: "wrench" as const,
  },
  {
    title: "Reliable Communication",
    text: "Clear communication from the initial inquiry through completion.",
    icon: "users" as const,
  },
  {
    title: "Wide Service Coverage",
    text: "Serving Nashville and surrounding Middle Tennessee communities.",
    icon: "shield" as const,
  },
  {
    title: "Customer Focused",
    text: "Every project is approached with attention to the customer's needs.",
    icon: "droplet" as const,
  },
  {
    title: "Dependable Experience",
    text: "A professional approach designed to make the entire process simple and convenient.",
    icon: "clock" as const,
  },
];

const faqs = [
  {
    question: "What areas does Swift Flo Plumbing Services serve?",
    answer: `${site.name} provides professional plumbing services throughout Nashville and surrounding Middle Tennessee communities, including ${formatServiceAreaList(8)}.`,
  },
  {
    question: "Do you provide plumbing services in Nashville?",
    answer: `Yes. Nashville is one of our confirmed service areas. Customers in Nashville and nearby communities can request professional plumbing service through our contact form.`,
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
    question: "Can I get a free quote?",
    answer:
      "Yes. Contact us to discuss your plumbing needs and request a free quote. Pricing depends on the work required and is confirmed once we understand the job.",
  },
  {
    question: "Do you serve both homeowners and businesses?",
    answer: `Yes. ${site.name} provides professional plumbing services for residential and commercial customers throughout our Middle Tennessee service areas.`,
  },
  {
    question: "How quickly can you schedule a visit?",
    answer: `Scheduling depends on availability within our published hours (${site.hours.days}, ${site.hours.time}). Share your preferred timing when you submit a request and we will confirm what works.`,
  },
  {
    question: "Is my city covered if it is near Nashville?",
    answer: `We currently serve ${serviceAreas.length} confirmed communities across Middle Tennessee. If your city is listed on this page, you are in our service area. If you are nearby and unsure, contact us and we will confirm availability.`,
  },
  {
    question: "Do you publish a street address?",
    answer:
      "A street address has not been published. Service is arranged for customers within our confirmed Middle Tennessee communities, and city-level maps are shown for reference.",
  },
  {
    question: "What should I include in my service request?",
    answer:
      "Include your name, phone or email, the city where service is needed, and a clear description of the plumbing issue or project. The more detail you share, the easier it is to follow up accurately.",
  },
  {
    question: "Why choose Swift Flo for local plumbing service?",
    answer: `${site.name} combines local Middle Tennessee coverage, professional plumbing workmanship, and clear communication to provide a straightforward experience from request through completion.`,
  },
];

export function ServiceAreasPageContent() {
  const service = services[0];
  const serviceImage = images[service.image];

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[min(88vh,44rem)] overflow-hidden bg-navy text-white">
        <Image
          src={images.serviceOverview.src}
          alt={images.serviceOverview.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/40"
        />
        <Container className="relative flex min-h-[min(88vh,44rem)] flex-col justify-center py-16 sm:py-20 lg:py-24">
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
            Swift Flo Plumbing Services provides dependable plumbing solutions
            for homeowners and businesses throughout Nashville and surrounding
            Middle Tennessee communities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="light" withArrow>
              Get a Free Quote
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              View Our Services
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why local matters"
            title="Plumbing coverage you can count on."
            text="Clear local availability, dependable service, and convenient scheduling across Middle Tennessee."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name={item.icon} />
                </span>
                <h2 className="mt-5 font-display text-3xl text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
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

      {/* Our Services */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="Professional Plumbing Services"
            text="We provide reliable and professional plumbing services for customers throughout Nashville and surrounding Middle Tennessee communities. Our team is committed to delivering dependable solutions, quality workmanship, and professional customer service."
            align="center"
          />
          <article className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-64 md:min-h-full">
                <Image
                  src={serviceImage.src}
                  alt={serviceImage.alt}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name={service.icon} />
                </span>
                <h3 className="mt-5 font-display text-3xl text-navy sm:text-4xl">
                  {service.name}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  Dependable plumbing solutions for homes and businesses across
                  our Middle Tennessee service area — with quality workmanship
                  and clear customer communication.
                </p>
                <ButtonLink
                  href={`/services/${service.slug}`}
                  className="mt-8 w-fit"
                  withArrow
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* Service Areas grid */}
      <section id="areas-we-serve" className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Service areas"
            title="Areas We Serve"
            text="We proudly provide professional plumbing services throughout Nashville and surrounding Middle Tennessee communities."
            align="center"
          />
          <div className="mt-12">
            <ServiceAreaCards />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={images.ctaTrust.src}
          alt={images.ctaTrust.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              {site.locationLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.08] text-white sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Whether you are located in Nashville or one of the surrounding
              Middle Tennessee communities, our team is ready to help. Contact us
              today to discuss your plumbing needs and request a quote.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact" variant="light" withArrow>
                Get a Free Quote
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Overview */}
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Service overview
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Professional Service Across Middle Tennessee
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              From Nashville to surrounding communities such as Franklin,
              Brentwood, Murfreesboro, Hendersonville, Smyrna, and beyond, we
              provide dependable professional plumbing services designed around
              our customers&apos; needs.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Residential and commercial plumbing support",
                "Clear requests and straightforward follow-up",
                "Coverage across confirmed Middle Tennessee cities",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-sand bg-white px-4 py-3 text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={images.galleryTankless.src}
              alt={images.galleryTankless.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Service Details */}
      <section className="bg-foam py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we serve you"
            title="Reliable Service in Your Community"
            text="Our plumbing coverage extends across a wide range of Middle Tennessee communities. We understand the importance of dependable local service and work to provide every customer with clear communication, professional workmanship, and a smooth experience."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detailPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-display text-2xl text-navy">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{point.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why choose us"
            title="Why Customers Choose Us"
            text="We combine professional plumbing service, dependable communication, and local coverage to provide a straightforward experience for customers throughout Middle Tennessee."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name={item.icon} />
                </span>
                <h3 className="mt-4 font-display text-2xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              text="Find answers to common questions about our plumbing services, availability, and service areas throughout Middle Tennessee."
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
    </>
  );
}
