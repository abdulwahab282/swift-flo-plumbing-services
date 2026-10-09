import Link from "next/link";
import { Icon } from "@/components/Icons";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const benefits = [
  {
    title: "Local Middle Tennessee Coverage",
    text: "We proudly serve homes and businesses across Smyrna and the surrounding Middle Tennessee region with prompt, dependable local plumbing expertise.",
    icon: "pin" as const,
    featured: true,
  },
  {
    title: "Reliable Plumbing Service",
    text: "Depend on our experienced team for consistent, high-quality solutions that protect your property and ensure long-lasting plumbing performance every single day.",
    icon: "shield" as const,
  },
  {
    title: "Professional Workmanship",
    text: "Our certified specialists deliver meticulous attention to detail on every repair, installation, and upgrade to guarantee exceptional industry standards.",
    icon: "wrench" as const,
  },
  {
    title: "Fast Response",
    text: "When plumbing emergencies strike, our rapid dispatch team arrives quickly to minimize damage and restore your peace of mind fast.",
    icon: "clock" as const,
  },
  {
    title: "Customer-Focused Service",
    text: "Your satisfaction is our priority, delivering honest communication, transparent pricing, and personalized care tailored to your unique household needs.",
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
            title="Why Choose Swift Flo Plumbing Services Contractor Smyrna, TN?"
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
