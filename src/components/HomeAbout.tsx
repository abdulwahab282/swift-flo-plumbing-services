import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { Container } from "@/components/Container";

const facts = [
  { label: "Service area", value: site.locationLabel },
  { label: "Monday through Sunday", value: "7 days" },
  { label: "Daily hours", value: "8 AM – 8 PM" },
  { label: "Primary service", value: "Plumbing" },
];

export function HomeAbout() {
  return (
    <section className="bg-cream" aria-labelledby="home-about-heading">
      <Container className="grid items-stretch gap-10 py-12 md:grid-cols-2 md:py-16 lg:gap-14 lg:py-20">
        <div className="order-1 flex min-w-0 flex-col justify-center md:order-2">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              About
            </p>
            <h2
              id="home-about-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              Swift Flo Plumbing Services Best Choice Residential or Commercial Buildings Plumbing Services Contractor or Company.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                When property emergencies strike, finding a reliable partner is
                essential. As the premier Swift Flo Plumbing Services best
                choice residential or commercial buildings plumbing services
                contractor or company, we take pride in delivering top-tier
                solutions tailored to your unique needs.
              </p>
              <p>
                Whether you manage a bustling commercial facility or own a
                family home, our skilled specialists handle everything from
                complex water pipe leak repairs to seamless kitchen and bathroom
                line replacements. We combine years of local expertise with
                cutting-edge tools to ensure fast, durable results. Trust our
                dedicated professionals to protect your property, restore
                functionality, and provide absolute peace of mind every single
                day.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex w-fit font-semibold text-tide-deep underline decoration-copper underline-offset-4"
            >
              About the company
            </Link>
          </div>
          <dl
            data-reveal-group
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-sand pt-6 lg:grid-cols-4 lg:gap-x-4"
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                data-reveal-item
                className="flex min-w-0 flex-col-reverse"
              >
                <dt className="mt-1 text-xs font-medium leading-snug text-copper-deep">
                  {fact.label}
                </dt>
                <dd className="text-sm font-semibold leading-snug text-navy">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          data-reveal
          className="order-2 relative h-full min-w-0 md:order-1 md:min-h-[32rem]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] md:absolute md:inset-0 md:aspect-auto">
            <Image
              src={images.work.src}
              alt={images.work.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
