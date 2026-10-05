import Link from "next/link";
import { site } from "@/data/site";
import { Icon } from "@/components/Icons";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const benefits = [
  {
    title: "Local Middle Tennessee Coverage",
    text: "Professional plumbing service for customers across Nashville and surrounding Middle Tennessee communities.",
    icon: "pin" as const,
    featured: true,
  },
  {
    title: "Reliable Plumbing Service",
    text: "A clear way to request plumbing work, with the service and schedule published up front.",
    icon: "shield" as const,
  },
  {
    title: "Fast Response",
    text: `Reach the company during open hours, ${site.hours.days}, ${site.hours.time}.`,
    icon: "clock" as const,
  },
  {
    title: "Professional Workmanship",
    text: "Each visit is approached as professional plumbing work, focused on the service you requested.",
    icon: "wrench" as const,
  },
  {
    title: "Customer-Focused Service",
    text: "Your request starts with your name, a way to reach you, and a description of the plumbing you need.",
    icon: "users" as const,
  },
];

export function WhyChooseUs() {
  const featured = benefits.find((benefit) => benefit.featured);
  const rest = benefits.filter((benefit) => !benefit.featured);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="A clear, local plumbing company."
            text={`Swift Flo Plumbing Services keeps the offer simple: ${site.service.toLowerCase()} for customers throughout ${site.locationFull}.`}
          />
        </div>
        <div data-reveal-group className="mt-12 grid gap-4 lg:grid-cols-3">
          {featured ? (
            <article
              data-reveal-item
              className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-tide-deep via-tide-deep to-navy p-7 text-white lg:row-span-2"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 -left-10 h-56 w-56 rounded-full bg-navy/30"
              />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Icon name={featured.icon} className="h-7 w-7" />
              </span>
              <div className="relative mt-6">
                <h3 className="font-display text-3xl">{featured.title}</h3>
                <p className="mt-3 text-white/85">{featured.text}</p>
                <Link
                  href="/service-areas"
                  className="mt-5 inline-block text-sm font-semibold text-white underline decoration-copper underline-offset-4"
                >
                  See the service areas
                </Link>
              </div>
            </article>
          ) : null}
          {rest.map((benefit) => (
            <article
              key={benefit.title}
              data-reveal-item
              className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                <Icon name={benefit.icon} />
              </span>
              <h3 className="mt-4 font-display text-2xl text-navy">{benefit.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{benefit.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
