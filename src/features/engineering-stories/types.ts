import type { ContentRelationships } from '../../content/relationships/types';

export type StoryImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type StoryDiagram = {
  image: StoryImage;
  description: string;
};

export type ChallengeSolution = {
  title: string;
  challenge: string;
  solution: string;
  tradeOff?: string;
};

export type DecisionLogEntry = { decision: string; rationale: string; alternative?: string; tradeOff?: string };
export type StoryIntegration = { name: string; purpose: string; detail?: string };
export type StoryOutcome = { label: string; detail: string; verified: boolean };
export type WorkflowStep = { title: string; detail?: string };

export interface EngineeringStory {
  slug: string;
  title: string;
  seo: { title: string; description: string; canonicalPath: string; ogImage?: string };
  hero: { eyebrow: string; summary: string; image?: StoryImage; liveUrl?: string };
  facts?: Array<{ label: string; value: string }>;
  overview?: string;
  businessContext?: string;
  responsibilities?: string[];
  technologies?: Record<string, string[]>;
  architecture?: { summary: string; diagram?: StoryDiagram; workflow?: WorkflowStep[] };
  challengeSolutions?: ChallengeSolution[];
  decisions?: DecisionLogEntry[];
  features?: Array<{ title: string; description: string }>;
  integrations?: StoryIntegration[];
  uxPerformance?: string[];
  gallery?: StoryImage[];
  workflowHighlight?: { title: string; description: string; diagram?: StoryDiagram };
  outcomes?: StoryOutcome[];
  lessons?: string[];
  relationships?: ContentRelationships;
  cta?: { heading: string; description: string; href: string; label: string };
  confidentialNotice?: string;
}
