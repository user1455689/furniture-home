"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import Button from "./ui/Button";
import { useCart } from "./cart-context";
import clsx from "clsx";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-surface rounded-2xl shadow-card p-4 flex flex-col gap-3 hover:-translate-y-1 transition">
      <Link href={`/product/${product.slug}`} className="block relative">
        <div className="overflow-hidden rounded-xl aspect-[4/3] bg-bg">
          {/* Replace with next/image as needed */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        {/* {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        )} */}
      </Link>

      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-wide text-text-secondary">
          {product.category}
        </span>
        <Link
          href={`/product/${product.slug}`}
          className="font-heading font-semibold"
        >
          {product.name}
        </Link>
        <p className="text-sm text-text-secondary line-clamp-2">
          {product.shortDescription}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between">
        <div>
          <div className="font-heading font-semibold">
            NPR {product.price.toLocaleString()}
          </div>
          {product.colors && (
            <div className="flex gap-1 mt-1">
              {product.colors.slice(0, 3).map((c) => (
                <span
                  key={c}
                  className={clsx(
                    "h-4 w-4 rounded-full border border-border",
                  )}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          )}
        </div>
        <Button
          variant="primary"
          className="h-9 px-3 text-xs"
          onClick={() => addToCart(product, 1)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
