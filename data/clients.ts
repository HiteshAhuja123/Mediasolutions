// ============================================================
// CLIENTS DATA
// ⚠️  logoSrc: Replace '' with actual logo file paths once
//     client approves logo usage. e.g. '/images/clients/narayan-school.svg'
// ============================================================

export interface Client {
  id: string;
  name: string;
  sector: string;
  logoSrc: string; // empty string = text-based fallback
  logoAlt: string;
}

export const clients: Client[] = [
  {
    id: 'narayan-international-school',
    name: 'Narayan International School',
    sector: 'Education',
    logoSrc: '',
    logoAlt: 'Narayan International School logo',
  },
  {
    id: 'vibgyor-school',
    name: 'Vibgyor School',
    sector: 'Education',
    logoSrc: '',
    logoAlt: 'Vibgyor School logo',
  },
  {
    id: 'rb-jewellers',
    name: 'RB Jewellers',
    sector: 'Jewellery & Retail',
    logoSrc: '',
    logoAlt: 'RB Jewellers logo',
  },
  {
    id: 'mutha-jewellers',
    name: 'Mutha Jewellers',
    sector: 'Jewellery & Retail',
    logoSrc: '',
    logoAlt: 'Mutha Jewellers logo',
  },
  {
    id: 'mutha-bandhu',
    name: 'Mutha Bandhu',
    sector: 'Jewellery & Retail',
    logoSrc: '',
    logoAlt: 'Mutha Bandhu logo',
  },
  {
    id: 'maharashtra-jewellers',
    name: 'Maharashtra Jewellers',
    sector: 'Jewellery & Retail',
    logoSrc: '',
    logoAlt: 'Maharashtra Jewellers logo',
  },
  {
    id: 'bbrt-school',
    name: 'BBRT School',
    sector: 'Education',
    logoSrc: '',
    logoAlt: 'BBRT School logo',
  },
  {
    id: 'padma-coaching-classes',
    name: 'Padma Coaching Classes',
    sector: 'Education',
    logoSrc: '',
    logoAlt: 'Padma Coaching Classes logo',
  },
  {
    id: 'shaktiman',
    name: 'Shaktiman',
    sector: 'Consumer Goods',
    logoSrc: '',
    logoAlt: 'Shaktiman logo',
  },
  {
    id: 'orange-cookware',
    name: 'Orange Cookware',
    sector: 'Consumer Goods',
    logoSrc: '',
    logoAlt: 'Orange Cookware logo',
  },
  {
    id: 'cipla-healthcare',
    name: 'Cipla Healthcare',
    sector: 'Healthcare & Pharma',
    logoSrc: '',
    logoAlt: 'Cipla Healthcare logo',
  },
  {
    id: 'upper-crust-hell-energy',
    name: 'Upper Crust / Hell Energy Drinks',
    sector: 'Food & Beverages',
    logoSrc: '',
    logoAlt: 'Upper Crust / Hell Energy Drinks logo',
  },
  // ⚠️  PLACEHOLDER — Replace with actual real-estate client name & logo
  {
    id: 'realestate-client',
    name: 'Real Estate Partner',
    sector: 'Real Estate',
    logoSrc: '',
    logoAlt: 'Real Estate client logo',
  },
  // Add more clients below:
  // { id: 'new-client', name: 'Client Name', sector: 'Sector', logoSrc: '', logoAlt: '...' },
];

