import type { ResolvedRelationships } from '../../../content/relationships/types';

const labels = {
  relatedProjects: 'Related Projects', relatedStories: 'Related Engineering Stories', relatedServices: 'Related Services', relatedArticles: 'Related Articles', relatedTechnologies: 'Related Technologies', relatedIndustries: 'Related Industries',
} as const;

export function RelatedContent({ relationships }: { relationships: ResolvedRelationships }) {
  return <>{Object.entries(relationships).map(([key, items]) => <section key={key}><h2 className="text-2xl font-bold text-slate-900">{labels[key as keyof typeof labels]}</h2><div className="mt-5 grid gap-3 sm:grid-cols-2">{items.map((item) => <a key={`${item.type}-${item.id}`} href={item.href} className="rounded-xl border border-slate-200 bg-white p-5 font-medium text-blue-700 transition hover:border-blue-200 hover:bg-blue-50 focus-ring">{item.title}</a>)}</div></section>)}</>;
}
