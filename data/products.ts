
export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  category: string;
  image: string;
  colors?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Cozy Modern Sofa",
    slug: "cozy-modern-sofa",
    description:
      "A soft-touch premium sofa designed for modern minimalist living rooms. Built with a solid wooden frame and high-density cushions.",
    shortDescription: "Soft-touch cozy sofa for modern homes.",
    price: 54999,
    category: "Living Room",
    image:
      "https://i.pinimg.com/736x/88/5b/2d/885b2dd46474298208cf5e60f7afa1b6.jpg",
    colors: ["#d4a373", "#6c757d", "#e9ecef"],
  },
  {
    id: 2,
    name: "Nordic Center Table",
    slug: "nordic-center-table",
    description:
      "Minimal wooden table with smooth rounded edges. Perfect for modern Scandinavian-inspired interiors.",
    shortDescription: "Minimal wooden table with rounded edges.",
    price: 12999,
    category: "Living Room",
    image:
      "https://i.pinimg.com/736x/c1/dc/e5/c1dce58027d968bbe810740eb21c4007.jpg",
    colors: ["#deb887", "#e0c097"],
  },
  {
    id: 3,
    name: "Amber Night Lamp",
    slug: "amber-night-lamp",
    description:
      "Warm ambient LED night lamp ideal for cozy bedrooms. Energy efficient and elegant.",
    shortDescription: "Warm ambient lamp perfect for cozy rooms.",
    price: 2499,
    category: "Bedroom",
    image:
      "https://i.pinimg.com/1200x/1d/e8/30/1de83077cf35c3a7daa16f9bd4c84b46.jpg",
    colors: ["#f4e1c1", "#e2c275"],
  },
  {
    id: 4,
    name: "Scandinavian Chair",
    slug: "scandinavian-chair",
    description:
      "Elegant Scandinavian-style chair with premium cushioning and ashwood legs.",
    shortDescription: "Elegant chair with premium cushioning.",
    price: 8999,
    category: "Chairs",
    image:
      "https://i.pinimg.com/1200x/b7/79/97/b77997e5d806d9f56f83c2a0cc8c6935.jpg",
    colors: ["#c9ada7", "#f2e9e4"],
  },
  {
    id: 5,
    name: "Premium Rug",
    slug: "premium-rug",
    description:
      "Soft woven rug perfect for bedrooms, lounges and cozy corners.",
    shortDescription: "Soft woven rug for bedrooms and lounges.",
    price: 5999,
    category: "Decor",
    image:
      "https://i.pinimg.com/1200x/0b/4c/8e/0b4c8e8d410fb47d831849fb9e590450.jpg",
    colors: ["#e7d7c1", "#d5bdaf"],
  },
  {
    id: 6,
    name: "Work Desk Pro",
    slug: "work-desk-pro",
    description:
      "Modern wooden work desk ideal for home offices. Features a durable top and ergonomic height.",
    shortDescription: "Modern wooden desk for home offices.",
    price: 14999,
    category: "Office",
    image:
      "https://i.pinimg.com/736x/b3/21/e2/b321e2485da40c0dde2685c3a4fdcb56.jpg",
    colors: ["#c2b280", "#b59b8f"],
  },
];

export const categoriesWithImages = [
  {
    name: "Living Room",
    image: "https://i.pinimg.com/1200x/47/c7/01/47c70124b7ae67deefe69ff6c45aaf67.jpg",
  },
  {
    name: "Bedroom",
    image: "https://i.pinimg.com/1200x/a2/a0/3d/a2a03dc0afecafc1a109b78fbc2e9d49.jpg",
  },
  {
    name: "Office",
    image: "https://i.pinimg.com/1200x/de/3b/87/de3b874d1b520a4a462b332a30cf9c33.jpg",
  },
  {
    name: "Chairs",
    image: "https://i.pinimg.com/1200x/b7/79/97/b77997e5d806d9f56f83c2a0cc8c6935.jpg",
  },
  {
    name: "Decor",
    image: "https://i.pinimg.com/1200x/0b/4c/8e/0b4c8e8d410fb47d831849fb9e590450.jpg",
  },
  {
    name: "Lighting",
    image: "https://i.pinimg.com/736x/1d/e8/30/1de83077cf35c3a7daa16f9bd4c84b46.jpg",
  },
];

