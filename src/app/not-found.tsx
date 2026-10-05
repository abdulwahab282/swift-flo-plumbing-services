import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="bg-paper py-24">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
          404
        </p>
        <h1 className="mt-3 font-display text-5xl text-navy">Page not found</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          That page is not part of the Swift Flo Plumbing Services site. Head
          home or request plumbing service in Middle Tennessee.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-tide-deep px-6 text-sm font-semibold text-white"
          >
            Back home
          </Link>
          <Link
            href="/contact#request-service"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-sand bg-white px-6 text-sm font-semibold text-navy"
          >
            Request Service
          </Link>
        </div>
      </Container>
    </section>
  );
}
