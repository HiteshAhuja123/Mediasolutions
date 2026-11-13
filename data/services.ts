// ============================================================
// SERVICES DATA
// Edit descriptions, add/remove services as needed
// ============================================================

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  highlights: string[];
  imageQuery: string; // Unsplash search query for placeholder imagery
}

export const services: Service[] = [
  {
    id: 'ooh-advertising',
    title: 'Outdoor Advertising (OOH)',
    shortTitle: 'OOH Advertising',
    category: 'Out-of-Home',
    description:
      'Command attention with large-format outdoor advertising that places your brand at the heart of high-footfall locations. From hoardings and billboards to transit panels and street furniture, we plan, design and execute impactful OOH campaigns that maximise brand visibility across key markets.',
    highlights: [
      'Strategic site selection',
      'Large-format billboards & hoardings',
      'Transit & street furniture panels',
      'Campaign monitoring',
    ],
    imageQuery: 'billboard outdoor advertising city',
  },
  {
    id: 'dooh-advertising',
    title: 'Digital Out-of-Home (DOOH)',
    shortTitle: 'DOOH Advertising',
    category: 'Out-of-Home',
    description:
      'Leverage the power of dynamic digital screens to deliver contextually relevant, eye-catching campaigns in real time. DOOH allows brands to serve targeted messages across digital screens in malls, airports, transit hubs and high-street locations with the flexibility to update content instantly.',
    highlights: [
      'Digital screen networks',
      'Dynamic content delivery',
      'Real-time campaign updates',
      'Mall, airport & transit screens',
    ],
    imageQuery: 'digital screen advertising urban',
  },
  {
    id: 'cinema-advertising',
    title: 'Cinema On-Screen Advertising',
    shortTitle: 'Cinema Advertising',
    category: 'Screen Media',
    description:
      'Engage captive audiences in a premium, distraction-free environment. Cinema advertising offers unmatched attention and emotional impact, allowing brands to tell compelling stories to highly receptive audiences before the main feature.',
    highlights: [
      'Multiplex & single-screen networks',
      'Premium audience environments',
      'High-impact visuals & sound',
      'Regional & national targeting',
    ],
    imageQuery: 'cinema movie theater screen',
  },
  {
    id: 'television-advertising',
    title: 'Television Advertising',
    shortTitle: 'TV Advertising',
    category: 'Broadcast Media',
    description:
      'Broadcast your brand story to millions of households through strategic television advertising. We identify the right channels, dayparts and formats to maximise reach and frequency for your target audience across national and regional channels.',
    highlights: [
      'National & regional channel planning',
      'Spot buying & negotiation',
      'Commercial production coordination',
      'Viewership analytics',
    ],
    imageQuery: 'television broadcast advertising',
  },
  {
    id: 'print-advertising',
    title: 'Newspaper & Print Advertising',
    shortTitle: 'Print Advertising',
    category: 'Print Media',
    description:
      'Print advertising continues to command credibility and trust. We plan and execute strategic placements in leading national and regional newspapers, magazines and trade publications, ensuring your message reaches the right readers at the right time.',
    highlights: [
      'National & regional newspapers',
      'Magazines & trade publications',
      'Full-page, half-page & inserts',
      'Editorial adjacency planning',
    ],
    imageQuery: 'newspaper print media advertising',
  },
  {
    id: 'btl-marketing',
    title: 'BTL Marketing Activities',
    shortTitle: 'BTL Marketing',
    category: 'Below-the-Line',
    description:
      'Below-the-line marketing creates direct, personal connections between brands and their audiences. From in-store promotions and experiential activations to direct mailers and point-of-sale displays, our BTL solutions drive engagement and conversion at the moment of decision.',
    highlights: [
      'In-store & retail promotions',
      'Experiential activations',
      'Point-of-sale displays',
      'Direct marketing campaigns',
    ],
    imageQuery: 'brand activation experiential marketing',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    category: 'Digital',
    description:
      'Navigate the digital landscape with data-driven strategies that build brand presence, generate leads and drive growth. From social media management and content creation to search engine marketing and performance campaigns, we craft digital strategies tailored to your business objectives.',
    highlights: [
      'Social media management',
      'Search engine marketing (SEM)',
      'Content strategy & creation',
      'Performance campaign management',
    ],
    imageQuery: 'digital marketing social media',
  },
  {
    id: 'event-management',
    title: 'Event Management',
    shortTitle: 'Event Management',
    category: 'Events',
    description:
      'From corporate conferences and product launches to brand activations and exhibitions, we conceptualise and execute events that create memorable brand experiences. Our end-to-end event management service handles everything from concept development to on-site execution.',
    highlights: [
      'Corporate events & conferences',
      'Product launches & activations',
      'Exhibitions & trade shows',
      'End-to-end event production',
    ],
    imageQuery: 'corporate event conference brand',
  },
  {
    id: 'brand-technology',
    title: 'Brand Technology Solutions',
    shortTitle: 'Brand Technology',
    category: 'Technology',
    description:
      'Harness technology to amplify your brand experience. From branded digital platforms and interactive installations to data-driven campaign tools and marketing automation, we bridge creativity and technology to deliver connected brand experiences.',
    highlights: [
      'Branded digital platforms',
      'Interactive installations',
      'Marketing automation',
      'Campaign analytics & reporting',
    ],
    imageQuery: 'brand technology digital innovation',
  },
];

