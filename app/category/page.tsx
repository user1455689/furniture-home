"use client";

import { useCart } from "@/components/cart-context";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();

  const delivery = subtotal > 0 ? 200 : 0;
  const total = subtotal + delivery;

  const placeOrder = () => {
    if (!items.length) return;
    // Here you'd integrate real payment / backend
    clearCart();
    alert("Order placed! (mock)");
    router.push("/");
  };

  return (
    <div className="app-container py-10">
      <h1 className="font-heading text-2xl font-semibold mb-2">Checkout</h1>
      <p className="text-sm text-text-secondary mb-6">
        Enter your details to complete your order.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-8">
        {/* Left - Forms */}
        <div className="space-y-6">
          {/* Contact */}
          <section className="bg-surface rounded-2xl border border-border p-5">
            <h2 className="font-heading text-sm font-semibold mb-3">
              Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <input
                className="h-10 rounded-lg border border-border px-3"
                placeholder="Full name"
              />
              <input
                className="h-10 rounded-lg border border-border px-3"
                placeholder="Phone number"
              />
              <input
                className="h-10 rounded-lg border border-border px-3 md:col-span-2"
                placeholder="Email address"
              />
            </div>
          </section>

          {/* Shipping */}
          <section className="bg-surface rounded-2xl border border-border p-5">
            <h2 className="font-heading text-sm font-semibold mb-3">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-3">
              <input
                className="h-10 rounded-lg border border-border px-3 md:col-span-2"
                placeholder="Address line"
              />
              <input
                className="h-10 rounded-lg border border-border px-3"
                placeholder="City"
              />
              <input
                className="h-10 rounded-lg border border-border px-3"
                placeholder="Area / Locality"
              />
              <input
                className="h-10 rounded-lg border border-border px-3"
                placeholder="Postal code (optional)"
              />
              <input
                className="h-10 rounded-lg border border-border px-3 md:col-span-2"
                placeholder="Landmark (optional)"
              />
            </div>

            <div className="text-xs text-text-secondary">
              Delivery currently available inside Kathmandu Valley. For
              outside, we will call to confirm.
            </div>
          </section>

          {/* Payment */}
          <section className="bg-surface rounded-2xl border border-border p-5">
            <h2 className="font-heading text-sm font-semibold mb-3">
              Payment Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {[
                {
                  title: "Cash on Delivery",
                  desc: "Pay in cash when your order arrives.",
                  selected: true,
                },
                {
                  title: "Khalti",
                  desc: "Quick payment via Khalti wallet.",
                  selected: false,
                },
                {
                  title: "Card / Wallet",
                  desc: "Pay with debit/credit card.",
                  selected: false,
                },
              ].map((m) => (
                <button
                  key={m.title}
                  className={`text-left p-3 rounded-xl border ${
                    m.selected
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">{m.title}</span>
                    {m.selected && (
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-[11px] text-text-secondary">
                    {m.desc}
                  </p>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Right - Order summary */}
        <aside className="bg-surface rounded-2xl border border-border p-5 h-fit space-y-4">
          <h2 className="font-heading text-sm font-semibold mb-2">
            Order Summary
          </h2>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {items.length === 0 && (
              <div className="text-xs text-text-secondary">
                Your cart is empty.
              </div>
            )}
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-lg overflow-hidden bg-bg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">
                      {item.product.name}
                    </div>
                    <div className="text-text-secondary">
                      Qty {item.quantity}
                    </div>
                  </div>
                </div>
                <div className="font-semibold">
                  NPR{" "}
                  {(item.product.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-3 space-y-2 text-xs text-text-secondary">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>NPR {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>{delivery ? `NPR ${delivery}` : "Free"}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold text-text-primary pt-2 border-t border-border">
              <span>Total</span>
              <span>NPR {total.toLocaleString()}</span>
            </div>
          </div>

          <Button fullWidth onClick={placeOrder} disabled={!items.length}>
            Place Order
          </Button>

          <div className="text-[11px] text-text-secondary">
            By placing this order, you agree to our terms & refund policy.
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
