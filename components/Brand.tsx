import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Brand({
  href = "/",
  label = `${site.name}, home`,
  imageSrc = "/brand/logo.png",
}: {
  href?: string;
  label?: string;
  imageSrc?: string;
}) {
  return (
    <Link className="brand" href={href} aria-label={label}>
      <span className="brand__mark">
        <Image src={imageSrc} alt="" width={50} height={50} priority />
      </span>
      <span className="brand__name">
        <span className="brand__word">
          <span className="brand__welk">WELK</span>
          <span className="brand__dock">DOCK</span>
        </span>
        <small>Technologies</small>
      </span>
    </Link>
  );
}
