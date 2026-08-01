import { Link } from "react-router-dom";
import { categories, products, company } from "../data/catalog";
import ProductCard from "../components/ProductCard";
import useReveal from "../hooks/useReveal";
import ParticleField from "../components/ParticleField";
import MagneticButton from "../components/MagneticButton";
import BrandMarquee from "../components/BrandMarquee";
import HeroReel from "../components/HeroReel";

function RevealSection({ children, className = "", style }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}

export default function Home() {
  const featured = products.filter((_, i) => i % 9 === 0).slice(0, 8);

  return (
    <div className="overflow-hidden">
      {/* Cinematic hero */}
      <section className="relative bg-navy text-white overflow-hidden min-h-[92vh] flex items-center">
        {/* Cinematic hero reel — crossfading Ken Burns slideshow of real catalog stock */}
        <HeroReel />
        {/* Ambient particles layered above the reel for depth */}
        <div className="absolute inset-0 pointer-events-none">
          <ParticleField density={50} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-navy" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 w-full pointer-events-none">
          <div className="max-w-2xl animate-fade-scale pointer-events-auto">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-steel-light mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-signal animate-glow-pulse" />
              Dubai · Est. {company.founded} · 16 product divisions
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-[1.02] tracking-tight mb-6">
              Equipment and
              <br />
              <span className="gradient-text text-glow">materials</span>, spec'd
              <br />
              for the job site.
            </h1>
            <p className="text-steel-light text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              {company.about}
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton as={Link} to="/shop" className="relative group bg-signal hover:bg-signal-dark text-white font-semibold px-8 py-4 rounded-full focus-ring overflow-hidden hover:shadow-[0_0_50px_rgba(232,98,44,0.6)] inline-block">
                <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100" />
                <span className="relative">Browse Catalog</span>
              </MagneticButton>
              <MagneticButton as={Link} to="/contact" className="glass hover:bg-white/10 font-semibold px-8 py-4 rounded-full focus-ring inline-block">
                Request a Quote
              </MagneticButton>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float pointer-events-none">
          <div className="w-6 h-10 rounded-full border-2 border-white/25 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-signal" />
          </div>
        </div>
      </section>

      {/* Brands strip — sliding photo marquee, right under the hero */}
      <section className="py-16 sm:py-20 overflow-hidden bg-paper">
        <RevealSection className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <span className="text-xs font-mono text-signal uppercase tracking-widest">Trusted brands</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-2">We Distribute For</h2>
          <p className="text-steel text-sm sm:text-base mt-3 max-w-xl">
            Genuine stock from the manufacturers job sites already trust — hover any tile to pause and read the name.
          </p>
        </RevealSection>
        <RevealSection>
          <BrandMarquee />
        </RevealSection>
      </section>

      {/* Category rail — catalog index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
        <RevealSection className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-signal uppercase tracking-widest">Catalog Index</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-2">16 Divisions, One Supplier</h2>
          </div>
          <Link to="/shop" className="hidden sm:block text-sm font-semibold text-navy hover:text-signal focus-ring rounded transition-colors">
            View all →
          </Link>
        </RevealSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <RevealSection key={cat.id} className={`transition-delay-${i}`}>
              <Link
                to={`/category/${cat.id}`}
                className="lux-card group relative block bg-white border border-steel-pale rounded-2xl p-5 overflow-hidden focus-ring h-full"
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-signal/5 via-transparent to-navy/5" />
                <span className="relative font-mono text-xs text-steel-light">{cat.code}</span>
                <h3 className="relative font-display font-semibold text-sm text-ink mt-2 mb-1 leading-snug group-hover:text-signal transition-colors">
                  {cat.name}
                </h3>
                <p className="relative text-xs text-steel line-clamp-2">{cat.blurb}</p>
                <div className="relative mt-3 text-[10px] font-mono text-steel-light uppercase tracking-wide">
                  {cat.brands.length} brands
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="relative bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-[0.08]" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-signal/10 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <RevealSection className="mb-10">
            <span className="text-xs font-mono text-signal uppercase tracking-widest">Popular this month</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-2">Featured Products</h2>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {featured.map((p, i) => (
              <RevealSection key={p.id} style={{ transitionDelay: `${(i % 4) * 80}ms` }}>
                <ProductCard product={p} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
