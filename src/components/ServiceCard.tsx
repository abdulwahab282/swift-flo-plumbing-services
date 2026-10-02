import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";
import { images } from "@/data/images";
import { Icon } from "@/components/Icons";

export function ServiceCard({ service }: { service: Service }) {
  const image = images[service.image];

  return (
    <article className="group flex flex-col overflow-hidden rounded-[2rem] border border-sand bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-tide/50 hover:shadow-xl hover:shadow-navy/5">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand/30">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition duration-500 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-60 transition duration-300 group-hover:opacity-40"
        />
        <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-tide-deep shadow-md backdrop-blur-sm transition duration-300 group-hover:bg-tide-deep group-hover:text-white">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <h3 className="font-display text-2xl text-navy transition duration-200 group-hover:text-tide-deep">
            {service.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {service.summary}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-sand/60 pt-5">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-tide-deep transition hover:text-copper"
          >
            Learn More
            <span className="transition duration-200 group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-navy transition hover:bg-sand"
          >
            Book Visit
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
