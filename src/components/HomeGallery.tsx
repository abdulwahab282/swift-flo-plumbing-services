import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type GalleryItem = {
  image: keyof typeof images;
  label: string;
  featured?: boolean;
};

const galleryItems: GalleryItem[] = [
  { image: "waterHeater", label: "Water Heater Care", featured: true },
  { image: "fittings", label: "Pipe Fitting & Connections" },
  { image: "toiletRepair", label: "Toilet Repair" },
  { image: "kitchenFaucet", label: "Faucet & Fixture Repair" },
  { image: "bathroom", label: "Bathroom Plumbing" },
];

const tilePosition: Record<number, string> = {
  0: "lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1",
  1: "lg:col-start-3 lg:row-start-1",
  2: "lg:col-start-4 lg:row-start-1",
  3: "lg:col-start-3 lg:row-start-2",
  4: "lg:col-start-4 lg:row-start-2",
};

function GalleryTile({ item, index }: { item: GalleryItem; index: number }) {
  const image = images[item.image];

  return (
    <div
      data-reveal-item
      className={`group relative overflow-hidden rounded-[1.75rem] shadow-sm shadow-navy/10 ${
        item.featured
          ? "aspect-[4/3] sm:col-span-2 sm:aspect-[16/9]"
          : "aspect-[4/3] sm:aspect-[5/4]"
      } lg:aspect-auto ${tilePosition[index] ?? ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
        className="object-cover object-center transition duration-500 ease-out group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-90"
      />
      <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white sm:text-base">
        {item.label}
      </p>
    </div>
  );
}

export function HomeGallery() {
  return (
    <section className="bg-paper py-12 sm:py-16 lg:py-20">
      <Container>
        <div data-reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Our Plumbing Work"
            text={`A closer look at the professional plumbing services we provide throughout ${site.locationFull}.`}
          />
        </div>
        <div
          data-reveal-group
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[14rem] lg:gap-5"
        >
          {galleryItems.map((item, index) => (
            <GalleryTile key={item.image} item={item} index={index} />
          ))}
        </div>
        <div data-reveal className="mt-10 flex justify-center">
          <ButtonLink href="/contact#request-service" withArrow>
            Request Plumbing Service
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
