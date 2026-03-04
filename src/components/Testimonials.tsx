import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Premier Consultancy',
      role: 'International Consultancy Firm',
      content: 'Ali has been instrumental in maintaining our multiple production websites. His technical expertise and proactive approach ensure our sites are always running smoothly with minimal downtime.',
      rating: 5,
      avatar: 'PC',
    },
    {
      name: 'EXERTLOGICS Client',
      role: 'E-commerce Business Owner',
      content: 'Working with Ali was exceptional. He converted our complex designs into a pixel-perfect WordPress site and delivered 40% fewer revision requests. His WooCommerce customization saved us thousands.',
      rating: 5,
      avatar: 'EC',
    },
    {
      name: 'Lafeber Company',
      role: 'Product Manager',
      content: 'Ali managed our entire multi-site WordPress ecosystem with custom themes and plugins. His attention to detail and performance optimization improved our site speed dramatically.',
      rating: 5,
      avatar: 'LC',
    },
    {
      name: 'Freelance Client',
      role: 'Small Business Owner',
      content: 'Ali debugged and optimized our WooCommerce store quickly and professionally. He understood our requirements perfectly and delivered solutions that exceeded expectations.',
      rating: 5,
      avatar: 'FC',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}