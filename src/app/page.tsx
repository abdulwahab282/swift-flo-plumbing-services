import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeCta } from "@/components/HomeCta";
import { HomeFaq } from "@/components/HomeFaq";
import { HomeGallery } from "@/components/HomeGallery";
import { HomeMotion } from "@/components/HomeMotion";
import { HomeServices } from "@/components/HomeServices";
import { HomeTestimonials } from "@/components/HomeTestimonials";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { ServiceDetails } from "@/components/ServiceDetails";
import { ServiceOverview } from "@/components/ServiceOverview";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Plumbing Services in Nashville & Middle TN | Swift Flo Plumbing Services",
  },
  description:
    "Swift Flo Plumbing Services provides professional plumbing services across Nashville, Brentwood, Franklin, Murfreesboro, and 12 Middle Tennessee communities. Open Monday through Sunday, 8:00 AM to 8:00 PM.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <HomeMotion>
      <Hero />
      <Highlights />
      <HomeAbout />
      <HomeServices />
      <ServiceAreaSection />
      <ServiceOverview />
      <ServiceDetails />
      <WhyChooseUs />
      <HomeGallery />
      <HomeTestimonials />
      <HomeCta />
      <HomeFaq />
    </HomeMotion>
  );
}
