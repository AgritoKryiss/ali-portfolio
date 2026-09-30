/**
 * Hero section content — centralized for easy updates.
 * Edit these values to change the hero text, CTAs, stats, and visual labels.
 */

export const HERO_CONTENT = {
  badge: '✓ Available Worldwide Remote • Open to Relocation • Freelance',

  headline: {
  line1: 'Senior WordPress & PHP Engineer',
  line2: 'for Businesses & Agencies',
},

  subheadline:
  "I build and maintain custom WordPress and WooCommerce systems, from themes and plugins to integrations, performance optimization, and complex production troubleshooting. I help businesses and agencies ship reliable solutions that are built to last.",

  cta: {
    primary: 'Work With Me',
secondary: 'Explore My Work',
  },

  codePreview: {
    url: 'alihaiderweb.com/',
    className: 'WordPressDeveloper',
  },

  floatingCards: [
    { emoji: '⚡', title: 'Performance', subtitle: 'Core Web Vitals' },
    { emoji: '🎯', title: '30+', subtitle: 'Projects Delivered' },
  ],
} as const;

export const HERO_STATS = [
  { icon: 'Award', value: '7+', label: 'Years Experience' },
  { icon: 'Users', value: '30+', label: 'Projects Delivered' },
  { icon: 'Globe', value: 'Worldwide', label: 'Clients & Agencies' },
] as const;

