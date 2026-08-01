import { Link } from "react-router-dom";
import { company, categories } from "../data/catalog";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-steel-light mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded bg-signal flex items-center justify-center font-display font-bold text-navy text-sm">
              NH
            </div>
            <span className="font-display font-semibold text-white">{company.shortName}</span>
          </div>
          <p className="text-sm leading-relaxed">
            Dubai's trusted supplier of construction equipment and materials since {company.founded}.
          </p>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-sm mb-4 uppercase tracking-wide">Categories</h4>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((cat) => (
              <li key={cat.id}>
                <Link to={`/category/${cat.id}`} className="hover:text-signal-light transition-colors focus-ring rounded">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-sm mb-4 uppercase tracking-wide">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-signal-light transition-colors focus-ring rounded">About Us</Link></li>
            <li><Link to="/shop" className="hover:text-signal-light transition-colors focus-ring rounded">Shop All</Link></li>
            <li><Link to="/contact" className="hover:text-signal-light transition-colors focus-ring rounded">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-sm mb-4 uppercase tracking-wide">Contact</h4>
          <ul className="space-y-2 text-sm font-mono text-xs">
            <li>{company.phones[0]}</li>
            <li>{company.email}</li>
            <li>P.O. Box {company.poBox}</li>
            <li>{company.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="text-steel">Built for demonstration purposes.</span>
        </div>
      </div>
    </footer>
  );
}
