import type { EngineeringStory } from './types';
import homeCleanseScreenshot from '../../assets/projects/HomeCleanse.webp';

/**
 * Flagship stories are intentionally added only when their approved,
 * evidence-backed content is available. The framework is content-driven.
 */
const homeCleanseHero = {
  src: homeCleanseScreenshot,
  alt: 'HomeCleanse consultation funnel screenshot',
  width: 1920,
  height: 11286,
  caption: 'HomeCleanse consultation funnel',
};

export const engineeringStories: EngineeringStory[] = [
  {
    slug: 'homecleanse-consultation-funnel',
    title: 'HomeCleanse Consultation Funnel — Engineering Story',
    seo: {
      title: 'HomeCleanse Consultation Funnel Engineering Story | Ali Haider',
      description: 'A WordPress multi-step consultation funnel using Gravity Forms, HubSpot integration, Partial Entries, and custom PHP hooks.',
      canonicalPath: '/engineering-stories/homecleanse-consultation-funnel',
      ogImage: homeCleanseScreenshot,
    },
    hero: {
      eyebrow: 'Home Services & Environmental Health',
      summary: 'A WordPress multi-step consultation funnel using Gravity Forms, HubSpot integration, Partial Entries, and custom PHP hooks.',
      image: homeCleanseHero,
    },
    facts: [
      { label: 'Industry', value: 'Home Services & Environmental Health' },
      { label: 'Project type', value: 'Consultation funnel' },
      { label: 'Platform', value: 'WordPress' },
      { label: 'Form workflow', value: 'Gravity Forms multi-step flow' },
      { label: 'CRM integration', value: 'HubSpot contact creation after Step 1' },
      { label: 'Services provided', value: 'Frontend implementation, form workflow, integration, custom PHP, performance optimization' },
      { label: 'Related engineering stories', value: 'None published yet' },
    ],
    overview: 'HomeCleanse required a consultation experience built as a multi-step WordPress workflow. The implementation combines Gravity Forms, Partial Entries, HubSpot contact creation after Step 1, and custom PHP hooks to support the approved form and integration behavior.',
    businessContext: 'The workflow needed to collect consultation information across multiple steps while creating a HubSpot contact after the first step. The implementation therefore had to address both the visitor-facing form experience and the handoff from the form workflow to HubSpot.',
    responsibilities: [
      'Frontend implementation',
      'Gravity Forms implementation',
      'HubSpot integration',
      'Custom PHP hooks',
      'Performance optimization',
      'User experience improvements',
    ],
    technologies: {
      Platform: ['WordPress'],
      Forms: ['Gravity Forms', 'Gravity Forms Partial Entries'],
      Integration: ['HubSpot'],
      'Custom development': ['PHP', 'Custom PHP hooks'],
    },
    architecture: {
      summary: 'The workflow is implemented in WordPress with Gravity Forms. Partial Entries support the multi-step experience, while custom PHP hooks support HubSpot contact creation after Step 1. This is a conceptual workflow only and intentionally excludes private configuration and contact data.',
      workflow: [
        { title: 'Visitor', detail: 'Begins the consultation workflow.' },
        { title: 'Step 1', detail: 'Initial Gravity Forms step.' },
        { title: 'Partial Entry', detail: 'Supports the multi-step form workflow.' },
        { title: 'Custom PHP Hook', detail: 'Supports the required workflow behavior.' },
        { title: 'HubSpot Contact', detail: 'Contact creation occurs after Step 1.' },
        { title: 'Remaining Steps', detail: 'Visitor continues through the consultation flow.' },
      ],
    },
    challengeSolutions: [
      {
        title: 'Multi-step consultation workflow',
        challenge: 'The consultation experience required a multi-step form flow and form-state handling rather than a single-step form.',
        solution: 'Implemented the consultation flow with Gravity Forms and Partial Entries.',
      },
      {
        title: 'Early lead capture',
        challenge: 'Initial contact information needed to be created in HubSpot after Step 1, while the visitor continued through the workflow.',
        solution: 'Implemented HubSpot contact creation after Step 1 through the approved form and integration workflow.',
      },
      {
        title: 'Custom workflow behavior',
        challenge: 'The form and integration workflow required custom behavior beyond standard configuration.',
        solution: 'Used custom PHP hooks for the required workflow behavior.',
      },
    ],
    decisions: [
      {
        decision: 'Create the HubSpot contact after Step 1',
        rationale: 'The approved implementation creates the HubSpot contact after the first step of the consultation flow while the visitor can continue through the remaining steps.',
        tradeOff: 'The story documents the timing of contact creation only; private field mapping and configuration are intentionally excluded.',
      },
      {
        decision: 'Use Gravity Forms Partial Entries',
        rationale: 'Partial Entries support the multi-step consultation workflow and its form-state handling.',
      },
      {
        decision: 'Use custom PHP hooks',
        rationale: 'Custom hooks support the required form and integration behavior for the approved workflow.',
        tradeOff: 'Implementation details remain limited to the publishable workflow description.',
      },
    ],
    features: [
      { title: 'Multi-step consultation flow', description: 'A visitor-facing consultation experience delivered across multiple form steps.' },
      { title: 'Partial entry handling', description: 'Gravity Forms Partial Entries support the multi-step workflow and form-state handling.' },
      { title: 'HubSpot contact handoff', description: 'HubSpot contact creation is implemented after Step 1 while the workflow continues.' },
    ],
    integrations: [
      { name: 'Gravity Forms', purpose: 'Supports the multi-step consultation workflow and Partial Entries.' },
      { name: 'HubSpot', purpose: 'Receives contact creation after Step 1 of the consultation flow.' },
    ],
    uxPerformance: [
      'Frontend implementation for the consultation experience.',
      'User experience improvements for the multi-step form flow.',
      'Performance optimization was part of the implementation scope; no performance metric is published.',
    ],
    outcomes: [
      { label: 'Multi-step workflow implemented', detail: 'The consultation funnel is implemented as a Gravity Forms multi-step workflow.', verified: true },
      { label: 'Partial entry support implemented', detail: 'Gravity Forms Partial Entries support the workflow.', verified: true },
      { label: 'HubSpot contact creation implemented', detail: 'HubSpot contact creation occurs after Step 1.', verified: true },
    ],
    lessons: [
      'Multi-step consultation workflows need a deliberate approach to preserving in-progress form state.',
      'Lead-capture timing is an engineering decision: creating a contact after the first step changes how the form workflow and CRM handoff must be coordinated.',
      'Plugin extensibility and custom PHP hooks can support workflow requirements that are not addressed by standard configuration alone.',
      'User experience and maintainability should be considered together when implementing a multi-step WordPress form workflow.',
    ],
    relationships: {
      relatedProjects: [],
      relatedStories: [],
      relatedServices: ['wordpress-development', 'hubspot-integration', 'wordpress-maintenance-support'],
      relatedArticles: [],
      relatedTechnologies: ['wordpress', 'gravity-forms', 'hubspot', 'php'],
      relatedIndustries: ['home-services-environmental-health'],
    },
    cta: {
      heading: 'Need a consultation workflow or WordPress integration?',
      description: 'Discuss a similar project or technical workflow.',
      href: '/#contact',
      label: 'Start a conversation',
    },
  },
];

export const getEngineeringStory = (slug: string) =>
  engineeringStories.find((story) => story.slug === slug);
