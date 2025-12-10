"use client";

import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Button from "@/components/ui/Button";
import { useCart } from "@/components/cart-context";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="app-container py-10">
        <p>Product not found.</p>
      </div>
    );
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="app-container py-10">
      {/* Breadcrumbs */}
      <div className="text-xs text-text-secondary mb-3">
        Home / {product.category} /{" "}
        <span className="text-text-primary">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <div className="rounded-3xl bg-surface shadow-card overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[380px] md:h-[460px] object-cover"
            />
          </div>
          <div className="flex gap-3">
            {[product.image, product.image, product.image].map((img, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-2xl bg-bg h-20 overflow-hidden"
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="font-heading text-2xl md:text-3xl font-semibold">
            {product.name}
          </h1>
          <p className="text-sm text-text-secondary max-w-md">
            {product.shortDescription} Perfect for modern homes that want a
            touch of warmth and personality.
          </p>
          <div className="flex items-center gap-3">
            <div className="font-heading text-2xl font-semibold">
              NPR {product.price.toLocaleString()}
            </div>
            <div className="text-xs text-text-secondary">4.8★ (132 reviews)</div>
          </div>

          {product.colors && (
            <div>
              <div className="text-xs font-semibold mb-1">Color</div>
              <div className="flex gap-2">
                {product.colors.map((c, idx) => (
                  <button
                    key={c}
                    style={{ backgroundColor: c }}
                    className={`h-7 w-7 rounded-full border ${
                      idx === 0
                        ? "border-primary ring-2 ring-primary/40"
                        : "border-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="text-xs font-semibold mb-1">Size / Dimensions</div>
            <div className="flex gap-2">
              {["2-seater", "3-seater", "L-shape"].map((s, idx) => (
                <button
                  key={s}
                  className={`px-3 h-9 rounded-full border text-xs ${
                    idx === 1
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-text-secondary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-text-secondary">
            In stock • Ships in 3–5 days • Free assembly in Kathmandu Valley
          </div>

          {/* Add to cart block */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border mt-4">
            <div className="flex items-center border border-border rounded-full h-10">
              <button className="px-3 text-sm">-</button>
              <span className="px-2 text-sm border-x border-border">1</span>
              <button className="px-3 text-sm">+</button>
            </div>
            <Button
              onClick={() => addToCart(product, 1)}
              className="min-w-[150px]"
            >
              Add to Cart
            </Button>
            <Button variant="outline" className="h-10">
              Add to Wishlist
            </Button>
          </div>

          {/* Tabs (description/dimensions/etc.) */}
          <div className="pt-6 border-t border-border">
            <div className="flex gap-4 text-xs font-semibold mb-3">
              <button className="pb-2 border-b-2 border-primary text-primary">
                Description
              </button>
              <button className="pb-2 border-b-2 border-transparent text-text-secondary">
                Dimensions
              </button>
              <button className="pb-2 border-b-2 border-transparent text-text-secondary">
                Delivery & Returns
              </button>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Built with high-quality materials and designed for everyday use.
              Soft fabric, durable frame and cloud-like cushions give you
              comfort without compromising on style.
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-heading text-xl font-semibold mb-4">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
