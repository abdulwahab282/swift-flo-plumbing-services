export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  rating: number | null;
  location?: string;
  service?: string;
  isPlaceholder: boolean;
};

/**
 * Replace placeholder entries with genuine customer reviews.
 * Set isPlaceholder to false only for a real review, and add a rating
 * only when the customer provided one. Placeholder cards are hidden
 * automatically once at least one real review exists.
 */
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    name: "Customer name",
    quote:
      "Placeholder text for a customer review. Replace this with a genuine testimonial before publishing reviews.",
    rating: null,
    location: "Location",
    service: "Plumbing Services",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    name: "Customer name",
    quote:
      "Placeholder text for a second customer review. Add the customer’s own words here.",
    rating: null,
    location: "Location",
    service: "Plumbing Services",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    name: "Customer name",
    quote:
      "Placeholder text for another customer review. Add a star rating only when a customer provides one.",
    rating: null,
    location: "Location",
    service: "Plumbing Services",
    isPlaceholder: true,
  },
];

export function getPublishedTestimonials() {
  return testimonials.filter((item) => !item.isPlaceholder);
}

export function getDisplayTestimonials() {
  const published = getPublishedTestimonials();
  return published.length > 0 ? published : testimonials;
}
