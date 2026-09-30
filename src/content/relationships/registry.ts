import { services as serviceRecords } from '../../features/services/data';
import { projects } from '../projects';
import { engineeringStories } from '../../features/engineering-stories/data';
import type { ContentRelationships, RelatedContentItem, RelationshipKey, ResolvedRelationships } from './types';

export const toContentId = (value: string) => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const industries: RelatedContentItem[] = [
  ['healthcare-medical', 'Healthcare & Medical'],
  ['veterinary-animal-health', 'Veterinary & Animal Health'],
  ['ecommerce-retail', 'E-commerce & Retail'],
  ['corporate-professional-services', 'Corporate & Professional Services'],
  ['industrial-manufacturing', 'Industrial & Manufacturing'],
  ['travel-immigration', 'Travel & Immigration'],
  ['home-services-environmental-health', 'Home Services & Environmental Health'],
].map(([id, title]) => ({ id, title, type: 'industry', href: `/#projects?industry=${id}` }));

const services: RelatedContentItem[] = serviceRecords.map((service) => ({ id: service.id, title: service.title, type: 'service', href: `/services/${service.slug}` }));
const projectItems: RelatedContentItem[] = projects.map((project) => ({ id: project.id, title: project.title, type: 'project', href: '/#projects' }));
const storyItems: RelatedContentItem[] = engineeringStories.map((story) => ({ id: story.slug, title: story.title, type: 'story', href: `/engineering-stories/${story.slug}` }));
const technologyItems: RelatedContentItem[] = [...new Set([...projects.flatMap((project) => project.technologies), ...engineeringStories.flatMap((story) => Object.values(story.technologies ?? {}).flat())])].map((technology) => ({ id: toContentId(technology), title: technology, type: 'technology', href: `/#projects?technology=${toContentId(technology)}` }));
const articleItems: RelatedContentItem[] = [];

const registries: Record<RelationshipKey, Map<string, RelatedContentItem>> = {
  relatedProjects: new Map(projectItems.map((item) => [item.id, item])),
  relatedStories: new Map(storyItems.map((item) => [item.id, item])),
  relatedServices: new Map(services.map((item) => [item.id, item])),
  relatedArticles: new Map(articleItems.map((item) => [item.id, item])),
  relatedTechnologies: new Map(technologyItems.map((item) => [item.id, item])),
  relatedIndustries: new Map(industries.map((item) => [item.id, item])),
};

export function resolveRelationships(relationships?: ContentRelationships): ResolvedRelationships {
  if (!relationships) return {};
  return Object.fromEntries((Object.keys(registries) as RelationshipKey[]).map((key) => [key, (relationships[key] ?? []).map((id) => registries[key].get(id)).filter((item): item is RelatedContentItem => Boolean(item))]).filter(([, items]) => items.length)) as ResolvedRelationships;
}
