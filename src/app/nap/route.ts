import { napLines } from "@/lib/site";

export function GET() {
  return new Response(`${napLines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
