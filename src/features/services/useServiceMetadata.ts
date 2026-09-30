import { useEffect } from 'react';
import type { Service } from './types';

export function useServiceMetadata(service: Service) {
  useEffect(() => {
    const previousTitle = document.title;
    const upsert = (attribute: 'name' | 'property', key: string, value: string) => { let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`); if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); } element.content = value; };
    document.title = service.seo.title;
    upsert('name', 'description', service.seo.description); upsert('property', 'og:title', service.seo.title); upsert('property', 'og:description', service.seo.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]'); if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); } canonical.href = new URL(service.seo.canonicalPath, window.location.origin).href;
    upsert('property', 'og:url', canonical.href); if (service.seo.ogImage) upsert('property', 'og:image', service.seo.ogImage);
    const schema = document.createElement('script'); schema.id = 'service-schema'; schema.type = 'application/ld+json'; schema.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.seo.description, url: canonical.href, provider: { '@type': 'Person', name: 'Ali Haider' }, breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Services', item: `${window.location.origin}/#services` }, { '@type': 'ListItem', position: 2, name: service.title, item: canonical.href }] } }); document.getElementById(schema.id)?.remove(); document.head.appendChild(schema);
    return () => { document.title = previousTitle; schema.remove(); };
  }, [service]);
}
