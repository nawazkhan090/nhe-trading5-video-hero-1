import { company, categories } from "../data/catalog";

export default function About() {
  return (
    <div>
      <div className="bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint bg-blueprint opacity-25" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <span className="text-xs font-mono text-steel-light uppercase tracking-widest">Since {company.founded}</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl mt-3 mb-4">{company.name}</h1>
          <p className="text-steel-light text-lg" dir="rtl">{company.arabicName}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose max-w-none mb-16">
          <p className="text-lg text-steel leading-relaxed">{company.about}</p>
          <p className="text-lg text-steel leading-relaxed mt-4">
            We're committed to helping contractors, remodelers, and even those dealing with minor repairs. No matter
            the size of the project, we're at your service — with our range of products from the many brands we
            distribute available at affordable prices.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-steel-pale rounded-lg p-6 text-center">
            <div className="font-display font-bold text-3xl text-signal mb-1">{new Date().getFullYear() - company.founded}+</div>
            <div className="text-sm text-steel">Years in operation</div>
          </div>
          <div className="bg-white border border-steel-pale rounded-lg p-6 text-center">
            <div className="font-display font-bold text-3xl text-signal mb-1">{categories.length}</div>
            <div className="text-sm text-steel">Product divisions</div>
          </div>
          <div className="bg-white border border-steel-pale rounded-lg p-6 text-center">
            <div className="font-display font-bold text-3xl text-signal mb-1">80+</div>
            <div className="text-sm text-steel">Brands distributed</div>
          </div>
        </div>

        <h2 className="font-display font-bold text-2xl text-ink mb-6">What We Supply</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {categories.map((cat) => (
            <div key={cat.id} className="flex gap-3 items-start bg-white border border-steel-pale rounded-md p-4">
              <span className="font-mono text-xs text-signal shrink-0 pt-0.5">{cat.code}</span>
              <div>
                <div className="font-display font-semibold text-sm text-ink">{cat.name}</div>
                <div className="text-xs text-steel mt-0.5">{cat.blurb}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
