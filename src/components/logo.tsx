import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({
  size = 48,
  priority = false,
}: {
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt={`${site.name} logo`}
      width={size}
      height={size}
      priority={priority}
      className="rounded-full"
    />
  );
}
