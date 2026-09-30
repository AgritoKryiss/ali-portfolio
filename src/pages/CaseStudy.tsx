import { EngineeringStory } from './EngineeringStory';

/** Legacy compatibility entry point for future project links. */
export function CaseStudy({ slug }: { slug: string }) {
  return <EngineeringStory slug={slug} />;
}
