# AI Data Rescue - Landing Page

Professional SaaS landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 20+
- npm or pnpm

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for modern styling
- ✅ Responsive mobile-first design
- ✅ SEO optimized with metadata
- ✅ Stripe payment links hardcoded
- ✅ Smooth scroll behavior
- ✅ Interactive FAQ component

## Deployment on Railway

### 1. Create a new Railway project

```bash
railway init
```

### 2. Link your environment

```bash
railway link
```

### 3. Deploy

```bash
railway up
```

### 4. Add custom domain (optional)

```bash
railway domain --add data.codetix.com
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global Tailwind styles
├── components/
│   ├── hero.tsx            # Hero section
│   ├── features.tsx        # Features section
│   ├── pricing.tsx         # Pricing plans with Stripe links
│   ├── testimonials.tsx    # Customer testimonials
│   ├── faq.tsx             # FAQ section
│   └── footer.tsx          # Footer
├── package.json
├── tailwind.config.ts      # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## Configuration

### Stripe Payment Links

Payment links are hardcoded in `components/pricing.tsx`:

```typescript
const STRIPE_LINKS = {
  quick: 'https://buy.stripe.com/bJebJ1deB84V1yM7uS3VC00',
  business: 'https://buy.stripe.com/dRm9AT4I55WN4KY5mK3VC01',
  full: 'https://buy.stripe.com/aFaaEXa2pad31yM5mK3VC02'
}
```

## Performance Optimization

- Image optimization with Next.js
- CSS-in-JS via Tailwind
- Dynamic imports for components
- Minimal JavaScript bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2026 CodeTix
