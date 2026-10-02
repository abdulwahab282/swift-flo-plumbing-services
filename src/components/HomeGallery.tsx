import Image from "next/image";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type GalleryItem = {
  image: keyof typeof images;
  label: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  {
    image: "galleryCopper",
    label: "Precision Copper Pipe Soldering & Valves",
    category: "Piping & Valves",
  },
  {
    image: "galleryTankless",
    label: "Tankless Water Heater Installation",
    category: "Water Heating",
  },
  {
    image: "galleryCamera",
    label: "Video Sewer Line Camera Diagnostics",
    category: "Drain & Sewer",
  },
  {
    image: "galleryKitchen",
    label: "Reverse Osmosis & Luxury Fixture Fitting",
    category: "Filtration & Fixtures",
  },
];

export function HomeGallery() {
  return (
    <section className="bg-paper py-16 sm:py-24" aria-labelledby="gallery-heading">
      <Container>
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Craftsmanship"
            title="Our Plumbing Work Across Middle Tennessee"
            text="A closer look at the precision diagnostics, modern pipe installations, and quality fixtures we install for homeowners and businesses."
          />
        </div>

        <div
          data-reveal-group
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {galleryItems.map((item) => {
            const image = images[item.image];
            return (
              <div
                key={item.image}
                data-reveal-item
                className="group relative overflow-hidden rounded-[1.75rem] border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-tide/50 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy/20 to-transparent opacity-70 transition duration-300 group-hover:opacity-50"
                  />
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-copper-deep">
                    {item.category}
                  </span>
                  <p className="mt-1 font-display text-lg text-navy">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div data-reveal className="mt-12 flex justify-center">
          <ButtonLink href="/contact" withArrow>
            Request Plumbing Service
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
