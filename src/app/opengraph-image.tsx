import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.offerLine}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public/images/workshop-strand-groep.jpg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#0c1624",
          color: "#f3e6c8",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(12,22,36,0.45) 0%, rgba(12,22,36,0.78) 52%, rgba(8,16,24,0.94) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 72,
            width: "100%",
            height: "100%",
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
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 920,
            }}
          >
            Cocktail Workshop Scheveningen
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 28,
              color: "#e8dfd0",
              maxWidth: 820,
            }}
          >
            {site.offerLine}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
