import { Code2, Palette, ShoppingCart, Wrench, Search, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Services() {
  const services = [
    {
      icon: <Code2 size={40} />,
      title: 'Custom Theme Development',
      description: 'Converting UI/UX designs into fully functional, responsive WordPress websites with pixel-perfect accuracy and cross-browser compatibility.',
    },
    {
      icon: <Palette size={40} />,
      title: 'Full-Stack Development',
      description: 'End-to-end website development using PHP, JavaScript/jQuery, HTML5, CSS3, and modern frameworks like Bootstrap.',
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'WooCommerce Solutions',
      description: 'Building and optimizing e-commerce stores with custom functionality, payment gateways, and checkout flows that improve conversions.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Plugin Development',
      description: 'Creating custom WordPress plugins tailored to specific business needs, reducing reliance on third-party solutions.',
    },
    {
      icon: <Search size={40} />,
      title: 'Website Maintenance',
      description: 'Managing live production websites with continuous availability, performance optimization, and proactive issue resolution.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance Optimization',
      description: 'Implementing caching, asset optimization, and database cleanup to achieve Google PageSpeed scores of 85-95+.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive WordPress solutions to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}