/**
 * Hero section content — centralized for easy updates.
 * Edit these values to change the hero text, CTAs, stats, and visual labels.
 */

export const HERO_CONTENT = {
  badge: '✓ Available for Freelance • Agency • Full-Time Opportunities',

  headline: {
    line1: 'Senior WordPress Engineer',
    line2: 'for Businesses & Agencies',
  },

  subheadline:
    "I build custom WordPress websites, WooCommerce stores, and business systems that are fast, scalable, and easy to maintain. Whether you're launching a new project, improving an existing website, or need a reliable long-term development partner, I can help.",

  cta: {
    primary: 'Start Your Project',
    secondary: 'Explore My Work',
  },

  codePreview: {
    url: 'alihaiderweb.com/',
    className: 'WordPressDeveloper',
  },

  floatingCards: [
    { emoji: '⚡', title: 'Performance', subtitle: '95+ Score' },
    { emoji: '🎯', title: '30+', subtitle: 'Projects Delivered' },
  ],
} as const;

export const HERO_STATS = [
  { icon: 'Award', value: '7+', label: 'Years Experience' },
  { icon: 'Users', value: '30+', label: 'Projects Delivered' },
  { icon: 'Globe', value: 'Worldwide', label: 'Clients & Agencies' },
] as const;

