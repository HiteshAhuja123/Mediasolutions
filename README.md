# Media Solutions — Website

Premium advertising agency website built with Next.js 15, React 19, TypeScript and CSS Modules.

---

## Quick Start

```bash
cd media-solutions
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔴 Pending Client Inputs

The following items are marked as placeholders and **must be supplied by the client before launch**.

### 1. Contact Information
| Field | File | Status |
|-------|------|--------|
| Primary phone number | `data/company.ts` → `phone` | ⚠️ Pending |
| WhatsApp number | `data/company.ts` → `whatsapp` | ⚠️ Pending |

### 2. Social Media URLs
All social media links are empty strings in `data/company.ts → social`.
Add the full URLs (e.g. `https://instagram.com/mediasolutions`) when accounts are ready.

### 3. Director / Leadership Section
| Field | File | Status |
|-------|------|--------|
| Director name | `components/sections/Leadership.tsx` | ⚠️ Pending |
| Director designation | `components/sections/Leadership.tsx` | ⚠️ Pending |
| Director photograph | `public/images/director.jpg` | ⚠️ Pending |
| Director biography | `components/sections/Leadership.tsx` | ⚠️ Pending |
| Qualifications | `components/sections/Leadership.tsx` | ⚠️ Pending |

**Once the director's photograph is received:**
1. Place it in `public/images/director.jpg`
2. Uncomment the `<Image />` block in `components/sections/Leadership.tsx`
3. Remove the placeholder `<div>`

### 4. Client Logos
All client logos in `data/clients.ts` have `logoSrc: ''` (text fallback is shown).

**To add a logo:**
1. Confirm permission to use the logo with the client
2. Add the logo file to `public/images/clients/client-name.svg` (or `.png`)
3. Update `logoSrc` in `data/clients.ts` to `'/images/clients/client-name.svg'`

**Clients pending logo:**
- Narayan International School
- Vibgyor School
- RB Jewellers
- Mutha Jewellers
- Mutha Bandhu
- Maharashtra Jewellers
- BBRT School
- Padma Coaching Classes
- Shaktiman
- Orange Cookware
- Cipla Healthcare
- Upper Crust / Hell Energy Drinks
- Real Estate client (name also pending)

**To add more clients:** Add entries to the `clients` array in `data/clients.ts`.

### 5. Portfolio / Campaign Work
All portfolio items in `data/portfolio.ts` use Unsplash placeholder images.

**To add real campaign work:**
1. Obtain client approval for all imagery and campaign attribution
2. Add images to `public/images/portfolio/`
3. Update `imageSrc`, `title`, `client` and `description` in `data/portfolio.ts`
4. Set `isPlaceholder: false`

### 6. OG / Social Share Image
Create `public/og-image.jpg` (1200×630px) using the company branding.

### 7. Domain & SEO
Once the domain is confirmed:
1. Update `metadataBase` URL in `app/layout.tsx`
2. Update `baseUrl` in `app/sitemap.ts`
3. Update `baseUrl` in `app/robots.ts`
4. Add canonical URL
5. Set up Google Search Console and add verification code to `app/layout.tsx`

### 8. Google Maps
Verify the Google Maps embed URL in `data/company.ts → address.mapsEmbedUrl` points to the
exact office location before launch.

### 9. Contact Form Backend
The contact form validates fully but requires a backend to actually send emails.

**Integration options:**
- **Resend** (recommended): Create `/app/api/contact/route.ts`, use `resend` npm package
- **Formspree**: Replace form action with Formspree endpoint
- **Web3Forms**: Add Web3Forms access key
- **EmailJS**: Client-side email via EmailJS SDK

Refer to comments in `components/sections/Contact.tsx` for the exact integration point.

### 10. Vision & Mission
Both statements in `data/company.ts` are draft proposals.
Please review and confirm (or amend) before launch:
- **Vision:** `company.vision`
- **Mission:** `company.mission`

---

## Project Structure

```
media-solutions/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system CSS variables
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx + .module.css
│   │   └── Footer.tsx + .module.css
│   └── sections/
│       ├── Hero.tsx + .module.css
│       ├── About.tsx + .module.css
│       ├── Services.tsx + .module.css
│       ├── Expertise.tsx + .module.css
│       ├── Clients.tsx + .module.css
│       ├── Portfolio.tsx + .module.css
│       ├── VisionMission.tsx + .module.css
│       ├── Leadership.tsx + .module.css
│       └── Contact.tsx + .module.css
├── data/
│   ├── company.ts          # 🔑 Main content data file
│   ├── services.ts         # Service definitions
│   ├── clients.ts          # Client list and logos
│   └── portfolio.ts        # Portfolio/campaign gallery
└── public/
    └── images/
        ├── clients/        # Client logo files go here
        └── portfolio/      # Campaign images go here
```

---

## Content Updates

All business content is separated from presentation. To update content:

| What to update | File |
|----------------|------|
| Company info, address, emails | `data/company.ts` |
| Services | `data/services.ts` |
| Client list | `data/clients.ts` |
| Portfolio work | `data/portfolio.ts` |

---

## Build & Deploy

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## Technology

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** CSS Modules + CSS custom properties
- **Icons:** Lucide React
- **Images:** Next.js Image (optimised)

