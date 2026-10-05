import { formatServiceAreaList } from "@/data/service-areas";
import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "What areas does Swift Flo Plumbing Services serve?",
    answer: `${site.name} serves customers throughout ${site.locationFull}, including ${formatServiceAreaList(6)}.`,
  },
  {
    question: "What plumbing services do you offer?",
    answer: `${site.name} provides ${site.service.toLowerCase()} for homeowners and businesses throughout ${site.locationFull}. Describe the plumbing work you need when you request a visit.`,
  },
  {
    question: "What are your business hours?",
    answer: `The published hours are ${site.hours.days}, ${site.hours.time}. Visits are arranged inside these hours.`,
  },
  {
    question: "How do I request plumbing service?",
    answer:
      "Fill out the request form and include your name, a way to reach you, your city, and a description of the plumbing work. Swift Flo Plumbing Services follows up from there.",
  },
  {
    question: "How much will plumbing service cost?",
    answer:
      "Pricing is not published on this site. Costs are discussed once you describe the job you need done. Contact us to request a free quote.",
  },
  {
    question: "Do you serve both homes and businesses?",
    answer: `Yes. ${site.name} provides professional plumbing services for residential and commercial customers across our Middle Tennessee service areas.`,
  },
];

export function HomeFaq() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
        <div data-reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions."
            text={`Straightforward answers about requesting plumbing service throughout ${site.locationFull}.`}
          />
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
