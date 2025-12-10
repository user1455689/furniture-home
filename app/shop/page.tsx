"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/components/cart-context";

export default function ShopPage() {
  const { addToCart } = useCart();

  // ----------------------
  // 20 DUMMY PRODUCTS LIST
  // ----------------------

  const shopProducts: Product[] = [
    {
      id: 101,
      name: "Modern Sofa",
      slug: "modern-sofa",
      description: "Comfortable premium sofa made for modern Nepalese homes.",
      shortDescription: "Premium soft-touch sofa.",
      price: 34999,
      category: "Living Room",
      image: "https://i.pinimg.com/736x/47/c7/01/47c70124b7ae67deefe69ff6c45aaf67.jpg",
      colors: ["#d4a373", "#e9ecef"],
    },
    {
      id: 102,
      name: "Wooden Coffee Table",
      slug: "wooden-coffee-table",
      description: "Handcrafted wooden table perfect for living rooms.",
      shortDescription: "Handcrafted wooden table.",
      price: 8999,
      category: "Living Room",
      image: "https://i.pinimg.com/736x/c1/dc/e5/c1dce58027d968bbe810740eb21c4007.jpg",
      colors: ["#deb887"],
    },
    {
      id: 103,
      name: "Night Lamp",
      slug: "night-lamp",
      description: "Warm LED night lamp ideal for cozy bedrooms.",
      shortDescription: "Warm ambient lamp.",
      price: 1999,
      category: "Bedroom",
      image: "https://i.pinimg.com/1200x/1d/e8/30/1de83077cf35c3a7daa16f9bd4c84b46.jpg",
      colors: ["#f4e1c1"],
    },
    {
      id: 104,
      name: "Ergonomic Office Chair",
      slug: "ergonomic-office-chair",
      description: "Comfortable office chair with back support.",
      shortDescription: "Premium ergonomic chair.",
      price: 12999,
      category: "Office",
      image: "https://i.pinimg.com/1200x/b7/79/97/b77997e5d806d9f56f83c2a0cc8c6935.jpg",
      colors: ["#c9ada7"],
    },
    {
      id: 105,
      name: "Soft Woven Rug",
      slug: "soft-woven-rug",
      description: "Soft rug ideal for bedrooms and living rooms.",
      shortDescription: "Soft premium rug.",
      price: 4999,
      category: "Decor",
      image: "https://i.pinimg.com/1200x/0b/4c/8e/0b4c8e8d410fb47d831849fb9e590450.jpg",
      colors: ["#e7d7c1"],
    },
    {
      id: 106,
      name: "Work Desk Pro",
      slug: "work-desk-pro",
      description: "Modern work desk perfect for home offices.",
      shortDescription: "Premium office work desk.",
      price: 14999,
      category: "Office",
      image: "https://i.pinimg.com/736x/b3/21/e2/b321e2485da40c0dde2685c3a4fdcb56.jpg",
      colors: ["#c2b280"],
    },

    // Duplicate styles to make up 20 items
    ...Array.from({ length: 14 }).map((_, i) => ({
      id: 200 + i,
      name: `Premium Furniture Item ${i + 1}`,
      slug: `premium-item-${i + 1}`,
      description: "High-quality furniture designed for modern Nepali homes.",
      shortDescription: "Premium crafted furniture.",
      price: 4999 + i * 300,
      category: "Living Room",
      image: "https://i.pinimg.com/736x/3c/be/6f/3cbe6f63df78a22d29637e7b47427480.jpg",
      colors: ["#d4a373"],
    })),
  ];

  return (
    <div className="app-container py-10">
      <h1 className="text-3xl font-heading font-semibold mb-2">Shop</h1>
      <p className="text-textSecondary text-sm mb-8">
        Explore our modern premium furniture collection.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shopProducts.map((product) => (
          <div
            key={product.id}
            className="bg-surface rounded-2xl shadow-card p-4 hover:-translate-y-1 transition"
          >
            <div className="rounded-xl overflow-hidden h-48 bg-bg">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-3 font-semibold text-sm text-textPrimary">
              {product.name}
            </h3>

            <p className="text-xs text-textSecondary">
              {product.shortDescription}
            </p>

            <div className="font-heading font-semibold text-primary text-base mt-2">
              NPR {product.price.toLocaleString()}
            </div>

            <button
              onClick={() => addToCart(product, 1)}
              className="mt-3 w-full bg-primary text-white text-xs h-9 rounded-lg hover:bg-primary/90 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
