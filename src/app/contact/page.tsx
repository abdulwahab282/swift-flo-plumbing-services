import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero, PageSection } from "@/components/PageHero";
import { getServiceArea } from "@/data/service-areas";
import { phoneHref, site } from "@/data/site";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact ${site.name} in ${site.locationLabel} to request plumbing service. Open ${site.hours.days}, ${site.hours.time}.`,
  path: "/contact",
  keywords: [
    "contact Swift Flo Plumbing",
    "request plumber Nashville",
    "plumbing quote Middle Tennessee",
    "schedule plumbing service",
    "plumber phone number Nashville",
    "emergency plumbing contact",
  ],
});

const details = [
  { label: "Business", value: site.name },
  { label: "Service", value: site.service },
  { label: "Location", value: site.locationLabel },
  { label: "Days", value: site.hours.days },
  { label: "Hours", value: site.hours.time },
];

export default function ContactPage() {
  const area = getServiceArea("nashville-tn") ?? getServiceArea("smyrna-tn");

  if (!area) {
    throw new Error("No service area available for contact map");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Plumbing Service."
        description="Contact Swift Flo Plumbing Services today for reliable residential and commercial plumbing solutions in Smyrna, TN. Reach out by phone or online to schedule your service or request emergency assistance."
        image={images.fittings}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />
      <PageSection>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[1.75rem] bg-navy p-7 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Visit details
            </p>
            <dl className="mt-6 space-y-5">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-lg">{item.value}</dd>
                </div>
              ))}
              {site.phone ? (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    Phone
                  </dt>
                  <dd className="mt-1 text-lg">
                    <a href={phoneHref(site.phone)} className="underline underline-offset-4">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
              {site.email ? (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    Email
                  </dt>
                  <dd className="mt-1 text-lg">
                    <a href={`mailto:${site.email}`} className="underline underline-offset-4">
                      {site.email}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </aside>
          <ContactForm />
        </Container>
      </PageSection>
      <section className="bg-paper pb-20 sm:pb-28">
        <Container>
          <h2 className="font-display text-4xl text-navy">
            Serving {site.locationFull}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {site.name} provides professional plumbing services throughout
            Nashville and surrounding Middle Tennessee communities. The map shows{" "}
            {area.city} as a reference point because a street address has not been
            published.
          </p>
          <div className="mt-8">
            <MapEmbed area={area} />
          </div>
        </Container>
      </section>
    </>
  );
}
