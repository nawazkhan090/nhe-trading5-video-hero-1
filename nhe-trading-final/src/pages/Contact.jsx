import { useState } from "react";
import { company } from "../data/catalog";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="text-xs font-mono text-signal uppercase tracking-widest">Get in touch</span>
        <h1 className="font-display font-bold text-3xl text-ink mt-1">Contact Us</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          {sent ? (
            <div className="bg-signal/10 border border-signal/30 rounded-lg p-6">
              <p className="font-semibold text-ink mb-1">Message sent ✓</p>
              <p className="text-sm text-steel">We'll get back to you shortly at {form.email}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-steel uppercase tracking-wide mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-steel-pale rounded-md px-3 py-2.5 text-sm focus-ring outline-none resize-none"
                />
              </div>
              <button type="submit" className="bg-signal hover:bg-signal-dark text-white font-semibold px-6 py-3 rounded-md transition-colors focus-ring">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-steel-pale rounded-lg p-6">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-steel mb-3">Phone</h3>
            {company.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block font-mono text-sm text-navy hover:text-signal mb-1">
                {p}
              </a>
            ))}
          </div>
          <div className="bg-white border border-steel-pale rounded-lg p-6">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-steel mb-3">Email</h3>
            <a href={`mailto:${company.email}`} className="font-mono text-sm text-navy hover:text-signal">
              {company.email}
            </a>
          </div>
          <div className="bg-white border border-steel-pale rounded-lg p-6">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-steel mb-3">Address</h3>
            <p className="text-sm text-steel">
              P.O. Box {company.poBox}<br />
              {company.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
