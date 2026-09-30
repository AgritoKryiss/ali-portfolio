import { useEffect, useState } from 'react';

export type StoryNavItem = { id: string; label: string };

export function StoryNavigation({ items }: { items: StoryNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-20% 0px -65% 0px' });
    items.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, [items]);
  const links = items.map((item) => <a key={item.id} href={`#${item.id}`} className={`block rounded-md px-3 py-2 text-sm transition-colors focus-ring ${active === item.id ? 'bg-blue-50 font-semibold text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>{item.label}</a>);
  return <><nav aria-label="On this page" className="hidden lg:block sticky top-28">{links}</nav><details className="mb-10 rounded-xl border border-slate-200 bg-white p-4 lg:hidden"><summary className="cursor-pointer font-semibold text-slate-800">On this page</summary><nav aria-label="On this page" className="mt-3 space-y-1">{links}</nav></details></>;
}
