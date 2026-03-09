import { Code2, ShoppingCart, Wrench, Search, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Code2,
    title: 'WordPress Development',
    description: 'Custom theme development with pixel-perfect accuracy, responsive layouts, and cross-browser compatibility. Building scalable WordPress solutions from scratch.',
    features: ['Custom Theme Development', 'Child Themes', 'Theme Customization', 'Page Builders'],
    color: 'blue',
  },
  {
    icon: ShoppingCart,
    title: 'WooCommerce Solutions',
    description: 'Full-featured e-commerce stores with custom functionality, payment gateways, and optimized checkout flows that drive conversions.',
    features: ['Store Setup & Configuration', 'Custom Product Types', 'Payment Gateway Integration', 'Subscription Systems'],
    color: 'purple',
  },
  {
    icon: Wrench,
    title: 'Plugin Development',
    description: 'Custom WordPress plugins tailored to specific business needs, reducing reliance on third-party solutions and ensuring maintainability.',
    features: ['Custom Plugin Development', 'Plugin Customization', 'API Integrations', 'Third-party Connections'],
    color: 'amber',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Achieving lightning-fast load times through caching, asset optimization, database cleanup, and Core Web Vitals improvements.',
    features: ['Core Web Vitals', 'Caching Strategies', 'Image Optimization', 'Database Optimization'],
    color: 'green',
  },
  {
    icon: Shield,
    title: 'Website Maintenance',
    description: 'Ongoing maintenance and support to keep your WordPress site secure, updated, and performing optimally.',
    features: ['Security Updates', 'Backup Management', 'Uptime Monitoring', 'Regular Audits'],
    color: 'red',
  },
  {
    icon: Search,
    title: 'Technical SEO',
    description: 'Implementing SEO best practices to improve search visibility, including schema markup, performance optimization, and content structure.',
    features: ['Technical SEO Audit', 'Schema Markup', 'Performance SEO', 'Site Structure'],
    color: 'indigo',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Services</h2>
          <p className="section-subheading mx-auto">
            Comprehensive WordPress solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    service.color === 'blue' ? 'bg-blue-100' :
                    service.color === 'purple' ? 'bg-purple-100' :
                    service.color === 'amber' ? 'bg-amber-100' :
                    service.color === 'green' ? 'bg-green-100' :
                    service.color === 'red' ? 'bg-red-100' :
                    'bg-indigo-100'
                  }`}>
                    <service.icon className={`w-7 h-7 ${
                      service.color === 'blue' ? 'text-blue-600' :
                      service.color === 'purple' ? 'text-purple-600' :
                      service.color === 'amber' ? 'text-amber-600' :
                      service.color === 'green' ? 'text-green-600' :
                      service.color === 'red' ? 'text-red-600' :
                      'text-indigo-600'
                    }`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          service.color === 'blue' ? 'bg-blue-500' :
                          service.color === 'purple' ? 'bg-purple-500' :
                          service.color === 'amber' ? 'bg-amber-500' :
                          service.color === 'green' ? 'bg-green-500' :
                          service.color === 'red' ? 'bg-red-500' :
                          'bg-indigo-500'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how I can help bring your vision to life with a custom WordPress solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-500/30 text-white font-semibold rounded-lg hover:bg-blue-500/40 transition-colors border border-blue-400"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

