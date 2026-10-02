import { Container } from "@/components/Container";
import { Icon, type IconName } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";

type DetailCard = {
  title: string;
  summary: string;
  points: string[];
  icon: IconName;
};

const details: DetailCard[] = [
  {
    title: "Service Coverage",
    summary:
      "Spanning 12 major Middle Tennessee hubs including Nashville, Franklin, Brentwood, Murfreesboro, and beyond.",
    points: [
      "Davidson, Williamson, Rutherford, Sumner & Wilson counties",
      "Both established neighborhoods and new home developments",
      "Residential homes, townhomes, and light commercial spaces",
    ],
    icon: "pin",
  },
  {
    title: "Professional Approach",
    summary:
      "Trained, courteous technicians focused exclusively on professional plumbing excellence.",
    points: [
      "Clean uniforms and protective shoe boot covers on every call",
      "Full adherence to Tennessee plumbing & building codes",
      "Respectful of your home, time, and property boundaries",
    ],
    icon: "shieldCheck",
  },
  {
    title: "Customer Communication",
    summary:
      "Clear, transparent dialogue from your very first quote inquiry through final job completion.",
    points: [
      "Plain-language explanations of plumbing issues and repairs",
      "Upfront quote estimates before any hands-on work begins",
      "Prompt notifications and clear arrival timeframes",
    ],
    icon: "messageSquare",
  },
  {
    title: "Convenient Scheduling",
    summary:
      "Flexible booking 7 days a week to accommodate your busy family and work calendar.",
    points: [
      "Monday through Sunday: 8:00 AM – 8:00 PM",
      "Fast response for unexpected leak and stoppage issues",
      "Simple online inquiry form with rapid response",
    ],
    icon: "calendar",
  },
  {
    title: "Quality Standards",
    summary:
      "Durable, long-lasting materials and techniques designed to prevent repeat problems.",
    points: [
      "Premium copper, PEX, brass fittings, and contractor-grade parts",
      "Comprehensive pressure testing before concluding visits",
      "Workmanship integrity backed by professional standards",
    ],
    icon: "award",
  },
  {
    title: "Local Availability",
    summary:
      "Technicians stationed locally throughout Middle Tennessee so help is never far away.",
    points: [
      "Avoid long travel delays typical of out-of-town contractors",
      "Knowledgeable of local municipal water pressure variations",
      "Dedicated relationship with Middle Tennessee communities",
    ],
    icon: "building",
  },
];

export function ServiceDetails() {
  return (
    <section className="bg-foam py-16 sm:py-24" aria-labelledby="service-details-heading">
      <Container>
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Our Commitment"
            title="Reliable Service in Your Community"
            text="Our service coverage extends across a wide range of Middle Tennessee communities. We understand the importance of dependable local service and work to provide every customer with clear communication, professional workmanship, and a smooth experience."
          />
        </div>

        <div
          data-reveal-group
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {details.map((detail) => (
            <article
              key={detail.title}
              data-reveal-item
              className="flex flex-col justify-between rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/50 hover:shadow-lg"
            >
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name={detail.icon} className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-display text-2xl text-navy">
                  {detail.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {detail.summary}
                </p>

                <ul className="mt-5 space-y-2 border-t border-sand/60 pt-4">
                  {detail.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-xs text-ink/80"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-tide/15 text-tide-deep">
                        <Icon name="check" className="h-2.5 w-2.5" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
