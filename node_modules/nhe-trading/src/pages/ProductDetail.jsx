import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { getProductById, getProductsByCategory } from "../data/catalog";
import { useCart } from "../context/CartContext";
import ProductImage from "../components/ProductImage";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/shop" replace />;

  const related = getProductsByCategory(product.categoryId).filter((p) => p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="text-xs font-mono text-steel mb-6">
        <Link to="/shop" className="hover:text-signal">Shop</Link> /{" "}
        <Link to={`/category/${product.categoryId}`} className="hover:text-signal">{product.categoryName}</Link> /{" "}
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <ProductImage categoryId={product.categoryId} image={product.image} className="w-full aspect-square rounded-2xl shadow-2xl shadow-navy/10" />

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-signal uppercase tracking-wide">{product.brand}</span>
            <span className="text-xs font-mono text-steel-light">{product.sku}</span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-4">{product.name}</h1>
          <p className="text-steel leading-relaxed mb-6">{product.description}</p>

          <div className="font-mono font-bold text-3xl text-navy mb-6">AED {product.price.toLocaleString()}</div>

          <div className="flex items-center gap-2 text-sm mb-6">
            <span className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
            <span className="text-steel">{product.inStock ? "In stock — ships within Dubai in 1–2 days" : "Out of stock"}</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-steel-pale rounded-md">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-11 flex items-center justify-center hover:bg-paper focus-ring"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-12 text-center font-mono">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-11 flex items-center justify-center hover:bg-paper focus-ring"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex-1 bg-signal hover:bg-signal-dark text-white font-semibold py-3.5 rounded-full transition-all duration-300 focus-ring hover:shadow-[0_0_30px_rgba(232,98,44,0.45)] hover:-translate-y-0.5"
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>
          </div>

          <div className="border-t border-steel-pale pt-6 space-y-2 text-sm text-steel">
            <div className="flex justify-between"><span>Category</span><span className="text-ink font-medium">{product.categoryName}</span></div>
            <div className="flex justify-between"><span>Brand</span><span className="text-ink font-medium">{product.brand}</span></div>
            <div className="flex justify-between"><span>SKU</span><span className="text-ink font-mono text-xs">{product.sku}</span></div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="font-display font-bold text-xl text-ink mb-5">More from {product.categoryName}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
