import { Code, Database, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Code, text: 'Custom WordPress Theme Development' },
  { icon: Database, text: 'Plugin Development & Customization' },
  { icon: Zap, text: 'Performance Optimization & Debugging' },
  { icon: Shield, text: 'Production Website Maintenance' },
];

const workHistory = [
  {
    period: '2019 - Present',
    title: 'Senior WordPress Developer',
    company: 'Freelance / Remote',
    description: 'Building and maintaining scalable WordPress platforms for international clients across healthcare, e-commerce, and financial sectors.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mx-auto">
            Crafting robust WordPress solutions that drive business growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] sm:aspect-[4/3] bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                <div className="text-center p-4 sm:p-8">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2">7+</div>
                  <div className="text-blue-100 text-base sm:text-lg">Years of Experience</div>
                </div>
              </div>
              
              {/* Overlay badges */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap gap-2 sm:gap-3">
                <div className="bg-white/95 backdrop-blur-sm px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg flex-1 sm:flex-none text-center">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">WordPress</span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg flex-1 sm:flex-none text-center">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">WooCommerce</span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg flex-1 sm:flex-none text-center">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">PHP</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-xl -z-10 opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-xl -z-10 opacity-20"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Building Robust WordPress Ecosystems
            </h3>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm a Senior WordPress Developer with over seven years of professional 
                experience building scalable WordPress and WooCommerce platforms for 
                international clients.
              </p>
              <p>
                My expertise spans custom theme development, plugin customization, 
                performance optimization, and debugging complex production environments. 
                I've worked extensively with corporate platforms, veterinary nutrition 
                ecosystems, financial services websites, e-commerce platforms, and 
                global consultancy platforms.
              </p>
              <p>
                I specialize in creating maintainable, performant, and secure WordPress 
                solutions that help businesses thrive in the digital landscape.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Work history badge */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">
                  {workHistory[0].period} • {workHistory[0].title}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

