import { ExternalLink } from 'lucide-react';
import type { EngineeringStory } from '../types';

export function StoryHero({ story }: { story: EngineeringStory }) {
  return <header className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">{story.hero.eyebrow}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">{story.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">{story.hero.summary}</p>
        {story.hero.liveUrl && <a className="mt-7 inline-flex items-center gap-2 font-medium text-blue-700 hover:text-blue-800 focus-ring" href={story.hero.liveUrl} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" />View live site</a>}
        {story.hero.image && <figure className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"><img src={story.hero.image.src} alt={story.hero.image.alt} width={story.hero.image.width} height={story.hero.image.height} loading="eager" className="aspect-video w-full object-cover object-top" />{story.hero.image.caption && <figcaption className="px-5 py-3 text-sm text-slate-500">{story.hero.image.caption}</figcaption>}</figure>}
      </div>
    </div>
  </header>;
}
