export type ContentType = 'project' | 'story' | 'service' | 'article' | 'technology' | 'industry';

export type RelationshipKey =
  | 'relatedProjects'
  | 'relatedStories'
  | 'relatedServices'
  | 'relatedArticles'
  | 'relatedTechnologies'
  | 'relatedIndustries';

export interface ContentRelationships {
  relatedProjects?: string[];
  relatedStories?: string[];
  relatedServices?: string[];
  relatedArticles?: string[];
  relatedTechnologies?: string[];
  relatedIndustries?: string[];
}

export interface RelatedContentItem {
  id: string;
  type: ContentType;
  title: string;
  href: string;
}

export type ResolvedRelationships = Partial<Record<RelationshipKey, RelatedContentItem[]>>;
