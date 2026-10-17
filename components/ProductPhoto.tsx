import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductPhoto({ product }: { product: Product }) {
  return (
    <div className={`product-photo${product.image.label === "Stock photo" ? "" : " product-photo--artwork"}`}>
      <Image
        src={product.image.src}
        alt={product.image.alt}
        width={product.image.width}
        height={product.image.height}
        sizes="(max-width: 960px) 100vw, 600px"
      />
      <span className="product-photo__label">{product.image.label}</span>
    </div>
  );
}
