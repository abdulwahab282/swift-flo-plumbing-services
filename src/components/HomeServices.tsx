import Image from "next/image";
import { images } from "@/data/images";
import { services, type Service } from "@/data/services";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { ServiceList } from "@/components/ServiceCard";

function ServicesIntro() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
        Services
      </p>
      <h2
        id="home-services-heading"
        className="mt-3 max-w-xl font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
      >
        Plumbing services, ready when you are.
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        From drain cleaning and camera inspections to water heater service and
        bathroom remodeling, {site.name} provides professional plumbing for
        customers throughout {site.locationFull}.
      </p>
    </>
  );
}

function SingleService({ service }: { service: Service }) {
  const image = images[service.image];

  return (
    <Container className="grid items-stretch gap-10 py-12 md:grid-cols-2 md:py-16 lg:gap-14 lg:py-20">
      <div data-reveal className="flex min-w-0 flex-col justify-center">
        <ServicesIntro />
        <h3 className="mt-8 font-display text-3xl text-navy">{service.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {service.summary}
        </p>
        <p className="mt-6 border-t border-sand pt-6 text-sm font-semibold leading-snug text-navy">
          {site.locationLabel}
          <span className="mx-2 text-copper" aria-hidden="true">
            ·
          </span>
          {site.hours.days}
          <span className="mx-2 text-copper" aria-hidden="true">
            ·
          </span>
          {site.hours.time}
        </p>
        <div className="mt-8 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          <ButtonLink
            href={`/services/${service.slug}`}
            className="w-full lg:w-auto"
          >
            Learn More
          </ButtonLink>
          <ButtonLink
            href="/contact#request-service"
            variant="secondary"
            className="w-full lg:w-auto"
          >
            Request Service
          </ButtonLink>
        </div>
      </div>

      <div data-reveal className="relative h-full min-w-0 md:min-h-[32rem]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] md:absolute md:inset-0 md:aspect-auto">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </Container>
  );
}

export function HomeServices() {
  const single = services.length === 1 ? services[0] : undefined;

  return (
    <section className="bg-foam" aria-labelledby="home-services-heading">
      {single ? (
        <SingleService service={single} />
      ) : (
        <Container className="py-12 md:py-16 lg:py-20">
          <ServicesIntro />
          <div className="mt-12">
            <ServiceList services={services} />
          </div>
        </Container>
      )}
    </section>
  );
}
