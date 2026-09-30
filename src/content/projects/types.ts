export type ProjectCategory =
  | 'healthcare-medical'
  | 'veterinary-animal-health'
  | 'ecommerce-retail'
  | 'corporate-professional-services'
  | 'industrial-manufacturing'
  | 'travel-immigration'
  | 'home-services-environmental-health';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  client: string;
  description: string;
  /** Technologies / tags displayed on the card */
  technologies: string[];
  /** Key outcomes or highlights (not displayed yet — reserved for future use) */
  highlights: string[];
  /** Image filename inside src/assets/projects/ */
  image: string;
  /** Live site URL */
  liveUrl: string;
  /** Role displayed on the card */
  role: string;
  /** Whether to feature on the homepage (reserved for future use) */
  featured: boolean;
  /**
   * Project status. The original portfolio does not provide this field, so
   * restored records intentionally leave it blank until it is verified.
   */
  status: 'live' | 'maintenance' | 'completed' | 'ongoing' | '';
  /** Whether this project has a detailed case study page */
  hasCaseStudy?: boolean;
  /** Optional: detailed case study content (reserved for future use) */
  overview?: string;
  businessProblem?: string;
  technicalChallenges?: string[];
  responsibilities?: string[];
  solutions?: string[];
  architecture?: string;
  results?: string[];
  lessonsLearned?: string[];
  gallery?: string[];
  timeline?: string;
  /** Stable content references for future project-detail experiences. */
  relationships?: ContentRelationships;
}
import type { ContentRelationships } from '../relationships/types';
