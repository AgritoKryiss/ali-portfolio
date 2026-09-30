import type { ContentRelationships } from '../../content/relationships/types';

export interface ServiceSeo { title: string; description: string; canonicalPath: string; ogImage?: string; }
export interface ServiceFaq { question: string; answer: string; }

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  hero: { eyebrow: string; summary: string };
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  industries: string[];
  commonUseCases: string[];
  faqs: ServiceFaq[];
  seo: ServiceSeo;
  cta: { heading: string; description: string; label: string };
  featuredProjects?: string[];
  relatedEngineeringStories?: string[];
  relatedProjects?: string[];
  relatedArticles?: string[];
  relationships: ContentRelationships;
}
