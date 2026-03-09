
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Premier Consultancy',
    role: 'International Consultancy Firm',
    content: 'Ali has been instrumental in maintaining our multiple production websites. His technical expertise and proactive approach ensure our sites are always running smoothly with minimal downtime. Highly recommended!',
    rating: 5,
    avatar: 'PC',
    company: true,
  },
  {
    name: 'Lafeber Company',
    role: 'Product Manager',
    content: 'Ali managed our entire multi-site WordPress ecosystem with custom themes and plugins. His attention to detail and performance optimization improved our site speed dramatically. Exceptional work!',
    rating: 5,
    avatar: 'LC',
    company: true,
  },
  {
    name: 'E-commerce Business Owner',
    role: 'Client',
    content: 'Working with Ali was exceptional. He converted our complex designs into a pixel-perfect WordPress site and delivered 40% fewer revision requests. His WooCommerce customization saved us thousands.',
    rating: 5,
    avatar: 'EC',
    company: false,
  },
  {
    name: 'Small Business Owner',
    role: 'Freelance Client',
    content: 'Ali debugged and optimized our WooCommerce store quickly and professionally. He understood our requirements perfectly and delivered solutions that exceeded expectations.',
    rating: 5,
    avatar: 'FC',
    company: false,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Client Testimonials</h2>
          <p className="section-subheading mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 lg:p-8">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-blue-200" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-600 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      testimonial.company 
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600' 
                        : 'bg-slate-600'
                    }`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6">Trusted by clients worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['WordPress', 'WooCommerce', 'PHP', 'React'].map((tech) => (
              <span key={tech} className="text-lg font-semibold text-slate-400">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


