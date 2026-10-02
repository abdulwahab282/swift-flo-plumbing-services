import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "@/components/TestimonialCard";

export function TestimonialsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
