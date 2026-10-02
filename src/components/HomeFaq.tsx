import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "What service areas does Swift Flo Plumbing Services cover?",
    answer:
      "We proudly provide professional plumbing services throughout 12 Middle Tennessee communities: Nashville, Brentwood, Franklin, Gallatin, Hendersonville, La Vergne, Lebanon, Mt. Juliet, Murfreesboro, Smyrna, Spring Hill, and Thompson's Station.",
  },
  {
    question: "What specific plumbing services do you provide?",
    answer:
      "We specialize exclusively in professional plumbing. Our services include drain cleaning and unclogging, water heater repair and installation (both tank and tankless), pipe leak detection and repair, faucet and fixture installation, toilet repair and replacement, whole-home repiping, and bathroom remodel plumbing.",
  },
  {
    question: "What are your business hours, and do you work on weekends?",
    answer:
      `Our operating hours are ${site.hours.days}, from ${site.hours.time}. Because we are open seven days a week, you can schedule weekend visits at standard convenient hours without hassle.`,
  },
  {
    question: "How do I request a free quote for plumbing service?",
    answer:
      "You can request a free quote anytime through our online contact form or by calling us directly at 629-238-8322. Simply tell us about your plumbing problem or project, your location, and your preferred timing, and our team will follow up promptly.",
  },
  {
    question: "How quickly can a plumber arrive at my Middle Tennessee home?",
    answer:
      "Because our service vehicles operate throughout Middle Tennessee corridors, we coordinate routing efficiently to provide prompt arrival windows within published business hours.",
  },
  {
    question: "Are your plumbers licensed and insured in Tennessee?",
    answer:
      "Yes, Swift Flo Plumbing Services adheres strictly to Tennessee state and municipal plumbing codes, safety regulations, and holds full licensing and comprehensive liability insurance for your protection.",
  },
  {
    question: "Do you repair both tank and tankless water heaters?",
    answer:
      "Yes. We service, flush, repair, and install all major brands of gas and electric water heaters, including conventional storage tank units and high-efficiency on-demand tankless water heating systems.",
  },
  {
    question: "Can you assist with older or historic plumbing systems in Middle Tennessee?",
    answer:
      "Absolutely. Many homes in Nashville, Franklin, and surrounding areas have legacy galvanized steel, cast iron, or polybutylene pipes. Our team has extensive experience troubleshooting, repairing sections, and performing modern PEX or copper repiping.",
  },
  {
    question: "What should I do immediately if I experience a major water leak?",
    answer:
      "If you experience an active burst or major leak, immediately locate and shut off your home's main water supply valve (often located in a utility closet, basement, or near the street meter). Then contact Swift Flo so we can dispatch a plumber to safely isolate and repair the line.",
  },
  {
    question: "How does your pricing structure work?",
    answer:
      "We believe in straightforward, honest communication. Once our technician inspects the issue or discusses your project requirements, we explain the work and provide a clear quote before commencing hands-on repairs.",
  },
  {
    question: "What equipment do you use for clearing stubborn drain clogs?",
    answer:
      "We utilize professional-grade mechanical drain snakes, rotary root cutters, and inspection methods that effectively remove soap scum, hair, food waste, grease, and invasive tree roots without cracking your pipes.",
  },
  {
    question: "Do you offer warranties on your plumbing workmanship and parts?",
    answer:
      "Yes. All of our professional plumbing installations and repairs are backed by our workmanship quality guarantee in addition to any manufacturer warranties on installed fixtures, valves, and water heaters.",
  },
];

export function HomeFaq() {
  return (
    <section className="bg-cream py-16 sm:py-24" aria-labelledby="faq-heading">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
        <div data-reveal>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Common Questions About Our Plumbing Services"
            text="Find answers to common questions about our services, availability, and service areas throughout Middle Tennessee."
          />
          <div className="mt-8 rounded-2xl border border-sand bg-white p-6 shadow-sm">
            <h4 className="font-display text-lg text-navy">Have a specific question?</h4>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Our dispatch team is happy to discuss your home&apos;s plumbing setup or schedule an on-site visit.
            </p>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-tide-deep hover:text-copper"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              Call us at {site.phone}
            </a>
          </div>
        </div>

        <div data-reveal-group className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              data-reveal-item
              open={index === 0}
              className="group rounded-[1.5rem] border border-sand bg-white px-5 py-4.5 sm:px-7 sm:py-5 shadow-sm transition hover:border-tide/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-navy sm:text-xl">
                <span>{faq.question}</span>
                <Icon
                  name="chevron"
                  className="h-5 w-5 shrink-0 text-copper-deep transition duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3.5 text-sm leading-relaxed text-muted sm:text-base border-t border-sand/40 pt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
