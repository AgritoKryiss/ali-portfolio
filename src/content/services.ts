/**
 * Services section content — centralized for easy updates.
 * Edit these values to change service cards, heading, and bullets.
 */

export const SERVICES_CONTENT = {
  heading: 'Services That Help Businesses Grow',
  subtitle:
    'From custom WordPress websites to scalable WooCommerce stores and long-term technical partnerships.',
  services: [
    {
      icon: 'Code2',
      title: 'Custom WordPress Development',
      description:
        'Fast, scalable WordPress websites built specifically around your business goals instead of generic templates.',
      features: [
        'Custom-built solutions',
        'Clean, maintainable code',
        'Optimized performance',
        'Easy content management',
      ],
      color: 'blue',
    },
    {
      icon: 'ShoppingCart',
      title: 'WooCommerce Solutions',
      description:
        'Launch or improve an online store that is reliable, easy to manage, and built to support long-term growth.',
      features: [
        'Custom checkout flows',
        'Payment integrations',
        'Store optimization',
        'Product management',
      ],
      color: 'purple',
    },
    {
      icon: 'Wrench',
      title: 'Website Redesign',
      description:
        'Transform outdated websites into modern, professional experiences that build trust and improve conversions.',
      features: [
        'Modern UI implementation',
        'Faster loading',
        'Mobile-first experience',
        'Better user experience',
      ],
      color: 'amber',
    },
    {
      icon: 'Zap',
      title: 'Business Integrations',
      description:
        'Connect your website with the tools your business already relies on, reducing manual work and improving efficiency.',
      features: [
        'CRM integrations',
        'API connections',
        'Automation workflows',
        'Third-party services',
      ],
      color: 'green',
    },
    {
      icon: 'Shield',
      title: 'Ongoing WordPress Support',
      description:
        'Reliable maintenance and technical support so your website stays secure, updated, and running smoothly.',
      features: [
        'Security updates',
        'Bug fixes',
        'Performance monitoring',
        'Long-term partnership',
      ],
      color: 'red',
    },
  ],
} as const;

