"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="app-container py-12">

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-semibold">
          About <span className="text-primary">Furniture-Homes Nepal</span>
        </h1>
        <p className="text-textSecondary text-sm md:text-base max-w-xl mx-auto mt-3">
          Modern. Premium. Nepalese.  
          We are transforming how Nepal shops for furniture.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold">
            Started in 2024 — Built for Modern Nepal
          </h2>

          <p className="text-textSecondary text-sm leading-relaxed">
            Furniture-Homes Nepal began in <strong>2024</strong> as an online-only 
            brand with one mission — make modern, premium, and stylish furniture 
            easily accessible for every home across Nepal.
          </p>

          <p className="text-textSecondary text-sm leading-relaxed">
            From living rooms to bedrooms, offices to décor, we aim to bring 
            globally-inspired designs at fair Nepalese prices. No middlemen, 
            no hidden costs — just honest craftsmanship.
          </p>

          <p className="text-textSecondary text-sm leading-relaxed">
            Today, we are scaling rapidly and expanding our categories to 
            become Nepal’s most trusted destination for modern furniture and home décor.
          </p>

          <div className="rounded-2xl bg-primary/10 text-primary px-4 py-3 text-sm font-medium w-fit">
            Proudly Designed for Nepalese Homes 🇳🇵
          </div>
        </div>

        {/* Image: Aesthetic Hero Look */}
        <div className="rounded-3xl overflow-hidden shadow-card">
          <Image
            src="https://i.pinimg.com/1200x/67/06/7d/67067d260e1ada9d9e4a3487085add0a.jpg"
            alt="Modern furniture"
            width={900}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values Cards */}
      <section className="mt-16">
        <h2 className="font-heading text-2xl font-semibold mb-6 text-center">
          What We Stand For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm hover:shadow-card transition">
            <h3 className="font-heading text-lg font-semibold mb-2">
              Modern Designs
            </h3>
            <p className="text-textSecondary text-sm">
              All our pieces are inspired by Scandinavian, minimalist and 
              contemporary global design trends.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm hover:shadow-card transition">
            <h3 className="font-heading text-lg font-semibold mb-2">
              Premium Quality
            </h3>
            <p className="text-textSecondary text-sm">
              Built to last using premium fabrics, durable wood, 
              long-lasting cushioning, and trusted materials.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface rounded-3xl border border-border p-6 shadow-sm hover:shadow-card transition">
            <h3 className="font-heading text-lg font-semibold mb-2">
              Nepal-Focused
            </h3>
            <p className="text-textSecondary text-sm">
              Designed specifically for Nepalese homes, lifestyle, trends, 
              and customer needs based on real feedback.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accentTeal text-white p-10 text-center shadow-card">
        <h2 className="font-heading text-2xl font-semibold mb-3">
          Our Journey Has Just Begun
        </h2>
        <p className="text-white/90 text-sm max-w-lg mx-auto">
          Join us as we continue building Nepal’s most modern, customer-friendly 
          and premium furniture brand.
        </p>
      </section>
    </div>
  );
}
