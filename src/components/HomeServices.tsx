import Link from "next/link";
import { services } from "@/data/services";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceList } from "@/components/ServiceCard";

export function HomeServices() {
  return (
    <section
      id="services"
      className="bg-foam/60 py-16 sm:py-24"
      aria-labelledby="home-services-heading"
    >
      <Container>
        <div
          data-reveal
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Our Services"
              title="Professional Plumbing Services"
              text="We provide reliable and professional plumbing services for customers throughout Nashville and surrounding Middle Tennessee communities. Our team is committed to delivering dependable solutions, quality workmanship, and professional customer service."
            />
            <p className="mt-3 text-sm text-muted">
              Explore our range of professional services designed to meet the
              needs of homeowners and businesses throughout our service area.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <ButtonLink href="/contact" withArrow>
              Request Plumbing Quote
            </ButtonLink>
          </div>
        </div>

        <div data-reveal className="mt-12">
          <ServiceList services={services} />
        </div>

        <div
          data-reveal
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-sand bg-white p-6 sm:flex-row sm:px-8"
        >
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg text-navy">
              Need a custom plumbing repair or fixture installation?
            </h4>
            <p className="text-sm text-muted">
              Our licensed team handles specialized residential and commercial jobs across all 12 service locations.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 font-semibold text-tide-deep underline decoration-copper underline-offset-4 hover:text-copper"
          >
            Describe your plumbing project →
          </Link>
        </div>
      </Container>
    </section>
  );
}
