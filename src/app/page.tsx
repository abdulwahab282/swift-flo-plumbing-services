import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomeMotion } from "@/components/HomeMotion";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeCta } from "@/components/HomeCta";
import { HomeFaq } from "@/components/HomeFaq";
import { HomeGallery } from "@/components/HomeGallery";
import { HomeServices } from "@/components/HomeServices";
import { HomeTestimonials } from "@/components/HomeTestimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `Plumbing Services in ${site.region} | Swift Flo Plumbing Services`,
  },
  description:
    "Swift Flo Plumbing Services provides professional plumbing services for customers throughout Nashville and Middle Tennessee. Request service Monday through Sunday, 8:00 AM to 8:00 PM.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <HomeMotion>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HowItWorks />
      <WhyChooseUs />
      <HomeGallery />
      <ServiceAreaSection />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCta />
    </HomeMotion>
  );
}
