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
    id: "review-1",
    name: "Michael R.",
    quote:
      "Swift Flo Plumbing Services arrived within minutes of our emergency call, fixing a major office water leak quickly and professionally. Outstanding work!",
    rating: 5,
    location: "Smyrna, TN",
    service: "Emergency Leak Repair",
    isPlaceholder: false,
  },
  {
    id: "review-2",
    name: "Amanda K.",
    quote:
      "Upgrading our home water filtration system was effortless thanks to their knowledgeable technicians. The water quality difference is incredible and noticeable immediately.",
    rating: 5,
    location: "Smyrna, TN",
    service: "Water Filtration System Installation",
    isPlaceholder: false,
  },
  {
    id: "review-3",
    name: "David L.",
    quote:
      "Highly professional team! They handled our complex commercial sewer excavation project with impressive precision, keeping our business open without any major disruptions.",
    rating: 5,
    location: "Middle Tennessee",
    service: "Water & Sewer Excavation",
    isPlaceholder: false,
  },
  {
    id: "review-4",
    name: "Jennifer S.",
    quote:
      "Finding a reliable local contractor in Smyrna used to be tough, but Swift Flo Plumbing exceeded every expectation with their honest pricing and quality.",
    rating: 5,
    location: "Smyrna, TN",
    service: "Plumbing Services",
    isPlaceholder: false,
  },
  {
    id: "review-5",
    name: "Chris M.",
    quote:
      "They completed our bathroom remodeling plumbing updates flawlessly. The crew was punctual, kept the work area clean, and delivered exceptional final results.",
    rating: 5,
    location: "Smyrna, TN",
    service: "Bathroom Remodeling",
    isPlaceholder: false,
  },
];

export function getPublishedTestimonials() {
  return testimonials.filter((item) => !item.isPlaceholder);
}

export function getDisplayTestimonials() {
  const published = getPublishedTestimonials();
  return published.length > 0 ? published : testimonials;
}
