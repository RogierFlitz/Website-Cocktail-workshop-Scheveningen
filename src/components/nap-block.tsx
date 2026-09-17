import { formattedAddress, site } from "@/lib/site";

export function NapBlock({ className }: { className?: string }) {
  return (
    <address className={className ?? "not-italic"}>
      <p className="font-medium">{site.name}</p>
      <p>Kantoor</p>
      <p>
        <a href={site.mapsUrl}>{formattedAddress}</a>
      </p>
      <p>Scheveningen, Nederland</p>
      <p>
        <a href={site.phoneHref}>{site.phone}</a>
      </p>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>
        <a href={site.url}>{site.url.replace("https://", "")}</a>
      </p>
    </address>
  );
}
