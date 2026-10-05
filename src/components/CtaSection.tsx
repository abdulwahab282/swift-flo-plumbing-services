import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";

export function CtaSection({
  title = "Need plumbing service in Middle Tennessee?",
  description = "Request plumbing service from Swift Flo Plumbing Services. The company serves Nashville and surrounding Middle Tennessee communities, Monday through Sunday, 8:00 AM to 8:00 PM.",
  primaryLabel = "Get a Free Quote",
  showCall = true,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  showCall?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src={images.fittings.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {site.locationLabel}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact#request-service" variant="light" withArrow>
              {primaryLabel}
            </ButtonLink>
            {showCall ? <CallNowLink variant="ghost" /> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
