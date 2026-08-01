import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { company, categories } from "../data/catalog";

export default function Navbar() {
  const { itemCount, toggleCart } = useCart();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-navy text-white shadow-lg shadow-navy/20">
      <div className="border-b border-white/10 bg-navy-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex justify-between items-center text-xs text-steel-light font-mono">
          <span className="hidden sm:inline">Dubai, U.A.E. · Since {company.founded}</span>
          <div className="flex gap-4">
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="hover:text-signal-light transition-colors">
              {company.phones[0]}
            </a>
            <a href={`mailto:${company.email}`} className="hidden sm:inline hover:text-signal-light transition-colors">
              {company.email}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 focus-ring rounded" onClick={() => setMenuOpen(false)}>
          <div className="w-9 h-9 rounded bg-signal flex items-center justify-center font-display font-bold text-navy text-sm">
            NH
          </div>
          <div className="leading-none">
            <div className="font-display font-semibold text-base tracking-tight">{company.shortName}</div>
            <div className="text-[10px] text-steel-light tracking-wide uppercase">Equipment Trading LLC</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium ml-4">
          <Link to="/shop" className="hover:text-signal-light transition-colors focus-ring rounded">
            Shop All
          </Link>
          <div className="relative group">
            <button className="hover:text-signal-light transition-colors focus-ring rounded">Categories</button>
            <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
              <div className="bg-white text-ink rounded-lg shadow-2xl border border-steel-pale w-80 max-h-96 overflow-y-auto p-2 grid grid-cols-1">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/category/${cat.id}`}
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-paper transition-colors text-sm"
                  >
                    <span className="font-mono text-xs text-signal w-6">{cat.code}</span>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/about" className="hover:text-signal-light transition-colors focus-ring rounded">
            About
          </Link>
          <Link to="/contact" className="hover:text-signal-light transition-colors focus-ring rounded">
            Contact
          </Link>
        </nav>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-sm ml-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands, SKU..."
            className="w-full bg-white/10 border border-white/15 rounded-l-md px-3 py-2 text-sm placeholder:text-steel-light focus-ring focus:bg-white/15 outline-none"
          />
          <button type="submit" className="bg-signal hover:bg-signal-dark px-3 rounded-r-md transition-colors focus-ring" aria-label="Search">
            ⌕
          </button>
        </form>

        <button
          onClick={() => toggleCart()}
          className="relative ml-auto md:ml-0 flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-md px-3 py-2 transition-colors focus-ring"
          aria-label="Open cart"
        >
          <span className="text-lg">🛒</span>
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-signal text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>

        <button
          className="lg:hidden text-2xl leading-none focus-ring rounded"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-white/10 border border-white/15 rounded-l-md px-3 py-2 text-sm outline-none"
            />
            <button type="submit" className="bg-signal px-3 rounded-r-md">⌕</button>
          </form>
          <Link to="/shop" className="block py-2 text-sm font-medium" onClick={() => setMenuOpen(false)}>
            Shop All
          </Link>
          <Link to="/about" className="block py-2 text-sm font-medium" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="block py-2 text-sm font-medium" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <div className="pt-2 border-t border-white/10">
            <div className="text-xs text-steel-light uppercase tracking-wide mb-2">Categories</div>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs py-1.5 text-steel-light hover:text-white"
                >
                  {cat.code} · {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
