import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductImage from "./ProductImage";
import useTilt from "../hooks/useTilt";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group bg-white rounded-2xl border border-steel-pale overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_30px_60px_-20px_rgba(232,98,44,0.35),0_0_0_1px_rgba(232,98,44,0.2)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Link to={`/product/${product.id}`} className="block focus-ring relative">
        <ProductImage categoryId={product.categoryId} image={product.image} className="w-full aspect-square" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="glass text-white text-[10px] font-mono px-2.5 py-1 rounded-full">View →</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-1">
          <span className="text-[10px] font-mono text-steel-light uppercase tracking-wide">{product.brand}</span>
          <span className="text-[10px] font-mono text-steel-light">{product.sku}</span>
        </div>
        <Link to={`/product/${product.id}`} className="focus-ring rounded">
          <h3 className="font-display font-semibold text-sm text-ink leading-snug mb-2 group-hover:text-signal transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-3">
          <span className="font-mono font-bold text-navy">AED {product.price.toLocaleString()}</span>
          <button
            onClick={() => addToCart(product, 1)}
            className="relative overflow-hidden bg-navy hover:bg-signal text-white text-xs font-semibold px-3.5 py-2.5 rounded-full transition-all duration-300 focus-ring hover:shadow-[0_0_20px_rgba(232,98,44,0.45)]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
