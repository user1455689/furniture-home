"use client";

import Button from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";
import { categoriesWithImages, products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const trending = products.slice(0, 4);

  const HERO_IMG =
    "https://i.pinimg.com/736x/fe/03/92/fe039234b4a8c2011838a9f1c0972551.jpg";

  const SMALL_PRODUCT_IMG =
    "https://i.pinimg.com/1200x/67/9d/0d/679d0d59f911b17c97e6404f4e433949.jpg";

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="app-container mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-xs text-text-secondary shadow-sm">
            <span className="h-2 w-2 rounded-full bg-accentTeal" />
            New collection just dropped
          </p>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            Make Your Home <span className="text-primary">Feel Like You</span>
          </h1>

          <p className="text-textSecondary text-sm md:text-base max-w-md">
            Trendy décor & stylish furniture for modern homes in Kathmandu,
            Lalitpur & beyond.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button>Shop Now</Button>
            <Button variant="outline">
              <a href="#collections">View Collections</a>
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-4 text-xs text-textSecondary">
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full bg-primary/80 border-2 border-bg" />
              <span className="h-7 w-7 rounded-full bg-secondary/80 border-2 border-bg" />
              <span className="h-7 w-7 rounded-full bg-accentTeal/80 border-2 border-bg" />
            </div>
            <div>
              <div className="font-semibold text-sm text-textPrimary">
                4.8★ rating
              </div>
              <div>Loved by 2,300+ customers</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-accentYellow/70 via-bg to-accentTeal/40 p-4 md:p-6 shadow-card">
            <div className="overflow-hidden rounded-2xl bg-bg aspect-[4/3]">
              <Image
                src="https://i.pinimg.com/1200x/90/7e/61/907e6137db79eac81c20cc9fcacd6ba4.jpg"
                alt="Modern décor"
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Floating product */}
          <div className="absolute -bottom-4 left-4 md:left-10 bg-surface rounded-2xl shadow-card px-4 py-3 flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl overflow-hidden bg-bg">
              <Image
                src={SMALL_PRODUCT_IMG}
                alt="Lamp"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-xs">
              <div className="font-semibold">Amber Night Lamp</div>
              <div className="text-primary font-semibold">NPR 2,499</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="app-container mt-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-semibold">
              Shop by Category
            </h2>
            <p className="text-sm text-textSecondary">
              Find pieces tailored to every corner of your home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoriesWithImages.map((cat) => (
            <Link
              key={cat.name}
              href="/category"
              className="group bg-surface rounded-2xl p-3 flex flex-col justify-between shadow-sm hover:shadow-card hover:-translate-y-1 transition overflow-hidden"
            >
              <div className="h-20 rounded-xl mb-3 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="text-xs font-semibold group-hover:text-primary">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section id="collections" className="app-container mt-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Trending Now</h2>
            <p className="text-sm text-textSecondary">
              Most loved pieces this month.
            </p>
          </div>
          <Link
            href="/category"
            className="text-xs font-semibold text-primary hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {trending.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Room Inspiration */}
      <section className="app-container mt-16">
        <h2 className="font-heading text-2xl font-semibold mb-6">
          Room Inspirations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              title: "Cozy Minimal Living Room",
              img: "https://i.pinimg.com/736x/47/c7/01/47c70124b7ae67deefe69ff6c45aaf67.jpg",
            },
            {
              title: "Color Pop Bedroom",
              img: "https://i.pinimg.com/1200x/a2/a0/3d/a2a03dc0afecafc1a109b78fbc2e9d49.jpg",
            },
            {
              title: "Work From Home Setup",
              img: "https://i.pinimg.com/1200x/de/3b/87/de3b874d1b520a4a462b332a30cf9c33.jpg",
            },
          ].map((room) => (
            <div
              key={room.title}
              className="relative overflow-hidden rounded-3xl shadow-card group"
            >
              <Image
                src={room.img}
                alt={room.title}
                width={600}
                height={400}
                className="h-56 w-full object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <div className="font-heading font-semibold">
                    {room.title}
                  </div>
                  <div className="text-xs text-white/80">
                    Shop the full look.
                  </div>
                </div>
                <Button variant="outline" className="border-white text-white">
                  View Setup
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="app-container mt-16">
        <div className="rounded-3xl bg-gradient-to-r from-primary via-secondary to-accentTeal text-white px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-2">
              Get 5% off your first order
            </h3>
            <p className="text-sm text-white/80">
              Be the first to know about new drops, décor tips & exclusive
              offers.
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              className="flex-1 h-10 rounded-lg px-3 text-sm text-textPrimary"
              placeholder="Enter your email"
            />
            <Button className="whitespace-nowrap">Join Newsletter</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
