import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero, PageSection } from "@/components/PageHero";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { site } from "@/data/site";
import { getDisplayTestimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Customer Testimonials",
  description:
    "Customer feedback for Swift Flo Plumbing Services in Smyrna, Tennessee. Real testimonials will be published as customers share them.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const reviews = getDisplayTestimonials();

  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What Our Customers Say"
        description={`Stories from customers of ${site.name} will live here. Until real feedback is provided, the cards below are clearly marked placeholders.`}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Testimonials" }]}
      />
      <PageSection>
        <Container>
          <TestimonialsGrid testimonials={reviews} />
        </Container>
      </PageSection>
      <CtaSection title="Need Plumbing Service in Smyrna, TN?" />
    </>
  );
}
