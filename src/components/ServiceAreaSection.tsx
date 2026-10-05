import Link from "next/link";
import { site } from "@/data/site";
import { serviceAreas } from "@/data/service-areas";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceAreaCards } from "@/components/ServiceAreaCards";

export function ServiceAreaSection() {
  return (
    <section className="bg-foam py-20 sm:py-28">
      <Container>
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Service areas"
            title="Areas We Serve"
            text={`We proudly provide professional plumbing services throughout Nashville and surrounding Middle Tennessee communities — ${serviceAreas.length} confirmed locations and growing.`}
            align="center"
          />
        </div>
        <div data-reveal className="mt-12">
          <ServiceAreaCards />
        </div>
        <div
          data-reveal
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <ButtonLink href="/service-areas" withArrow>
            Explore All Service Areas
          </ButtonLink>
          <Link
            href="/contact#request-service"
            className="inline-flex min-h-12 items-center justify-center rounded-full px-2 text-sm font-semibold text-tide-deep underline decoration-copper/60 underline-offset-4"
          >
            Request plumbing service
          </Link>
        </div>
        <p data-reveal className="mt-6 text-center text-sm text-muted">
          Open {site.hours.days}, {site.hours.time}
        </p>
      </Container>
    </section>
  );
}
