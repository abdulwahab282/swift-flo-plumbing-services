import { cn } from "@/lib/cn";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    text: "Reach out to our friendly team today for fast assistance with all your plumbing emergencies and needs.",
  },
  {
    number: "02",
    title: "Schedule Your Service",
    text: "Book a convenient appointment with our expert local technicians to keep your property running smoothly.",
  },
  {
    number: "03",
    title: "Get Professional Plumbing Service",
    text: "Experience top-tier workmanship and reliable solutions from the trusted specialists at Swift Flo Plumbing Services.",
  },
];

export function HowItWorks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "bg-navy text-white" : "bg-foam"}>
      <Container className="py-20 sm:py-28">
        <div data-reveal>
          <SectionHeading
            eyebrow="How it works"
            title="Three simple steps."
            text="Requesting plumbing service follows a short, clear path."
            tone={dark ? "light" : "dark"}
          />
        </div>
        <ol data-reveal-group className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              data-reveal-item
              className={cn(
                "relative rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1",
                dark
                  ? "border border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/[0.08]"
                  : "border border-sand bg-white hover:border-copper/50 hover:shadow-lg",
              )}
            >
              <span
                className={cn(
                  "inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-semibold",
                  dark ? "bg-copper text-white" : "bg-tide-deep text-white",
                )}
              >
                {step.number}
              </span>
              <h3
                className={cn(
                  "mt-5 font-display text-2xl",
                  dark ? "text-white" : "text-navy",
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "mt-3 leading-relaxed",
                  dark ? "text-white/75" : "text-muted",
                )}
              >
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
