import { getService } from '../features/services/data';
import { ServicePage } from '../features/services/components/ServicePage';

export function Service({ slug }: { slug: string }) {
  const service = getService(slug);
  if (service) return <ServicePage service={service} />;
  return <main className="min-h-screen bg-slate-50 px-4 py-24"><div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-sm"><h1 className="text-3xl font-bold text-slate-900">Service not found</h1><a href="/#services" className="mt-7 inline-flex font-semibold text-blue-700 focus-ring">Back to services</a></div></main>;
}
