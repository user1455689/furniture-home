"use client";
import { useCart } from "@/components/cart-context";

export default function CheckoutPage() {
  const { items, customer } = useCart();

  return (
    <div className="app-container py-10">
      <h1 className="text-2xl font-bold">Checkout</h1>

      <pre>{JSON.stringify(customer, null, 2)}</pre>

      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}
