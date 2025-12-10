"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import type { Product } from "@/data/products";

// -----------------------------
// Cart Item Type
// -----------------------------
export interface CartItem {
  product: Product;
  quantity: number;
}

// -----------------------------
// Customer Info (FULL FIELDS)
// -----------------------------
export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  area: string;
  postal: string;
  landmark: string;
}

// -----------------------------
// Cart Context Interface
// -----------------------------
interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;

  customer: CustomerInfo;
  updateCustomer: (data: Partial<CustomerInfo>) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

// -----------------------------
// Provider Component
// -----------------------------
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Default customer structure
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    area: "",
    postal: "",
    landmark: "",
  });

  // Smart partial updater
  const updateCustomer = (data: Partial<CustomerInfo>) => {
    setCustomer((prev) => ({ ...prev, ...data }));
  };

  // Add to cart
  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);

      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) return removeFromCart(productId);

    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        customer,
        updateCustomer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// -----------------------------
// Hook
// -----------------------------
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
