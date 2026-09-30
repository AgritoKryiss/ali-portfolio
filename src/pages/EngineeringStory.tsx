import { getEngineeringStory } from '../features/engineering-stories/data';
import { EngineeringStoryPage } from '../features/engineering-stories/components/EngineeringStoryPage';

export function EngineeringStory({ slug }: { slug: string }) {
  const story = getEngineeringStory(slug);
  if (story) return <EngineeringStoryPage story={story} />;
  return <main className="min-h-screen bg-slate-50 px-4 py-24"><div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm"><p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Engineering Stories</p><h1 className="mt-3 text-3xl font-bold text-slate-900">This story is not published yet.</h1><p className="mt-4 text-slate-600">Approved, evidence-backed project content will appear here when it is ready.</p><a href="/#projects" className="mt-7 inline-flex font-semibold text-blue-700 focus-ring">Back to portfolio</a></div></main>;
}
