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
  keywords: [
    "about Swift Flo Plumbing",
    "plumbing company Middle Tennessee",
    "trusted plumber Nashville",
    "local plumbing company",
    "professional plumbers Nashville",
    "reliable plumbing service Tennessee",
  ],
});

const values = [
  {
    title: "Commitment to Quality Service",
    text: "We deliver exceptional standards on every project, utilizing premium materials and precise techniques to guarantee long-lasting plumbing performance.",
  },
  {
    title: "A Professional, Reliable Approach",
    text: "Depend on our experienced technicians for transparent communication, punctual arrivals, and dependable solutions tailored to your unique property needs.",
  },
  {
    title: "Local Smyrna, TN Coverage",
    text: "Proudly serving homes and businesses throughout Smyrna and nearby communities with fast dispatch times and community-focused expertise.",
  },
  {
    title: "Customer Satisfaction",
    text: "Your peace of mind drives everything we do, ensuring friendly care, honest pricing, and results that exceed your expectations.",
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
        eyebrow="About Us"
        title="Hire a Trusted or Premium Residential or Commercial Buildings Plumbing Services Contractor  Swift Flo Plumbing Services"
        description="Partner with Swift Flo Plumbing Services today for elite property protection, expert leak management, and guaranteed customer satisfaction."
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
            <h2 className="mt-3 font-display text-2xl leading-snug text-navy sm:text-3xl">
              Why Choose Swift Flo Plumbing Services for Your All Kinds Plumbing
              Service Needs?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Choosing the right contractor makes all the difference when
                plumbing emergencies or upgrades arise. At Swift Flo Plumbing
                Services, we combine years of hands-on expertise with unmatched
                dedication to keep your home or business running seamlessly.
              </p>
              <p>
                As your trusted local specialists in Smyrna, TN, we prioritize
                transparent communication, swift response times, and meticulous
                workmanship on every job—big or small. From complex sewer
                excavations to routine maintenance, our fully licensed team
                delivers durable, high-quality solutions designed to protect
                your property and give you total peace of mind. Experience
                exceptional customer care and reliable results today.
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
