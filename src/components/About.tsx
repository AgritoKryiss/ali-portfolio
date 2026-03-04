import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    'Custom WordPress Theme Development',
    'Plugin Development & Customization',
    'WooCommerce E-commerce Solutions',
    'Advanced Custom Fields (ACF) & CPTs',
    'Performance Optimization & Debugging',
    'Team Leadership & Mentoring',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional WordPress experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1722596627369-a743837c7176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjB3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcyNTM3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="WordPress Development"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence Since 2019
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 7 years of experience in WordPress development, I specialize in transforming designs into pixel-perfect, responsive websites while developing custom functionality, debugging complex issues, and optimizing performance for production environments.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I have expertise in custom themes, plugins, PHP, JavaScript/jQuery, AJAX, ACF, CPTs, CRON jobs, and WordPress hooks and filters. Proven ability to lead development teams, mentor junior developers, and deliver reliable, user-friendly, and maintainable solutions that drive business results.
            </p>

            <div className="space-y-4 grid grid-cols-2">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}