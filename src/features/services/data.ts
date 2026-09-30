import type { Service } from './types';

const service = (id: string, title: string, summary: string, capabilities: string[], technologies: string[]): Service => ({
  id, slug: id, title, shortDescription: summary, description: summary,
  hero: { eyebrow: 'Services', summary }, capabilities,
  deliverables: capabilities, technologies, industries: [], commonUseCases: [], faqs: [],
  seo: { title: `${title} | Ali Haider`, description: summary, canonicalPath: `/services/${id}` },
  cta: { heading: 'Discuss your project', description: 'Start a conversation about your requirements.', label: 'Get in touch' },
  relationships: { relatedTechnologies: technologies.map((technology) => technology.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')) },
});

export const services: Service[] = [
  service('wordpress-development', 'WordPress Development', 'Custom WordPress development for scalable, maintainable business websites.', ['Custom WordPress implementation', 'Content management workflows', 'Business website development'], ['WordPress', 'PHP']),
  service('custom-wordpress-themes', 'Custom WordPress Themes', 'Custom WordPress theme implementation aligned with business and content requirements.', ['Theme implementation', 'Frontend development', 'Responsive layouts'], ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3']),
  service('custom-plugin-development', 'Custom Plugin Development', 'Custom WordPress plugin development and extension work for project-specific functionality.', ['Custom functionality', 'Plugin customization', 'Workflow extensions'], ['WordPress', 'PHP']),
  service('woocommerce-development', 'WooCommerce Development', 'WooCommerce development for product, subscription, and business commerce workflows.', ['Store implementation', 'Commerce workflows', 'WooCommerce customization'], ['WordPress', 'WooCommerce', 'PHP']),
  service('gravity-forms-development', 'Gravity Forms Development', 'Gravity Forms implementation for structured forms and multi-step workflows.', ['Multi-step forms', 'Form workflow implementation', 'Partial Entries'], ['WordPress', 'Gravity Forms', 'PHP']),
  service('hubspot-integration', 'HubSpot Integration', 'WordPress and HubSpot integration for form-to-CRM contact workflows.', ['Contact handoff', 'Form integration', 'Custom workflow behavior'], ['WordPress', 'HubSpot', 'Gravity Forms', 'PHP']),
  service('api-integrations', 'API Integrations', 'Website integration work connecting WordPress with third-party business systems.', ['Third-party integrations', 'Custom workflow behavior', 'API connections'], ['WordPress', 'PHP', 'REST APIs']),
  service('website-performance-optimization', 'Website Performance Optimization', 'Performance optimization work for WordPress websites and user-facing workflows.', ['Performance tuning', 'Debugging', 'Frontend optimization'], ['WordPress', 'PHP', 'JavaScript']),
  service('wordpress-maintenance-support', 'WordPress Maintenance & Support', 'Ongoing WordPress maintenance, debugging, security updates, and technical support.', ['Production maintenance', 'Bug fixes', 'Security updates'], ['WordPress', 'PHP']),
  service('website-migration', 'Website Migration', 'Website migration planning and implementation for WordPress platforms.', ['Migration planning', 'Platform transition support', 'Post-migration verification'], ['WordPress', 'PHP']),
];

export const getService = (slug: string) => services.find((item) => item.slug === slug);
