import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "What areas does Swift Flo Plumbing Services cover?",
    answer:
      "We proudly provide dependable residential and commercial plumbing solutions across Smyrna, TN, and the surrounding Middle Tennessee region with prompt, local dispatch teams.",
  },
  {
    question: "Do you offer emergency plumbing repairs?",
    answer:
      "Yes, our experienced local specialists are available to handle urgent water pipe leaks, severe clogs, and unexpected plumbing failures to protect your property quickly.",
  },
  {
    question: "Are your plumbing technicians licensed and insured?",
    answer:
      "Absolutely. Every professional on our team is fully licensed and insured, ensuring safe, top-tier workmanship for every home and office building project.",
  },
  {
    question: "What services are included for commercial properties?",
    answer:
      "We handle heavy-duty commercial plumbing needs, including large-scale water and sewer excavation repairs, camera inspections, fixture maintenance, and comprehensive system replacements.",
  },
  {
    question: "How do I schedule a service appointment?",
    answer:
      "Booking is easy. You can contact our friendly customer service team directly by phone or through our website to schedule a convenient appointment time.",
  },
  {
    question: "Do you provide water filtration system installations?",
    answer:
      "Yes, we install advanced water filtration systems to ensure your entire home enjoys clean, great-tasting, and safe water straight from every tap.",
  },
];

export function HomeFaq() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        <div data-reveal>
          <SectionHeading eyebrow="FAQ" title="FAQs" />
        </div>
        <div data-reveal-group className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              data-reveal-item
              open={index === 0}
              className="group rounded-[1.5rem] border border-sand bg-white px-5 py-4 sm:px-6 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-navy sm:text-2xl">
                {faq.question}
                <Icon
                  name="chevron"
                  className="h-5 w-5 shrink-0 text-copper-deep transition duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
