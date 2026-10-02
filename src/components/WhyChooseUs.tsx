import Link from "next/link";
import { site } from "@/data/site";
import { Icon, type IconName } from "@/components/Icons";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type Benefit = {
  title: string;
  tagline: string;
  text: string;
  icon: IconName;
  featured?: boolean;
};

const benefits: Benefit[] = [
  {
    title: "Wide Service Coverage",
    tagline: "Serving Nashville & Surrounding Communities",
    text: "From Nashville to Brentwood, Franklin, Murfreesboro, and beyond, our regional coverage ensures dependable plumbing service is always accessible.",
    icon: "pin",
    featured: true,
  },
  {
    title: "Local Expertise",
    tagline: "Serving Communities Throughout Middle Tennessee",
    text: "Familiar with Middle Tennessee building styles, municipal water pressures, and local codes to deliver accurate, lasting repairs.",
    icon: "building",
  },
  {
    title: "Professional Service",
    tagline: "Focused on Quality and Customer Satisfaction",
    text: "Every service visit is treated as a master plumbing project with pristine workmanship and top-grade materials.",
    icon: "wrench",
  },
  {
    title: "Reliable Communication",
    tagline: "Clear Communication from Initial Inquiry to Completion",
    text: "No guesswork or unexpected surprise fees. We discuss options, clarify costs, and keep you informed at every stage.",
    icon: "messageSquare",
  },
  {
    title: "Customer Focused",
    tagline: "Every Project Approached with Attention to Needs",
    text: "We listen carefully to your concerns, respect your property, and tailor our plumbing recommendations to your household budget.",
    icon: "users",
  },
  {
    title: "Dependable Experience",
    tagline: "A Simple, Convenient & Professional Process",
    text: `Convenient 7-day hours (${site.hours.days}, ${site.hours.time}) with easy booking designed around your schedule.`,
    icon: "shieldCheck",
  },
];

export function WhyChooseUs() {
  const featured = benefits.find((b) => b.featured);
  const rest = benefits.filter((b) => !b.featured);

  return (
    <section className="bg-paper py-16 sm:py-24" aria-labelledby="why-choose-heading">
      <Container>
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="The Swift Flo Difference"
            title="Why Customers Choose Us"
            text="We combine professional service, dependable communication, and local coverage to provide a straightforward experience for customers throughout Middle Tennessee."
          />
        </div>

        <div data-reveal-group className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured && (
            <article
              data-reveal-item
              className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-tide-deep via-tide-deep to-navy p-8 text-white shadow-xl lg:row-span-2"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-14 -left-10 h-64 w-64 rounded-full bg-navy/40"
              />

              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white shadow-inner">
                  <Icon name={featured.icon} className="h-7 w-7" />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-copper">
                  {featured.tagline}
                </p>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/85">
                  {featured.text}
                </p>
              </div>

              <div className="relative mt-8 border-t border-white/20 pt-6">
                <p className="text-xs uppercase tracking-wider text-white/70">
                  Ready to book service?
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-copper px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-copper-deep"
                >
                  Request a Free Quote
                  <span>→</span>
                </Link>
              </div>
            </article>
          )}

          {rest.map((benefit) => (
            <article
              key={benefit.title}
              data-reveal-item
              className="group flex flex-col justify-between rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/50 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep transition duration-300 group-hover:bg-tide-deep group-hover:text-white">
                    <Icon name={benefit.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] font-semibold text-copper-deep">
                    Verified Standard
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-tide-deep">
                  {benefit.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {benefit.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
