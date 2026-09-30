import { useEffect } from 'react';
import type { EngineeringStory } from './types';

const STORY_SCHEMA_ID = 'engineering-story-schema';

export function useStoryMetadata(story: EngineeringStory) {
  useEffect(() => {
    const previousTitle = document.title;
    const upsertMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = value;
    };
    document.title = story.seo.title;
    upsertMeta('name', 'description', story.seo.description);
    upsertMeta('property', 'og:title', story.seo.title);
    upsertMeta('property', 'og:description', story.seo.description);
    upsertMeta('property', 'og:url', new URL(story.seo.canonicalPath, window.location.origin).href);
    if (story.seo.ogImage) upsertMeta('property', 'og:image', story.seo.ogImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = new URL(story.seo.canonicalPath, window.location.origin).href;

    const schema = document.createElement('script');
    schema.id = STORY_SCHEMA_ID;
    schema.type = 'application/ld+json';
    schema.text = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'WebPage', name: story.title,
      description: story.seo.description, url: canonical.href,
      breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Portfolio', item: `${window.location.origin}/#projects` },
        { '@type': 'ListItem', position: 2, name: 'Engineering Stories', item: `${window.location.origin}/engineering-stories` },
        { '@type': 'ListItem', position: 3, name: story.title, item: canonical.href },
      ] },
    });
    document.getElementById(STORY_SCHEMA_ID)?.remove();
    document.head.appendChild(schema);
    return () => { document.title = previousTitle; schema.remove(); };
  }, [story]);
}
