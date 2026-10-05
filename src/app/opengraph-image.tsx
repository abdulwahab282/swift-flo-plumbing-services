import { ImageResponse } from "next/og";

export const alt =
  "Swift Flo Plumbing Services — plumbing services in Middle Tennessee";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c2230",
          color: "#faf8f4",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c17a45",
          }}
        >
          Nashville & Middle Tennessee
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, display: "flex" }}>
            Swift Flo Plumbing Services
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 28,
              color: "#d7ebe8",
            }}
          >
            Plumbing services · Monday–Sunday, 8:00 AM–8:00 PM
          </div>
        </div>
      </div>
    ),
    size,
  );
}
