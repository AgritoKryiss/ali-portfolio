import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { StoryImage } from '../types';
import { StoryImage as Image } from './StorySections';

export function ScreenshotGallery({ images }: { images?: StoryImage[] }) {
  const [selected, setSelected] = useState<number | null>(null);
  if (!images?.length) return null;
  const close = () => setSelected(null);
  const move = (direction: number) => setSelected((current) => current === null ? null : (current + direction + images.length) % images.length);
  return <><div className="grid gap-4 sm:grid-cols-2">{images.map((image, index) => <button type="button" key={image.src} onClick={() => setSelected(index)} className="group overflow-hidden rounded-xl border border-slate-200 text-left focus-ring"><Image image={image} /><span className="block px-4 py-3 text-sm text-slate-600">{image.caption ?? image.alt}</span></button>)}</div>{selected !== null && <div role="dialog" aria-modal="true" aria-label={images[selected].alt} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4" onKeyDown={(event) => { if (event.key === 'Escape') close(); }}><button type="button" onClick={close} className="absolute right-4 top-4 rounded-full bg-white p-3 text-slate-900 focus-ring" aria-label="Close image viewer"><X /></button><button type="button" onClick={() => move(-1)} className="absolute left-4 rounded-full bg-white p-3 text-slate-900 focus-ring" aria-label="Previous image"><ChevronLeft /></button><figure className="max-h-full max-w-5xl overflow-auto rounded-xl bg-white"><Image image={images[selected]} /><figcaption className="p-4 text-sm text-slate-600">{images[selected].caption ?? images[selected].alt}</figcaption></figure><button type="button" onClick={() => move(1)} className="absolute right-4 rounded-full bg-white p-3 text-slate-900 focus-ring" aria-label="Next image"><ChevronRight /></button></div>}</>;
}
