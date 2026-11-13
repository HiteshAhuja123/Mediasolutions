// ============================================================
// PORTFOLIO DATA
// ⚠️  imageSrc: Replace placeholder URLs with actual campaign images
//     once client approves usage. All images must be verified.
// ============================================================

export type PortfolioCategory =
  | 'all'
  | 'outdoor'
  | 'digital-screens'
  | 'cinema'
  | 'print'
  | 'brand-activations'
  | 'events';

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'outdoor', label: 'Outdoor Campaigns' },
  { id: 'digital-screens', label: 'Digital Screens' },
  { id: 'cinema', label: 'Cinema Advertising' },
  { id: 'print', label: 'Print Advertising' },
  { id: 'brand-activations', label: 'Brand Activations' },
  { id: 'events', label: 'Events' },
];

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  description: string;
  // ⚠️ Replace these Unsplash placeholder URLs with actual campaign images
  imageSrc: string;
  imageAlt: string;
  isPlaceholder: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p-01',
    title: 'Billboard Campaign',
    client: '[Client Name — Placeholder]',
    category: 'outdoor',
    description: 'Large-format outdoor billboard campaign across key Thane corridors.',
    imageSrc: '/images/stock/photo-1558618666-fcd25c85cd64.jpg',
    imageAlt: 'Outdoor billboard advertising campaign — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-02',
    title: 'Transit Panel Campaign',
    client: '[Client Name — Placeholder]',
    category: 'outdoor',
    description: 'Strategic transit panel placements across Mumbai metropolitan region.',
    imageSrc: '/images/stock/photo-1534536281715-e28d76689b4d.jpg',
    imageAlt: 'Transit panel outdoor advertising — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-03',
    title: 'Mall Digital Screens',
    client: '[Client Name — Placeholder]',
    category: 'digital-screens',
    description: 'Dynamic DOOH campaign across premium mall digital screen networks.',
    imageSrc: '/images/stock/photo-1555529669-e69e7aa0ba9a.jpg',
    imageAlt: 'Digital advertising screens in mall — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-04',
    title: 'Cinema On-Screen',
    client: '[Client Name — Placeholder]',
    category: 'cinema',
    description: 'High-impact cinema on-screen advertising for a product launch.',
    imageSrc: '/images/stock/photo-1517604931442-7e0c8ed2963c.jpg',
    imageAlt: 'Cinema advertising screen — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-05',
    title: 'Newspaper Campaign',
    client: '[Client Name — Placeholder]',
    category: 'print',
    description: 'Full-page newspaper advertising in leading Maharashtra dailies.',
    imageSrc: '/images/stock/photo-1504711434969-e33886168f5c.jpg',
    imageAlt: 'Newspaper print advertising — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-06',
    title: 'Brand Activation',
    client: '[Client Name — Placeholder]',
    category: 'brand-activations',
    description: 'Experiential brand activation at a high-footfall retail location.',
    imageSrc: '/images/stock/photo-1540575467063-178a50c2df87.jpg',
    imageAlt: 'Brand activation event — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-07',
    title: 'Corporate Event',
    client: '[Client Name — Placeholder]',
    category: 'events',
    description: 'End-to-end corporate event production and management.',
    imageSrc: '/images/stock/photo-1478737270239-2f02b77fc618.jpg',
    imageAlt: 'Corporate event management — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-08',
    title: 'Street Furniture Campaign',
    client: '[Client Name — Placeholder]',
    category: 'outdoor',
    description: 'Strategic bus shelter and street furniture advertising placements.',
    imageSrc: '/images/stock/photo-1486325212027-8081e485255e.jpg',
    imageAlt: 'Street furniture outdoor advertising — placeholder',
    isPlaceholder: true,
  },
  {
    id: 'p-09',
    title: 'Product Launch Event',
    client: '[Client Name — Placeholder]',
    category: 'events',
    description: 'Concept-to-execution product launch event with media coverage.',
    imageSrc: '/images/stock/photo-1492684223066-81342ee5ff30.jpg',
    imageAlt: 'Product launch event — placeholder',
    isPlaceholder: true,
  },
];

// ⚠️  HOW TO ADD REAL CAMPAIGN WORK
// 1. Get client approval for all imagery and campaign attribution
// 2. Add images to public/images/portfolio/
// 3. Set isPlaceholder: false and update imageSrc to '/images/portfolio/filename.jpg'
// 4. Update title, client and description with verified campaign details

