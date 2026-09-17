import Image from "next/image";

export function Logo({
  size = 48,
  priority = false,
  alt = "",
}: {
  size?: number;
  priority?: boolean;
  alt?: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className="rounded-full"
    />
  );
}
