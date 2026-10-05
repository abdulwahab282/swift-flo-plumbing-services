import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";
import { Container } from "@/components/Container";
import { PageHero, PageSection } from "@/components/PageHero";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { getPublishedTestimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: `Learn about ${site.name}, a plumbing company serving customers throughout ${site.locationFull} with a professional, reliable approach.`,
  path: "/about",
});

const values = [
  {
    title: "Commitment to quality service",
    text: "The work starts with a clear request and a published schedule, so customers know how to reach the company and when service is available.",
  },
  {
    title: "A professional, reliable approach",
    text: "Plumbing service is handled as professional work, with attention on the job you requested.",
  },
  {
    title: "Local Middle Tennessee coverage",
    text: "Swift Flo Plumbing Services serves customers throughout Nashville and surrounding Middle Tennessee communities with clear, dependable local plumbing service.",
  },
  {
    title: "Customer satisfaction",
    text: "Satisfaction starts with a straightforward conversation: who you are, how to reach you, and what plumbing service you need.",
  },
];

const facts = [
  { value: site.locationLabel, label: "Service area" },
  { value: "7 days", label: "Monday through Sunday" },
  { value: "8 AM – 8 PM", label: "Daily hours" },
  { value: "Plumbing", label: "Primary service" },
];

export default function AboutPage() {
  const reviews = getPublishedTestimonials();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Plumbing service with a local focus."
        description={`${site.name} serves customers in ${site.locationFull}. The company offers ${site.service.toLowerCase()} during published hours, with a straightforward way to request a visit.`}
        image={images.work}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "About" }]}
      />

      <PageSection>
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4]">
            <Image
              src={images.bathroom.src}
              alt={images.bathroom.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Company introduction
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Built around one clear service.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                {site.name} is a plumbing company for customers in{" "}
                {site.locationFull}. The business is organized around a simple
                idea: people should be able to request professional plumbing
                service from a local company that is plain about what it offers
                and when it is open.
              </p>
              <p>
                That offer is {site.service.toLowerCase()}. Hours are{" "}
                {site.hours.days}, {site.hours.time}. If you are in{" "}
                {site.region}, you can{" "}
                <Link
                  href="/contact#request-service"
                  className="font-semibold text-tide-deep underline decoration-copper/60 underline-offset-4"
                >
                  request service
                </Link>{" "}
                and describe the plumbing work you need.
              </p>
            </div>
          </div>
        </Container>
      </PageSection>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="font-display text-3xl text-navy">{value.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-14 text-white">
        <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="font-display text-3xl text-copper">{fact.value}</p>
              <p className="mt-2 text-sm text-white/70">{fact.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <PageSection>
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
            Customer trust
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl text-navy sm:text-5xl">
            What customers say
          </h2>
          {reviews.length > 0 ? (
            <div className="mt-10">
              <TestimonialsGrid testimonials={reviews} />
            </div>
          ) : (
            <div className="mt-8 max-w-2xl rounded-[1.75rem] border border-dashed border-sand bg-paper p-8">
              <p className="text-lg leading-relaxed text-muted">
                Genuine customer testimonials will be published here when they
                are available. {site.name} will not display sample reviews as if
                they were real feedback.
              </p>
              <Link
                href="/testimonials"
                className="mt-4 inline-block font-semibold text-tide-deep underline decoration-copper/60 underline-offset-4"
              >
                Visit the testimonials page
              </Link>
            </div>
          )}
        </Container>
      </PageSection>

      <CtaSection />
    </>
  );
}
