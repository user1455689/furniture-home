"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/components/cart-context";

export default function ShopPage() {
  const { addToCart } = useCart();

  // ----------------------
  // PRODUCTS (20 ITEMS)
  // ----------------------

  const shopProducts: Product[] = [
    {
      id: 1,
      name: "Modern Sofa",
      slug: "modern-sofa",
      description: "Comfortable premium sofa made for modern homes.",
      shortDescription: "Premium soft-touch sofa.",
      price: 34999,
      category: "Sofa",
      image: "https://i.pinimg.com/736x/74/d5/07/74d5077462089e566b6b4c82a3730af9.jpg",
      colors: ["#d4a373", "#e9ecef"],
    },
    {
      id: 2,
      name: "Wooden Coffee Table",
      slug: "wooden-coffee-table",
      description: "Handcrafted wooden table perfect for living rooms.",
      shortDescription: "Handcrafted wooden table.",
      price: 8999,
      category: "Table",
      image: "https://i.pinimg.com/1200x/36/28/07/362807cd1691b42adddba29586a98a9e.jpg",
      colors: ["#deb887"],
    },
    {
      id: 3,
      name: "Night Lamp",
      slug: "night-lamp",
      description: "Warm LED night lamp ideal for cozy bedrooms.",
      shortDescription: "Warm ambient lamp.",
      price: 1999,
      category: "Lighting",
      image: "https://i.pinimg.com/1200x/1d/e8/30/1de83077cf35c3a7daa16f9bd4c84b46.jpg",
      colors: ["#f4e1c1"],
    },
    {
      id: 4,
      name: "Dual Color Wardrobe",
      slug: "Modern Wardrobe",
      description: "Ergonomic office chair with premium back support.",
      shortDescription: "Premium Wardrobe.",
      price: 12999,
      category: "Wardrobe",
      image: "https://i.pinimg.com/736x/99/cf/18/99cf182510838a1e6a169a5e3c8520a7.jpg",
      colors: ["#c9ada7"],
    },
    {
      id: 5,
      name: "Bed Side Table",
      slug: "Bed Side Table",
      description: "Side table for living rooms & bedrooms.",
      shortDescription: "Side table for bedroom & living room.",
      price: 4999,
      category: "Decor",
      image: "https://i.pinimg.com/736x/67/52/30/675230e1a4e3aae51dc9bfbcd9dd490b.jpg",
      colors: ["#e7d7c1"],
    },
    {
      id: 6,
      name: "Work Desk Pro",
      slug: "work-desk-pro",
      description: "Modern office desk perfect for productivity.",
      shortDescription: "Premium office work desk.",
      price: 14999,
      category: "Office Desk",
      image: "https://i.pinimg.com/1200x/db/81/36/db81362d3cd0d7b36134d468326372f7.jpg",
      colors: ["#c2b280"],
    },
    {
      id: 7,
      name: "Minimal Center Table",
      slug: "minimal-center-table",
      description: "Elegant center table for modern living spaces.",
      shortDescription: "Minimal premium center table.",
      price: 11999,
      category: "Table",
      image: "https://i.pinimg.com/736x/73/1b/6a/731b6af6eedae542ca44550876480ed5.jpg",
      colors: ["#c2b280"],
    },
    {
      id: 8,
      name: "Shoe Rack with Bench",
      slug: "Shoe Rack with Bench",
      description: "Multi Layer Shoe Rack.",
      shortDescription: "Multi Layer Shoe Rack",
      price: 45999,
      category: "Shoe Rack",
      image: "https://i.pinimg.com/1200x/e5/10/4e/e5104ebeb2b96200fa375d964f2b3eb6.jpg",
      colors: ["#c9b18a"],
    },
    {
      id: 9,
      name: "Classic Bookshelf",
      slug: "classic-bookshelf",
      description: "Bookshelf with multiple compartments.",
      shortDescription: "Premium multi-rack shelf.",
      price: 16999,
      category: "Decor",
      image: "https://i.pinimg.com/1200x/b9/18/1f/b9181f5ccab74e538d43cbd3cb389231.jpg",
      colors: ["#a67b5b"],
    },
    {
      id: 10,
      name: "Cabinet Rack",
      slug: "Cabinet Rack",
      description: "Cabinet Rack",
      shortDescription: "Cabinet Rack",
      price: 39999,
      category: "Decor",
      image: "https://i.pinimg.com/1200x/4a/6e/3c/4a6e3cbbce1ef7eee6634f0b5d6e0482.jpg",
      colors: ["#deb887"],
    },
    {
      id: 11,
      name: "Wall Shelf Cro",
      slug: "wall-shelf-Cro",
      description: "Colorful Bookshelf.",
      shortDescription: "Colorful Bookshelf",
      price: 2599,
      category: "Decor",
      image: "https://i.pinimg.com/736x/90/7c/58/907c58bb44d569fb5243a10211c19ab0.jpg",
      colors: ["#e0c9a6"],
    },
    {
      id: 12,
      name: "Scandinavian Chair",
      slug: "Scandinavian-chair",
      description: "Relaxing Scandinavian chair ideal for living rooms.",
      shortDescription: "Soft Scandinavian chair.",
      price: 22999,
      category: "Chair",
      image: "https://i.pinimg.com/736x/67/32/f7/6732f7f84019517c0fe869d2a16a3b3b.jpg",
      colors: ["#bfa6a0"],
    },
    {
      id: 13,
      name: "Modern TV Unit",
      slug: "Modern TV Unit",
      description: "Stylish for modern homes.",
      shortDescription: "Modern TV unit.",
      price: 3499,
      category: "Decor",
      image: "https://i.pinimg.com/736x/b2/6e/57/b26e57cc185c4f65d0febb5801bd220a.jpg",
      colors: ["#f8f3e6"],
    },
    {
      id: 14,
      name: "King Size Storage Bed",
      slug: "King Size Storage Bed",
      description: "King Size Storage Bed for bedroom.",
      shortDescription: "Premium King Size Storage Bed.",
      price: 7999,
      category: "Bed",
      image: "https://i.pinimg.com/1200x/e0/20/0f/e0200fa780a13a8206891a74896cd9be.jpg",
      colors: ["#d8b4a6"],
    },
    {
      id: 15,
      name: "Compact Study Desk",
      slug: "compact-study-desk",
      description: "Space-saving study desk ideal for students.",
      shortDescription: "Minimal study desk.",
      price: 8999,
      category: "Office Desk",
      image: "https://i.pinimg.com/1200x/97/eb/a9/97eba979a1bc010bf61cd1d882821322.jpg",
      colors: ["#cab89a"],
    },
  ];

  // ----------------------
  // SEARCH + FILTER STATES
  // ----------------------

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const categories = [
    "All",
    "Sofa",
    "Table",
    "Lighting",
    "Bed",
    "Office Desk",
    "Chair",
    "Decor",
    "Shoe Rack",
    "Wardrobe",
  ];

  const priceFilters = ["All", "Under 5,000", "5,000 - 15,000", "Above 15,000"];

  // ----------------------
  // FILTERING LOGIC
  // ----------------------

  const filteredProducts = shopProducts.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;

    let matchPrice = true;
    if (priceRange === "Under 5,000") matchPrice = p.price < 5000;
    if (priceRange === "5,000 - 15,000")
      matchPrice = p.price >= 5000 && p.price <= 15000;
    if (priceRange === "Above 15,000") matchPrice = p.price > 15000;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="app-container py-10">
      <h1 className="text-3xl font-heading font-semibold mb-2">Shop</h1>
      <p className="text-textSecondary text-sm mb-8">
        Explore our modern premium furniture collection.
      </p>

      {/* ----------------------
          SEARCH + FILTER BAR
      ---------------------- */}
      <div className="bg-surface p-4 rounded-xl shadow-card mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search Input */}
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 px-3 rounded-lg border border-border text-sm"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-11 px-3 rounded-lg border border-border text-sm"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="h-11 px-3 rounded-lg border border-border text-sm"
        >
          {priceFilters.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* ----------------------
          PRODUCTS GRID
      ---------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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




