import { Container } from "@/components/Container";
import { Icon, type IconName } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";

type Highlight = {
  title: string;
  description: string;
  badge: string;
  icon: IconName;
};

const highlights: Highlight[] = [
  {
    title: "Local Coverage",
    description:
      "Proudly serving 12 primary communities across Middle Tennessee, ensuring dedicated plumbers are nearby when you need service.",
    badge: "12 Cities Served",
    icon: "pin",
  },
  {
    title: "Reliable Service",
    description:
      "Every project is completed with premium materials, master-level craftsmanship, and rigorous quality testing for total peace of mind.",
    badge: "Guaranteed Quality",
    icon: "shieldCheck",
  },
  {
    title: "Convenient Availability",
    description:
      "Available Monday through Sunday, 8:00 AM to 8:00 PM, making it simple to book routine visits and urgent plumbing repairs.",
    badge: "Open 7 Days a Week",
    icon: "clock",
  },
  {
    title: "Clear Communication",
    description:
      "Upfront quotes, straightforward explanations without technical confusion, and prompt follow-up on every single request.",
    badge: "Honest & Upfront",
    icon: "messageSquare",
  },
];

export function Highlights() {
  return (
    <section className="border-y border-sand/60 bg-cream py-16 sm:py-24">
      <Container>
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Why Middle Tennessee Trusts Us"
            title="Dependable Plumbing Focused On Your Needs"
            text="Swift Flo delivers responsive, trustworthy plumbing service designed to make repairs, upgrades, and maintenance straightforward and stress-free."
          />
        </div>

        <div
          data-reveal-group
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item) => (
            <article
              key={item.title}
              data-reveal-item
              className="group relative flex flex-col justify-between rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-tide/50 hover:shadow-xl hover:shadow-navy/5"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foam text-tide-deep transition duration-300 group-hover:bg-tide-deep group-hover:text-white">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-paper px-3 py-1 text-[11px] font-semibold tracking-wide text-copper-deep">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-sand/50 pt-4">
                <span className="inline-flex items-center text-xs font-semibold text-tide-deep transition group-hover:translate-x-1">
                  Learn more about our standards →
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
