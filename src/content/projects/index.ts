import type { Project } from './types';

export type { Project, ProjectCategory } from './types';

/**
 * Restored from the original portfolio catalogue. Industry categories are used
 * for navigation; technologies remain card metadata. Empty values are fields
 * the original catalogue did not provide and must be verified later.
 */
export const projects: Project[] = [
  {
    id: 'lafeber-company', title: 'Lafeber Company', client: '',
    description: 'Large-scale WordPress multisite ecosystem supporting veterinary education, e-commerce, and animal nutrition platforms with custom themes and plugins.',
    technologies: ['WordPress', 'WooCommerce', 'ACF', 'Custom Post Types', 'Multisite'], image: 'Lafeber.webp', liveUrl: 'https://lafeber.com/', role: 'Senior WordPress Developer',
    category: 'veterinary-animal-health', featured: true, status: '', highlights: [], hasCaseStudy: true,
  },
  {
    id: 'premier-consultancy', title: 'Premier Consultancy', client: '',
    description: 'Corporate immigration consultancy platform helping global investors obtain residency and citizenship programs through investment.',
    technologies: ['WordPress', 'Custom Theme', 'Consulting', 'Financial Services'], image: 'premierconsultancy.webp', liveUrl: 'https://premierconsultancy.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: true, status: '', highlights: [], hasCaseStudy: true,
  },
  {
    id: 'premier-consultancy-thailand', title: 'Premier Consultancy Thailand', client: '',
    description: 'Localized platform targeting the Thai market and international investors with multilingual support.',
    technologies: ['WordPress', 'Multilingual', 'Custom Theme', 'WPML'], image: 'premierconsultancy-co-th.webp', liveUrl: 'https://premierconsultancy.co.th/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'emeraid-veterinary', title: 'Emeraid Veterinary', client: '',
    description: 'Veterinary nutrition platform delivering specialized recovery formulas for exotic animals with B2B portal.',
    technologies: ['WordPress', 'WooCommerce', 'B2B', 'Healthcare'], image: 'emeraid.webp', liveUrl: 'https://emeraid.com/', role: 'Senior WordPress Developer',
    category: 'veterinary-animal-health', featured: true, status: '', highlights: [], hasCaseStudy: true,
  },
  {
    id: 'premier-travelogue', title: 'Premier Travelogue', client: '',
    description: 'Content platform focused on global investment destinations and lifestyle migration.',
    technologies: ['WordPress', 'Custom Theme', 'Travel', 'Content'], image: 'premiertravelogue.webp', liveUrl: 'https://premiertravelogue.com/', role: 'Senior WordPress Developer',
    category: 'travel-immigration', featured: false, status: '', highlights: [],
  },
  {
    id: 'dynamic-capital-funding', title: 'Dynamic Capital Funding', client: '',
    description: 'Financial services platform providing funding solutions for businesses with application portal.',
    technologies: ['WordPress', 'Fintech', 'Custom Portal', 'Lead Generation'], image: 'funding-dynamiccap.webp', liveUrl: 'https://funding.dynamiccap.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: true, status: '', highlights: [], hasCaseStudy: true,
  },
  {
    id: 'tippitoes-dance', title: 'Tippitoes Dance', client: '',
    description: 'Franchise dance education platform serving multiple locations with class scheduling and registration.',
    technologies: ['WordPress', 'Booking System', 'Franchise', 'Education'], image: 'tippitoesdance.webp', liveUrl: 'https://www.tippitoesdance.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'essential-data-corporation', title: 'Essential Data Corporation', client: '',
    description: 'Nationwide technical writing and documentation services with 40+ years of expertise.',
    technologies: ['WordPress', 'Custom Theme', 'B2B', 'Professional Services'], image: 'essentialdata.webp', liveUrl: 'https://essentialdata.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'the-salisbury-center', title: 'The Salisbury Center', client: '',
    description: 'Premier event venue hosting comedy shows, MMA events, and live performances.',
    technologies: ['WordPress', 'Events', 'Venue', 'Ticketing'], image: 'thesalisburycenter.webp', liveUrl: 'https://thesalisburycenter.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'eagle-rigging-transport', title: 'Eagle Rigging & Transport', client: '',
    description: 'Industrial machinery moving and heavy rigging services with quote request system.',
    technologies: ['WordPress', 'Industrial', 'Custom Theme', 'Lead Generation'], image: 'eaglerigging.webp', liveUrl: 'https://eaglerigging.com/', role: 'Senior WordPress Developer',
    category: 'industrial-manufacturing', featured: false, status: '', highlights: [],
  },
  {
    id: 'iron-fire-coffee', title: 'Iron & Fire Coffee', client: '',
    description: 'Award-winning specialty coffee roaster with e-commerce and subscription services.',
    technologies: ['WordPress', 'WooCommerce', 'Subscription', 'E-commerce'], image: 'ironandfire.webp', liveUrl: 'https://ironandfire.co.uk/', role: 'Senior WordPress Developer',
    category: 'ecommerce-retail', featured: false, status: '', highlights: [],
  },
  {
    id: 'trinity-credit', title: 'Trinity Credit', client: '',
    description: 'Debt relief and financial counseling services with consultation booking.',
    technologies: ['WordPress', 'Financial Services', 'Lead Generation', 'Booking'], image: 'trinitycredit-org.webp', liveUrl: 'https://trinitycredit.org/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'passarella-associates', title: 'Passarella & Associates', client: '',
    description: 'Environmental consulting firm specializing in ecological assessments and permitting.',
    technologies: ['WordPress', 'Environmental', 'Consulting', 'Custom Theme'], image: 'passarella.webp', liveUrl: 'https://passarella.net/', role: 'Senior WordPress Developer',
    category: 'home-services-environmental-health', featured: false, status: '', highlights: [],
  },
  {
    id: 'crisp-regional-hospital', title: 'Crisp Regional Hospital', client: '',
    description: 'Full-service hospital with patient portal, physician directory, and online bill pay.',
    technologies: ['WordPress', 'Healthcare', 'Patient Portal', 'Custom Theme'], image: 'crispregional-org.webp', liveUrl: 'https://crispregional.org/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'amida-care', title: 'Amida Care', client: '',
    description: "New York's largest Special Needs Plan providing health coverage with expert HIV care.",
    technologies: ['WordPress', 'Healthcare', 'Insurance', 'Member Portal'], image: 'amidacareny-org.webp', liveUrl: 'https://www.amidacareny.org/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'arc-group', title: 'ARC Group', client: '',
    description: 'American Recruiting & Consulting Group with 40+ years experience in recruitment.',
    technologies: ['WordPress', 'Recruitment', 'Job Board', 'Custom Portal'], image: 'arcgonline.webp', liveUrl: 'https://www.arcgonline.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'meridian-integration', title: 'Meridian Integration', client: '',
    description: 'Oracle Energy and Water implementation partner for utility companies.',
    technologies: ['WordPress', 'Enterprise', 'Technology', 'B2B'], image: 'meridian-integration.webp', liveUrl: 'https://www.meridian-integration.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'health-source-acupuncture', title: 'Health Source Acupuncture', client: '',
    description: 'Acupuncture and integrative medicine clinic with appointment booking.',
    technologies: ['WordPress', 'Healthcare', 'Booking System', 'Blog'], image: 'healthsourceacupuncture.webp', liveUrl: 'https://www.healthsourceacupuncture.com/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'nerve-health-institute', title: 'Nerve Health Institute', client: '',
    description: 'Functional medicine clinic specializing in nerve health and chronic pain.',
    technologies: ['WordPress', 'Healthcare', 'Functional Medicine', 'Custom Theme'], image: 'nervehealth.webp', liveUrl: 'https://nervehealth.com/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'dr-jason-tripp', title: 'Dr. Jason Tripp', client: '',
    description: 'Chronic pain and illness specialist with neurologic, metabolic healing approaches.',
    technologies: ['WordPress', 'Healthcare', 'Functional Medicine', 'Custom Theme'], image: 'drjasontripp.webp', liveUrl: 'https://www.drjasontripp.com/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'chiro-revival', title: 'Chiro Revival', client: '',
    description: 'Holistic chiropractic and wellness center with comprehensive patient care.',
    technologies: ['WordPress', 'Healthcare', 'Chiropractic', 'Lead Generation'], image: 'chirorevival.webp', liveUrl: 'https://chirorevival.com/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'fusynth', title: 'Fusynth', client: '',
    description: 'Strategic business growth partner with marketing and web development services.',
    technologies: ['WordPress', 'Agency', 'Marketing', 'Portfolio'], image: 'fusynth.webp', liveUrl: 'https://fusynth.com/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'shad-rentals', title: 'Shad Rentals', client: '',
    description: 'Australian car rental and rent-to-own service for rideshare drivers.',
    technologies: ['WordPress', 'Automotive', 'Rental', 'Booking'], image: 'shadrentals-au.webp', liveUrl: 'https://shadrentals.com.au/', role: 'Senior WordPress Developer',
    category: 'corporate-professional-services', featured: false, status: '', highlights: [],
  },
  {
    id: 'space-print-australia', title: 'Space Print Australia', client: '',
    description: "Australia's #1 online printing service with next-day dispatch.",
    technologies: ['WordPress', 'E-commerce', 'Printing', 'B2B'], image: 'spaceprint-au.webp', liveUrl: 'https://www.spaceprint.com.au/', role: 'Senior WordPress Developer',
    category: 'ecommerce-retail', featured: false, status: '', highlights: [],
  },
  {
    id: 'heritage-signs-fl', title: 'Heritage Signs FL', client: '',
    description: 'Full-service custom sign company serving North Florida since 2007.',
    technologies: ['WordPress', 'Local Business', 'Portfolio', 'Service'], image: 'heritagesignsfl.webp', liveUrl: 'https://www.heritagesignsfl.com/', role: 'Senior WordPress Developer',
    category: 'industrial-manufacturing', featured: false, status: '', highlights: [],
  },
  {
    id: 'iheartdogs', title: 'iHeartDogs', client: '',
    description: 'Dog rescue organization with mission-driven e-commerce. Every purchase funds food donations.',
    technologies: ['WooCommerce', 'Nonprofit', 'Social Impact', 'E-commerce'], image: 'iheartdogs.webp', liveUrl: 'https://iheartdogs.com/', role: 'Senior WordPress Developer',
    category: 'veterinary-animal-health', featured: false, status: '', highlights: [],
  },
  {
    id: 'iheartcats', title: 'iHeartCats', client: '',
    description: 'Cat rescue and advocacy platform with pet food donations and flight rescue programs.',
    technologies: ['WooCommerce', 'Nonprofit', 'Pet Rescue', 'Community'], image: 'iheartcats.webp', liveUrl: 'https://iheartcats.com/', role: 'Senior WordPress Developer',
    category: 'veterinary-animal-health', featured: false, status: '', highlights: [],
  },
  {
    id: 'cannanine', title: 'Cannanine', client: '',
    description: 'Organic hemp CBD oil products for dogs and cats with subscription options.',
    technologies: ['WooCommerce', 'Pet Health', 'Subscription', 'E-commerce'], image: 'cannanine.webp', liveUrl: 'https://cannanine.com/', role: 'Senior WordPress Developer',
    category: 'veterinary-animal-health', featured: false, status: '', highlights: [],
  },
  {
    id: 'sunshine4health', title: 'Sunshine4Health', client: '',
    description: "Nature's Sunshine Products distributor with wellness education and consultations.",
    technologies: ['WooCommerce', 'Health & Wellness', 'MLM', 'E-commerce'], image: 'sunshine4health.webp', liveUrl: 'https://sunshine4health.com/', role: 'Senior WordPress Developer',
    category: 'ecommerce-retail', featured: false, status: '', highlights: [],
  },
  {
    id: 'whitney-jordan-naturals', title: 'Whitney Jordan Naturals', client: '',
    description: 'Premium air-dried fruit snacks with subscription boxes and wholesale portal.',
    technologies: ['Shopify', 'E-commerce', 'Subscription', 'Food & Beverage'], image: 'whitneyjordan.webp', liveUrl: 'https://whitneyjordan.net/', role: 'Senior WordPress Developer',
    category: 'ecommerce-retail', featured: false, status: '', highlights: [],
  },
  {
    id: 'audae-club', title: 'Audae Club', client: '',
    description: 'Luxury dress rental platform offering secondhand designer gowns.',
    technologies: ['Shopify', 'Rental', 'Fashion', 'Luxury'], image: 'audaeclub.webp', liveUrl: 'https://audaeclub.com/', role: 'Senior WordPress Developer',
    category: 'ecommerce-retail', featured: false, status: '', highlights: [],
  },
  {
    id: 'the-hero-company', title: 'The Hero Company', client: '',
    description: 'Patriotic jewelry brand that donates 20% of proceeds to fund service dogs for veterans.',
    technologies: ['Shopify', 'Jewelry', 'Social Impact', 'Veterans'], image: 'theherocompany.webp', liveUrl: 'https://theherocompany.co/', role: 'Senior WordPress Developer',
    category: 'ecommerce-retail', featured: false, status: '', highlights: [],
  },
  {
    id: 'stra-worldwide', title: 'STRĀ Worldwide', client: '',
    description: 'Innovative pet feeding solutions that fund street feeders globally.',
    technologies: ['Shopify', 'Pet Products', 'Social Impact', 'Innovation'], image: 'straworldwide.webp', liveUrl: 'https://straworldwide.com/', role: 'Senior WordPress Developer',
    category: 'veterinary-animal-health', featured: false, status: '', highlights: [],
  },
  {
    id: 'live-in-alignment', title: 'Live in Alignment', client: '',
    description: 'Functional medicine clinic specializing in Energy Recharge System therapies.',
    technologies: ['Webflow', 'Healthcare', 'Functional Medicine', 'Animations'], image: 'liveinalignment-org.webp', liveUrl: 'https://www.liveinalignment.org/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'neurolife-healing', title: 'NeuroLife Healing', client: '',
    description: 'TMS and neurofeedback therapy center treating depression and anxiety.',
    technologies: ['Webflow', 'Healthcare', 'Mental Health', 'Modern Design'], image: 'neurolifehealing.webp', liveUrl: 'https://www.neurolifehealing.com/', role: 'Senior WordPress Developer',
    category: 'healthcare-medical', featured: false, status: '', highlights: [],
  },
  {
    id: 'homecleanse-funnel', title: 'HomeCleanse Funnel', client: 'HomeCleanse',
    description: 'WordPress multi-step consultation funnel with Gravity Forms, HubSpot integration, Partial Entries, and custom PHP hooks.',
    technologies: ['WordPress', 'Gravity Forms', 'HubSpot', 'PHP'],
    image: 'HomeCleanse.webp', liveUrl: '', role: '', category: 'home-services-environmental-health', featured: true, status: '', highlights: [], hasCaseStudy: true,
    overview: 'A WordPress consultation funnel implemented as a multi-step user experience with Gravity Forms, HubSpot integration, Partial Entries, and custom PHP hooks.',
    responsibilities: ['Frontend implementation', 'Gravity Forms implementation', 'HubSpot integration', 'Custom PHP hooks', 'Performance optimization', 'User experience improvements'],
    solutions: ['Multi-step consultation funnel', 'Gravity Forms Partial Entries', 'HubSpot integration', 'Custom PHP hooks'],
  },
];

/** Featured projects are references to the canonical records above, never duplicates. */
export const featuredProjects = projects.filter((project) => project.featured);
