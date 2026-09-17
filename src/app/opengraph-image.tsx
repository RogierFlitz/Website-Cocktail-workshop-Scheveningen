import { ImageResponse } from "next/og";

export const alt = "Cocktail Workshop Scheveningen — leer shaken aan zee";
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
          justifyContent: "flex-end",
          padding: 72,
          background: "linear-gradient(160deg, #16263b 0%, #0c1624 55%, #081018 100%)",
          color: "#f3e6c8",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d4b56a",
            marginBottom: 18,
          }}
        >
          Scheveningen · Den Haag
        </div>
        <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 600, maxWidth: 900 }}>
          Cocktail Workshop Scheveningen
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#e8dfd0", maxWidth: 820 }}>
          2 uur · 3 cocktails · vanaf 5 personen
        </div>
      </div>
    ),
    size,
  );
}
