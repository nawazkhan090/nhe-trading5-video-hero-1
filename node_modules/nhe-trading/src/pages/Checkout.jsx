import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "Dubai", notes: "" });
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const vat = Math.round(subtotal * 0.05);
  const shipping = subtotal > 500 ? 0 : 45;
  const total = subtotal + vat + shipping;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "NHE-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    setPlaced(true);
    clearCart();
  };

  if (items.length === 0 && !placed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-steel font-medium mb-4">Your cart is empty.</p>
        <Link to="/shop" className="text-signal font-semibold hover:underline">Browse the catalog →</Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-signal/10 flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
        <h1 className="font-display font-bold text-2xl text-ink mb-3">Order Placed</h1>
        <p className="text-steel mb-1">Thank you, {form.name.split(" ")[0] || "there"}. Your order has been received.</p>
        <p className="text-steel-light font-mono text-sm mb-8">Order reference: {orderId}</p>
        <p className="text-steel text-sm mb-8">
          Our sales team will contact you at {form.email || "your email"} to confirm delivery details.
          This is a demo checkout — no payment has been processed.
        </p>
        <Link to="/shop" className="bg-navy hover:bg-signal text-white font-semibold px-6 py-3 rounded-md transition-colors inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-display font-bold text-3xl text-ink mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-steel-pale rounded-lg p-6">
            <h2 className="font-display font-semibold text-lg mb-4">Delivery Details</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Full Name</label>
                <input required name="name" value={form.name} onChange={handleChange} className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Phone</label>
                <input required name="phone" value={form.phone} onChange={handleChange} className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Delivery Address</label>
                <input required name="address" value={form.address} onChange={handleChange} className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">City</label>
                <input required name="city" value={form.city} onChange={handleChange} className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Order Notes (optional)</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none resize-none" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-steel-pale rounded-lg p-6">
            <h2 className="font-display font-semibold text-lg mb-4">Payment</h2>
            <p className="text-sm text-steel">
              This is a demo storefront — payment is not processed. Your order will be confirmed by phone or email.
            </p>
          </div>

          <button type="submit" className="w-full bg-signal hover:bg-signal-dark text-white font-semibold py-3.5 rounded-md transition-colors focus-ring">
            Place Order — AED {total.toLocaleString()}
          </button>
        </form>

        <div className="bg-paper border border-steel-pale rounded-lg p-6 h-fit sticky top-24">
          <h2 className="font-display font-semibold text-lg mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-steel">
                  {item.name} <span className="text-steel-light">×{item.qty}</span>
                </span>
                <span className="font-mono">AED {(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-steel-pale pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-steel"><span>Subtotal</span><span className="font-mono">AED {subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between text-steel"><span>VAT (5%)</span><span className="font-mono">AED {vat.toLocaleString()}</span></div>
            <div className="flex justify-between text-steel"><span>Shipping</span><span className="font-mono">{shipping === 0 ? "Free" : `AED ${shipping}`}</span></div>
            <div className="flex justify-between font-bold text-ink pt-2 border-t border-steel-pale">
              <span>Total</span><span className="font-mono">AED {total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
