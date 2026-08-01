import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products } from "../data/catalog";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("relevance");

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.categoryId === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
      );
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCategory, query, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <span className="text-xs font-mono text-signal uppercase tracking-widest">Full Catalog</span>
        <h1 className="font-display font-bold text-3xl text-ink mt-1">Shop All Products</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-24 space-y-6">
            <div>
              <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-2 block">Search</label>
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSearchParams(e.target.value ? { q: e.target.value } : {});
                }}
                placeholder="Product, brand, SKU..."
                className="w-full border border-steel-pale rounded-md px-3 py-2 text-sm focus-ring outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-2 block">Category</label>
              <div className="space-y-1 max-h-96 overflow-y-auto pr-1">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`w-full text-left text-sm px-3 py-2 rounded-md transition-colors focus-ring ${
                    activeCategory === "all" ? "bg-navy text-white" : "hover:bg-paper text-steel"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left text-sm px-3 py-2 rounded-md transition-colors focus-ring flex items-center gap-2 ${
                      activeCategory === cat.id ? "bg-navy text-white" : "hover:bg-paper text-steel"
                    }`}
                  >
                    <span className="font-mono text-xs opacity-70">{cat.code}</span>
                    <span className="truncate">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-steel">{filtered.length} products</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-steel-pale rounded-md px-3 py-2 text-sm focus-ring outline-none"
            >
              <option value="relevance">Sort: Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-steel font-medium mb-2">No products match your search.</p>
              <p className="text-steel-light text-sm">Try a different keyword or clear the category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
