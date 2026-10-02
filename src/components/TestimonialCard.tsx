import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/cn";
import { StarIcon } from "@/components/Icons";

export function StarRating({ rating }: { rating: number | null }) {
  const label =
    rating === null ? "Rating not provided" : `${rating} out of 5 stars`;

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-copper" role="img" aria-label={label}>
        {Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} filled={rating !== null && index < rating} />
        ))}
      </div>
      <span className="text-xs font-medium text-muted">{label}</span>
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <figure
      data-nosnippet={testimonial.isPlaceholder ? true : undefined}
      className={cn(
        "flex h-full flex-col rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <StarRating rating={testimonial.rating} />
        {testimonial.isPlaceholder ? (
          <span className="rounded-full bg-paper px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-copper-deep">
            Placeholder
          </span>
        ) : null}
      </div>
      <blockquote className="mt-5 flex-1 font-display text-2xl leading-snug text-navy">
        <span aria-hidden="true" className="text-copper">
          “
        </span>
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-sand pt-4">
        <p className="font-semibold text-navy">{testimonial.name}</p>
        <p className="mt-1 text-sm text-muted">
          {[testimonial.location, testimonial.service].filter(Boolean).join(" · ")}
        </p>
      </figcaption>
    </figure>
  );
}
