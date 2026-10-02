import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt={site.name}
      width={1024}
      height={1024}
      className={cn(
        "object-contain",
        className ?? "h-12 w-12 sm:h-16 sm:w-16",
      )}
    />
  );
}
