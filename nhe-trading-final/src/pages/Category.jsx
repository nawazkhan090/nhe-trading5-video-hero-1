import { useParams, Link, Navigate } from "react-router-dom";
import { getCategoryById, getProductsByCategory } from "../data/catalog";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";

export default function Category() {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);

  if (!category) return <Navigate to="/shop" replace />;

  const items = getProductsByCategory(categoryId);

  return (
    <div>
      <div className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-[0.15]" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-signal/20 blur-[90px] animate-aurora" />
        <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-navy-light/50 blur-[90px] animate-aurora-slow" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 animate-fade-scale">
          <div className="text-xs font-mono text-steel-light mb-3">
            <Link to="/shop" className="hover:text-signal-light transition-colors">Shop</Link> / {category.code}
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl mb-3 gradient-text">{category.name}</h1>
          <p className="text-steel-light max-w-2xl mb-6">{category.blurb}</p>
          <div className="flex flex-wrap gap-2">
            {category.brands.map((b) => (
              <span key={b} className="text-xs font-mono glass rounded-full px-3 py-1.5 hover:border-signal/40 transition-colors">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
