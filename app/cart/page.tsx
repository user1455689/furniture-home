"use client";

import { useCart } from "@/components/cart-context";
import Button from "@/components/ui/Button";
import Link from "next/link";

const CartPage = () => {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();

  const delivery = subtotal > 0 ? 200 : 0;
  const total = subtotal + delivery;

  return (
    <div className="app-container py-10">
      <h1 className="font-heading text-2xl font-semibold mb-2">Your Cart</h1>
      <p className="text-sm text-text-secondary mb-6">
        Review your items before checkout.
      </p>

      {items.length === 0 ? (
        <div className="bg-surface rounded-2xl border border-border p-6 text-sm">
          <p>Your cart is empty.</p>
          <Link
            href="/category"
            className="mt-3 inline-block text-primary font-semibold text-xs"
          >
            Continue shopping →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-8">
          {/* Items */}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-surface rounded-2xl border border-border p-4"
              >
                <div className="h-24 w-24 rounded-xl overflow-hidden bg-bg">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between gap-3">
                    <div>
                      <div className="font-heading text-sm font-semibold">
                        {item.product.name}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {item.product.category}
                      </div>
                    </div>
                    <button
                      className="text-[11px] text-text-secondary hover:text-primary"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-border rounded-full h-9 text-xs">
                      <button
                        className="px-3"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity - 1,
                          )
                        }
                      >
                        -
                      </button>
                      <span className="px-3 border-x border-border">
                        {item.quantity}
                      </span>
                      <button
                        className="px-3"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity + 1,
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="font-heading text-sm font-semibold">
                      NPR{" "}
                      {(item.product.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="bg-surface rounded-2xl border border-border p-5 h-fit space-y-4">
            <h2 className="font-heading text-sm font-semibold mb-2">
              Order Summary
            </h2>

            <div className="flex justify-between text-xs text-text-secondary">
              <span>Subtotal</span>
              <span>NPR {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs text-text-secondary">
              <span>Delivery</span>
              <span>{delivery ? `NPR ${delivery}` : "Free"}</span>
            </div>

            <div className="border-t border-border pt-3 flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>NPR {total.toLocaleString()}</span>
            </div>

            <div className="text-[11px] text-text-secondary">
              Secure payments via Khalti, cards & Cash on Delivery.
            </div>

            <Link href="/checkout">
              <Button fullWidth>Proceed to Checkout</Button>
            </Link>

            <div className="text-[11px] text-text-secondary">
              Have a coupon? Apply at payment step.
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
