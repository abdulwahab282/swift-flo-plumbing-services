"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { serviceAreas } from "@/data/service-areas";
import { site } from "@/data/site";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";

export function ServiceAreaSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCounty, setSelectedCounty] = useState<string>("all");

  const counties = useMemo(() => {
    const list = Array.from(new Set(serviceAreas.map((a) => a.county)));
    return ["all", ...list];
  }, []);

  const filteredAreas = useMemo(() => {
    return serviceAreas.filter((area) => {
      const matchesSearch =
        area.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.county.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCounty =
        selectedCounty === "all" || area.county === selectedCounty;
      return matchesSearch && matchesCounty;
    });
  }, [searchTerm, selectedCounty]);

  return (
    <section
      id="service-areas"
      className="bg-paper py-16 sm:py-24"
      aria-labelledby="service-areas-heading"
    >
      <Container>
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Coverage Network"
            title="Areas We Serve"
            text="We proudly provide professional services throughout Nashville and surrounding Middle Tennessee communities."
          />
        </div>

        {/* Search & Filter Controls */}
        <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted">
              <Icon name="search" className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by city or county..."
              className="w-full rounded-full border border-sand bg-white py-2.5 pl-10 pr-4 text-sm text-navy placeholder:text-muted/70 focus:border-tide focus:outline-none focus:ring-2 focus:ring-tide/20 transition"
              aria-label="Filter service areas"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-muted hover:text-navy"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-semibold text-muted mr-1">County:</span>
            {counties.map((county) => {
              const active = selectedCounty === county;
              const label =
                county === "all"
                  ? `All (${serviceAreas.length})`
                  : county.replace(" County", "");

              return (
                <button
                  key={county}
                  type="button"
                  onClick={() => setSelectedCounty(county)}
                  className={`rounded-full px-3 py-1 font-medium transition ${
                    active
                      ? "bg-tide-deep text-white shadow-sm"
                      : "border border-sand bg-white text-muted hover:border-copper/60 hover:text-navy"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Location Cards Grid */}
        <div
          data-reveal-group
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5"
        >
          {filteredAreas.map((area) => (
            <article
              key={area.slug}
              data-reveal-item
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-sand bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-tide/50 hover:shadow-xl hover:shadow-navy/5"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foam text-tide-deep transition duration-300 group-hover:bg-tide-deep group-hover:text-white">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-paper px-2.5 py-0.5 text-[11px] font-semibold text-copper-deep">
                    {area.county.replace(" County", "")}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl text-navy transition duration-200 group-hover:text-tide-deep">
                  {area.city}
                </h3>

                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                  {area.stateName}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">
                  {area.summary}
                </p>
              </div>

              <div className="mt-5 border-t border-sand/60 pt-3.5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Open 7 Days
                  </span>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-tide-deep transition group-hover:text-copper"
                    aria-label={`View plumbing services in ${area.city}`}
                  >
                    View Details
                    <span className="transition duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-sand bg-white p-8 text-center">
            <p className="text-base font-semibold text-navy">
              No matching service areas found for &quot;{searchTerm}&quot;
            </p>
            <p className="mt-1 text-sm text-muted">
              We cover 12 primary Middle Tennessee locations and surrounding communities.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCounty("all");
              }}
              className="mt-4 rounded-full bg-tide-deep px-4 py-2 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Coverage Note Banner */}
        <div
          data-reveal
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-sand bg-foam p-6 sm:flex-row sm:px-8"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden sm:inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-tide-deep shadow-sm">
              <Icon name="shieldCheck" className="h-6 w-6" />
            </span>
            <div>
              <h4 className="font-display text-lg text-navy">
                Live near one of these Middle Tennessee communities?
              </h4>
              <p className="text-sm text-muted">
                Our technicians are stationed throughout the region for prompt dispatch between 8:00 AM and 8:00 PM daily.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-tide-deep px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-tide"
          >
            Check Your Address
          </Link>
        </div>
      </Container>
    </section>
  );
}
