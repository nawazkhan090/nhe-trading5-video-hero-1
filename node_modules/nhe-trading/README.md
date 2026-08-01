# NHE Trading — E-Commerce Storefront

A React e-commerce site for **Nasir Hussain Equipment Trading LLC**, built from the company's product profile — 16 categories, 80+ distributed brands, full cart and checkout flow.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host (Vercel, Netlify, etc.).

## What's inside

- **Home** — hero, 16-category index, featured products, brand strip
- **Shop** — full catalog with search, category filter, sort
- **Category pages** — per-division product listing with brand tags
- **Product detail** — spec info, quantity selector, related products
- **Cart** — slide-in drawer, persists during session (in-memory)
- **Checkout** — demo order flow (no real payment processing)
- **About / Contact** — company info pulled from the source profile

## Notes

- Product data lives in `src/data/catalog.js` — all 16 categories and demo SKUs are generated there. Swap in real product photos, prices, and descriptions when ready.
- Product images are currently styled placeholders (`ProductImage.jsx`) using category icons on a blueprint-grid background. Replace with real photography by updating that component or adding an `image` URL field to each product.
- Cart state is in-memory only (`CartContext.jsx`) — add persistence (localStorage, or a backend) if needed for production.
- Checkout is a demo form; no payment gateway is wired up. Add Stripe/Razorpay when ready, similar to prior projects.

## Tech stack

React 19 · Vite · React Router · Tailwind CSS
