import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { getDisplayTestimonials } from "@/data/testimonials";

export function HomeTestimonials() {
  const reviews = getDisplayTestimonials();

  return (
    <section className="overflow-hidden bg-paper py-20 sm:py-28">
      <Container>
        <div
          data-reveal
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say"
            text="A place for feedback from people who have used Swift Flo Plumbing Services throughout Middle Tennessee."
          />
        </div>
        <div data-reveal className="mt-8">
          <TestimonialsCarousel testimonials={reviews} />
        </div>
      </Container>
    </section>
  );
}
