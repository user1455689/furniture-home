"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-context";
import Button from "@/components/ui/Button";

export default function CheckoutPage() {
  const { items, subtotal, customer, updateCustomer, clearCart } = useCart();

  const delivery = subtotal > 0 ? 200 : 0;
  const total = subtotal + delivery;

  const [payment, setPayment] = useState<"COD" | "KHALTI" | "ESEWA">("COD");

  const handlePlaceOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill your name, phone, and address.");
      return;
    }

    const itemList = items
      .map(
        (i) =>
          `${i.product.name} (x${i.quantity}) - NPR ${(i.product.price * i.quantity).toLocaleString()}`
      )
      .join("%0A");

    const message = `
🛒 *New Order*
-----------------------
👤 *Customer*
Name: ${customer.name}
Phone: ${customer.phone}
Email: ${customer.email || "N/A"}

📍 *Address*
${customer.address}
City: ${customer.city}
Area: ${customer.area}
Postal: ${customer.postal}
Landmark: ${customer.landmark}

-----------------------
🧾 *Items*
${itemList}

-----------------------
💰 Payment: ${payment}
📦 Delivery: NPR ${delivery}
💵 Total: NPR ${total.toLocaleString()}
-----------------------
    `.replace(/  +/g, "");

    const whatsappNumber = "9779746571404"; // <-- your number
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="app-container py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-10">
        {/* LEFT */}
        <div className="space-y-8">
          {/* CONTACT DETAILS */}
          <section className="bg-surface p-6 rounded-2xl border border-border">
            <h2 className="font-heading text-lg font-semibold mb-4">
              Contact Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Full name"
                className="h-11 px-3 rounded-lg border border-border"
                value={customer.name}
                onChange={(e) => updateCustomer({ name: e.target.value })}
              />
              <input
                placeholder="Phone number"
                className="h-11 px-3 rounded-lg border border-border"
                value={customer.phone}
                onChange={(e) => updateCustomer({ phone: e.target.value })}
              />
            </div>

            <input
              placeholder="Email address"
              className="w-full h-11 px-3 rounded-lg border border-border mt-3"
              value={customer.email}
              onChange={(e) => updateCustomer({ email: e.target.value })}
            />
          </section>

          {/* SHIPPING ADDRESS */}
          <section className="bg-surface p-6 rounded-2xl border border-border">
            <h2 className="font-heading text-lg font-semibold mb-4">
              Shipping Address
            </h2>

            <input
              placeholder="Address line"
              className="w-full h-11 px-3 rounded-lg border border-border mb-3"
              value={customer.address}
              onChange={(e) => updateCustomer({ address: e.target.value })}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="City"
                className="h-11 px-3 rounded-lg border border-border"
                value={customer.city}
                onChange={(e) => updateCustomer({ city: e.target.value })}
              />
              <input
                placeholder="Area / Locality"
                className="h-11 px-3 rounded-lg border border-border"
                value={customer.area}
                onChange={(e) => updateCustomer({ area: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <input
                placeholder="Postal code (optional)"
                className="h-11 px-3 rounded-lg border border-border"
                value={customer.postal}
                onChange={(e) => updateCustomer({ postal: e.target.value })}
              />
              <input
                placeholder="Landmark (optional)"
                className="h-11 px-3 rounded-lg border border-border"
                value={customer.landmark}
                onChange={(e) => updateCustomer({ landmark: e.target.value })}
              />
            </div>
          </section>

          {/* PAYMENT METHOD */}
          <section className="bg-surface p-6 rounded-2xl border border-border">
            <h2 className="font-heading text-lg font-semibold mb-4">
              Payment Method
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button
                onClick={() => setPayment("COD")}
                className={`p-4 rounded-xl border ${
                  payment === "COD"
                    ? "border-primary bg-primary/10"
                    : "border-border"
                }`}
              >
                <div className="font-semibold text-sm">Cash on Delivery</div>
                <div className="text-xs text-text-secondary">
                  Pay in cash when order arrives.
                </div>
              </button>

              <button
                onClick={() => setPayment("KHALTI")}
                className={`p-4 rounded-xl border ${
                  payment === "KHALTI"
                    ? "border-primary bg-primary/10"
                    : "border-border"
                }`}
              >
                <div className="font-semibold text-sm">Khalti</div>
                <div className="text-xs text-text-secondary">
                  Quick digital payment.
                </div>
              </button>

              <button
                onClick={() => setPayment("ESEWA")}
                className={`p-4 rounded-xl border ${
                  payment === "ESEWA"
                    ? "border-primary bg-primary/10"
                    : "border-border"
                }`}
              >
                <div className="font-semibold text-sm">Esewa</div>
                <div className="text-xs text-text-secondary">
                  Pay with Esewa or COD.
                </div>
              </button>
            </div>
          </section>
        </div>

        {/* SUMMARY */}
        <aside className="bg-surface p-6 rounded-2xl border border-border h-fit space-y-3">
          <h2 className="font-heading text-lg font-semibold mb-2">
            Order Summary
          </h2>

          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between text-sm"
            >
              <span>
                {item.product.name} × {item.quantity}
              </span>
              <span>
                NPR {(item.product.price * item.quantity).toLocaleString()}
              </span>
            </div>
          ))}

          <div className="border-t border-border pt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>NPR {subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>NPR {delivery}</span>
            </div>

            <div className="flex justify-between font-semibold pt-2">
              <span>Total</span>
              <span>NPR {total.toLocaleString()}</span>
            </div>
          </div>

          <Button
            fullWidth
            onClick={handlePlaceOrder}
            className="h-12 text-sm font-semibold mt-3"
          >
            Place Order
          </Button>

          <p className="text-xs text-text-secondary text-center">
            By placing this order, you agree to our terms & refund policy.
          </p>
        </aside>
      </div>
    </div>
  );
}
