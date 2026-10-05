import Image from "next/image";
import type { Service } from "@/data/services";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icons";

export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  const image = images[service.image];

  if (featured) {
    return (
      <article className="overflow-hidden rounded-[2rem] border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-72">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foam text-tide-deep">
              <Icon name={service.icon} />
            </span>
            <h3 className="mt-5 font-display text-4xl text-navy">{service.name}</h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">{service.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/services/${service.slug}`}>Learn More</ButtonLink>
              <ButtonLink href="/contact#request-service" variant="secondary">
                Request Service
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/40 hover:shadow-xl">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foam text-tide-deep transition group-hover:bg-tide-deep group-hover:text-white">
        <Icon name={service.icon} />
      </span>
      <h3 className="mt-5 font-display text-3xl text-navy">{service.name}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{service.summary}</p>
      <div className="mt-6 flex flex-col gap-3">
        <ButtonLink href={`/services/${service.slug}`}>Learn More</ButtonLink>
        <ButtonLink href="/contact#request-service" variant="secondary">
          Request Service
        </ButtonLink>
      </div>
    </article>
  );
}

export function ServiceList({ services }: { services: Service[] }) {
  const onlyService = services.length === 1 ? services[0] : undefined;

  if (onlyService) {
    return <ServiceCard service={onlyService} featured />;
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
