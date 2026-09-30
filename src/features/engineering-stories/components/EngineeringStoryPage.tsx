import type { EngineeringStory } from '../types';
import { useStoryMetadata } from '../useStoryMetadata';
import { useRelationships } from '../../../content/relationships/useRelationships';
import { RelatedContent } from './RelatedContent';
import { ScreenshotGallery } from './ScreenshotGallery';
import { StoryHero } from './StoryHero';
import { StoryNavigation, type StoryNavItem } from './StoryNavigation';
import { BulletList, ChallengeSolutions, DecisionLog, Diagram, FeatureGrid, Integrations, ProjectSnapshot, ResultsOutcomes, StorySection, TechnicalProfile, WorkflowDiagram } from './StorySections';

const sectionDefinitions: Array<{ id: string; label: string; available: (story: EngineeringStory) => boolean }> = [
  { id: 'overview', label: 'Overview', available: (story) => Boolean(story.overview) },
  { id: 'context', label: 'Business Context', available: (story) => Boolean(story.businessContext) },
  { id: 'responsibilities', label: 'Responsibilities', available: (story) => Boolean(story.responsibilities?.length) },
  { id: 'technical-profile', label: 'Technical Profile', available: (story) => Boolean(story.technologies && Object.keys(story.technologies).length) },
  { id: 'architecture', label: 'Architecture', available: (story) => Boolean(story.architecture) },
  { id: 'challenges', label: 'Challenges & Solutions', available: (story) => Boolean(story.challengeSolutions?.length) },
  { id: 'decisions', label: 'Decision Log', available: (story) => Boolean(story.decisions?.length) },
  { id: 'features', label: 'Key Features', available: (story) => Boolean(story.features?.length) },
  { id: 'integrations', label: 'Integrations', available: (story) => Boolean(story.integrations?.length) },
  { id: 'ux-performance', label: 'UX & Performance', available: (story) => Boolean(story.uxPerformance?.length) },
  { id: 'results', label: 'Results', available: (story) => Boolean(story.outcomes?.some((outcome) => outcome.verified)) },
  { id: 'lessons', label: 'Lessons Learned', available: (story) => Boolean(story.lessons?.length) },
];

export function EngineeringStoryPage({ story }: { story: EngineeringStory }) {
  useStoryMetadata(story);
  const relationships = useRelationships(story.relationships);
  const navigation: StoryNavItem[] = sectionDefinitions.filter((section) => section.available(story)).map(({ id, label }) => ({ id, label }));
  return <main className="min-h-screen bg-white"><a href="#story-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow">Skip to story content</a><StoryHero story={story} /><div id="story-content" className="container mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[13rem_minmax(0,46rem)] lg:px-8 lg:py-20"><aside><StoryNavigation items={navigation} /></aside><article className="space-y-16"><ProjectSnapshot facts={story.facts} />{story.confidentialNotice && <p className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">{story.confidentialNotice}</p>}{story.overview && <StorySection id="overview" title="Project Overview"><p>{story.overview}</p></StorySection>}{story.businessContext && <StorySection id="context" title="Business Context"><p>{story.businessContext}</p></StorySection>}{story.responsibilities?.length && <StorySection id="responsibilities" title="My Responsibilities"><BulletList items={story.responsibilities} /></StorySection>}{story.technologies && <StorySection id="technical-profile" title="Technical Profile"><TechnicalProfile technologies={story.technologies} /></StorySection>}{story.architecture && <StorySection id="architecture" title="Architecture Overview"><p>{story.architecture.summary}</p><WorkflowDiagram steps={story.architecture.workflow} /><Diagram diagram={story.architecture.diagram} /></StorySection>}{story.challengeSolutions?.length && <StorySection id="challenges" title="Engineering Challenges & Solutions"><ChallengeSolutions items={story.challengeSolutions} /></StorySection>}{story.decisions?.length && <StorySection id="decisions" title="Decision Log"><DecisionLog items={story.decisions} /></StorySection>}{story.features?.length && <StorySection id="features" title="Key Features"><FeatureGrid items={story.features} /></StorySection>}{story.integrations?.length && <StorySection id="integrations" title="Integrations"><Integrations items={story.integrations} /></StorySection>}{story.uxPerformance?.length && <StorySection id="ux-performance" title="UX & Performance"><BulletList items={story.uxPerformance} /></StorySection>}{story.workflowHighlight && <StorySection id="workflow" title={story.workflowHighlight.title}><p>{story.workflowHighlight.description}</p><Diagram diagram={story.workflowHighlight.diagram} /></StorySection>}{story.gallery?.length && <StorySection id="gallery" title="Platform Views"><ScreenshotGallery images={story.gallery} /></StorySection>}{story.outcomes?.some((outcome) => outcome.verified) && <StorySection id="results" title="Results & Outcomes"><ResultsOutcomes items={story.outcomes} /></StorySection>}{story.lessons?.length && <StorySection id="lessons" title="Lessons Learned"><BulletList items={story.lessons} /></StorySection>}<div className="space-y-12 border-t border-slate-200 pt-14"><RelatedContent relationships={relationships} /></div>{story.cta && <section className="rounded-2xl bg-slate-900 p-8 text-white sm:p-10"><h2 className="text-2xl font-bold">{story.cta.heading}</h2><p className="mt-3 max-w-2xl text-slate-300">{story.cta.description}</p><a href={story.cta.href} className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 focus-ring">{story.cta.label}</a></section>}</article></div></main>;
}
