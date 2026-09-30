import { CheckCircle2 } from 'lucide-react';
import type { EngineeringStory, StoryDiagram, StoryImage, WorkflowStep } from '../types';

export function StorySection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-28"><h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2><div className="mt-5 text-base leading-8 text-slate-600">{children}</div></section>;
}

export function ProjectSnapshot({ facts }: { facts?: EngineeringStory['facts'] }) {
  if (!facts?.length) return null;
  return <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2">{facts.map((fact) => <div key={fact.label}><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{fact.label}</dt><dd className="mt-1 font-medium text-slate-800">{fact.value}</dd></div>)}</dl>;
}

export function BulletList({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" /><span>{item}</span></li>)}</ul>;
}

export function TechnicalProfile({ technologies }: { technologies?: EngineeringStory['technologies'] }) {
  if (!technologies || !Object.keys(technologies).length) return null;
  return <div className="grid gap-4 sm:grid-cols-2">{Object.entries(technologies).map(([group, values]) => <div key={group} className="rounded-xl bg-slate-50 p-5"><h3 className="font-semibold text-slate-900">{group}</h3><div className="mt-3 flex flex-wrap gap-2">{values.map((value) => <span key={value} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">{value}</span>)}</div></div>)}</div>;
}

export function Diagram({ diagram }: { diagram?: StoryDiagram }) {
  if (!diagram) return null;
  return <figure className="my-7 overflow-hidden rounded-2xl border border-slate-200 bg-white"><StoryImage image={diagram.image} /><figcaption className="border-t border-slate-100 px-5 py-4 text-sm leading-6 text-slate-600">{diagram.description}</figcaption></figure>;
}

export function WorkflowDiagram({ steps }: { steps?: WorkflowStep[] }) {
  if (!steps?.length) return null;
  return <ol aria-label="Conceptual workflow" className="my-7 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex sm:items-stretch sm:space-y-0 sm:overflow-x-auto">
    {steps.map((step, index) => <li key={step.title} className="flex min-w-40 flex-1 items-center gap-3 sm:flex-col sm:items-stretch sm:gap-2"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">{index + 1}</div><div className="flex-1 rounded-xl bg-white p-4 shadow-sm"><h3 className="font-semibold text-slate-900">{step.title}</h3>{step.detail && <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>}</div>{index < steps.length - 1 && <span aria-hidden="true" className="hidden text-2xl text-slate-400 sm:block">→</span>}</li>)}
  </ol>;
}

export function ChallengeSolutions({ items }: { items?: EngineeringStory['challengeSolutions'] }) {
  if (!items?.length) return null;
  return <div className="space-y-8">{items.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-bold text-slate-900">{item.title}</h3><p className="mt-4"><strong className="text-slate-900">Challenge: </strong>{item.challenge}</p><p className="mt-3"><strong className="text-slate-900">Approach: </strong>{item.solution}</p>{item.tradeOff && <p className="mt-3"><strong className="text-slate-900">Consideration: </strong>{item.tradeOff}</p>}</article>)}</div>;
}

export function DecisionLog({ items }: { items?: EngineeringStory['decisions'] }) {
  if (!items?.length) return null;
  return <div className="space-y-4">{items.map((item) => <article key={item.decision} className="border-l-2 border-blue-600 pl-5"><h3 className="font-semibold text-slate-900">{item.decision}</h3><p className="mt-1">{item.rationale}</p>{item.alternative && <p className="mt-1 text-sm text-slate-500">Alternative considered: {item.alternative}</p>}{item.tradeOff && <p className="mt-1 text-sm text-slate-500">Trade-off: {item.tradeOff}</p>}</article>)}</div>;
}

export function FeatureGrid({ items }: { items?: EngineeringStory['features'] }) {
  if (!items?.length) return null;
  return <div className="grid gap-4 sm:grid-cols-2">{items.map((item) => <article key={item.title} className="rounded-xl bg-slate-50 p-5"><h3 className="font-semibold text-slate-900">{item.title}</h3><p className="mt-2 text-sm leading-6">{item.description}</p></article>)}</div>;
}

export function Integrations({ items }: { items?: EngineeringStory['integrations'] }) {
  if (!items?.length) return null;
  return <div className="space-y-4">{items.map((item) => <article key={item.name} className="rounded-xl border border-slate-200 p-5"><h3 className="font-semibold text-slate-900">{item.name}</h3><p className="mt-1">{item.purpose}</p>{item.detail && <p className="mt-2 text-sm text-slate-500">{item.detail}</p>}</article>)}</div>;
}

export function ResultsOutcomes({ items }: { items?: EngineeringStory['outcomes'] }) {
  if (!items?.length) return null;
  return <div className="grid gap-4 sm:grid-cols-2">{items.filter((item) => item.verified).map((item) => <article key={item.label} className="rounded-xl bg-green-50 p-5"><h3 className="font-semibold text-green-900">{item.label}</h3><p className="mt-2 text-green-800">{item.detail}</p></article>)}</div>;
}

export function StoryImage({ image }: { image: StoryImage }) {
  return <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className="h-auto w-full object-cover" />;
}
