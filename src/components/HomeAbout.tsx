import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";

const stats = [
  { value: "12", label: "Middle TN Cities Served" },
  { value: "7 Days", label: "Open Mon – Sun" },
  { value: "8 AM – 8 PM", label: "Daily Operating Hours" },
  { value: "100%", label: "Dedicated to Plumbing" },
];

export function HomeAbout() {
  return (
    <section className="bg-paper py-16 sm:py-24" aria-labelledby="home-about-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div
          data-reveal
          className="relative h-full min-w-0"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] border border-sand bg-white shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={images.work.src}
              alt={images.work.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          {/* Subtle Accent Box */}
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-sand bg-white p-5 shadow-xl sm:block max-w-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foam text-tide-deep">
                <Icon name="award" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-navy">Quality Craftsmanship</p>
                <p className="text-xs text-muted">Exceeding local Tennessee code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col justify-center">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              About Swift Flo
            </p>
            <h2
              id="home-about-heading"
              className="mt-3 font-display text-4xl leading-[1.1] text-navy sm:text-5xl"
            >
              Built on Quality, Integrity & Local Plumbing Expertise.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                {site.name} is dedicated exclusively to providing premier plumbing
                solutions across Middle Tennessee. We treat every home and business
                with the highest level of care, offering dependable repairs, installations,
                and preventative care.
              </p>
              <p>
                Our philosophy is simple: transparent communication, fair upfront
                estimates, and master-level workmanship. Whether you need a persistent
                leak resolved in Nashville, a water heater replaced in Brentwood, or
                drain cleaning in Murfreesboro, we are ready to assist.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-tide-deep px-6 py-3 text-sm font-semibold text-white shadow-md shadow-tide-deep/20 transition hover:bg-tide"
              >
                About Our Company
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-sand bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-copper"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <dl
            data-reveal-group
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-sand pt-8 sm:grid-cols-4 sm:gap-x-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-reveal-item
                className="flex min-w-0 flex-col"
              >
                <dd className="font-display text-2xl font-bold text-tide-deep sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs font-medium leading-snug text-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
