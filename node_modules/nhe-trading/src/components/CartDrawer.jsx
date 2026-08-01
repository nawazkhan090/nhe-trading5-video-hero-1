import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductImage from "./ProductImage";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeFromCart, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={() => toggleCart(false)}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl animate-slide-in flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-steel-pale bg-navy text-white">
          <h2 className="font-display font-semibold text-lg">Your Cart ({items.length})</h2>
          <button onClick={() => toggleCart(false)} className="text-xl hover:text-signal-light focus-ring rounded" aria-label="Close cart">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-3">
            <span className="text-4xl">🛒</span>
            <p className="text-steel font-medium">Your cart is empty.</p>
            <button
              onClick={() => {
                toggleCart(false);
                navigate("/shop");
              }}
              className="mt-2 text-signal font-semibold hover:underline focus-ring rounded"
            >
              Browse the catalog →
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 pb-4 border-b border-steel-pale last:border-0">
                  <ProductImage categoryId={item.categoryId} image={item.image} className="w-16 h-16 rounded-md shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-ink truncate">{item.name}</div>
                    <div className="text-xs text-steel font-mono">{item.sku}</div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-steel-pale rounded">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-paper focus-ring"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-mono">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-paper focus-ring"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-mono font-semibold text-sm">
                        AED {(item.price * item.qty).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-steel-light hover:text-signal text-sm self-start focus-ring rounded"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="px-5 py-4 border-t border-steel-pale space-y-3 bg-paper">
              <div className="flex justify-between text-sm text-steel">
                <span>Subtotal</span>
                <span className="font-mono font-semibold text-ink">AED {subtotal.toLocaleString()}</span>
              </div>
              <p className="text-xs text-steel-light">Shipping and VAT calculated at checkout.</p>
              <button
                onClick={() => {
                  toggleCart(false);
                  navigate("/checkout");
                }}
                className="w-full bg-signal hover:bg-signal-dark text-white font-semibold py-3 rounded-md transition-colors focus-ring"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
