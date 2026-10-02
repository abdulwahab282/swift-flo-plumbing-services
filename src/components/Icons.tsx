import type { ServiceIcon } from "@/data/services";

export type IconName =
  | ServiceIcon
  | "clock"
  | "pin"
  | "shield"
  | "users"
  | "arrow"
  | "phone"
  | "chevron"
  | "check"
  | "sparkles"
  | "calendar"
  | "messageSquare"
  | "search"
  | "building"
  | "award"
  | "shieldCheck";

const paths: Record<IconName, string> = {
  droplet:
    "M12 3.2c3.2 4 5.5 6.9 5.5 9.6a5.5 5.5 0 1 1-11 0c0-2.7 2.3-5.6 5.5-9.6z",
  wrench:
    "M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L15 12l-3-3 2.7-2.7z",
  pipe: "M4 9h6v2H4V9zm10 0h6v2h-6V9zM9 4h2v6H9V4zm0 10h2v6H9v-6zm4-4h2v6h-2v-6z",
  flame:
    "M12 3s5 4.2 5 8.2A5 5 0 0 1 7 11.2C7 7.2 12 3 12 3zm0 16a3.2 3.2 0 0 0 3.2-3.2c0-2-1.6-3.2-3.2-5-1.6 1.8-3.2 3-3.2 5A3.2 3.2 0 0 0 12 19z",
  alert:
    "M12 4 3.5 19h17L12 4zm0 5.2.1 5.3h-.2l.1-5.3zM12 16.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z",
  clock: "M12 6v6l4 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  pin: "M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10zm0-8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z",
  shield: "M12 3 5 6v6c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3z",
  users:
    "M8.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3.8 19c.4-2.4 2.4-4 4.7-4s4.3 1.6 4.7 4M13 15.2c1.6.2 3 .9 3.8 2.8",
  arrow: "M5 12h14M13 6l6 6-6 6",
  phone:
    "M8 4h2l1.2 3-1.6 1a12 12 0 0 0 6.4 6.4l1-1.6L20 14v2a2 2 0 0 1-2.2 2A16 16 0 0 1 6 8.2 2 2 0 0 1 8 4z",
  chevron: "M6 9l6 6 6-6",
  check: "M5 13l4 4L19 7",
  sparkles:
    "M12 3l1.9 4.8L19 9.7l-3.9 3.8.9 5.4-4-2.5-4 2.5.9-5.4L5 9.7l5.1-1.9L12 3z",
  calendar:
    "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  messageSquare:
    "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  search:
    "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35",
  building:
    "M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M9 9h2M9 13h2M9 17h2M13 9h2M13 13h2M13 17h2",
  award:
    "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm-3.8 3.5L12 21l3.8-2.5L15 13.5a6.9 6.9 0 0 1-6 0l-.8 5z",
  shieldCheck:
    "M12 3 5 6v6c0 4.2 2.8 7.2 7 9 4.2-1.8 7-4.8 7-9V6l-7-3zm-2.5 9 2 2 4.5-4.5",
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const filled = name === "droplet" || name === "flame";

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? undefined : 1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="m10 2.4 2.1 4.4 4.8.7-3.5 3.4.8 4.8L10 13.4 5.8 15.7l.8-4.8L3.1 7.5l4.8-.7L10 2.4z" />
    </svg>
  );
}
