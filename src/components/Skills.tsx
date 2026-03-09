import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'WordPress Ecosystem',
    skills: ['WordPress', 'WooCommerce', 'Advanced Custom Fields (ACF)', 'Custom Post Types', 'Custom Plugins', 'WPML', 'Multisite'],
    color: 'blue',
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'HTML5', 'CSS3', 'Bootstrap'],
    color: 'purple',
  },
  {
    title: 'Backend Development',
    skills: ['PHP', 'MySQL', 'REST APIs', 'WordPress REST API', 'AJAX', 'CRON Jobs', 'Webhooks'],
    color: 'amber',
  },
  {
    title: 'Performance & Security',
    skills: ['Core Web Vitals', 'Caching Optimization', 'Performance Tuning', 'Security Hardening', 'Debugging', 'Code Review', 'SEO'],
    color: 'green',
  },
];

const tools = [
  'WordPress Admin', 'WooCommerce', 'ACF PRO', 'WPML', 'Elementor', 'Divi', 
  'Yoast SEO', 'Rank Math', 'WP Rocket', 'LiteSpeed Cache', 'Git', 'GitHub',
  'VS Code', 'phpMyAdmin', 'Vercel', 'Netlify', 'cPanel', 'WP-CLI'
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading mx-auto">
            Technical skills and tools I use to build robust WordPress solutions
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 lg:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  category.color === 'blue' ? 'bg-blue-100' :
                  category.color === 'purple' ? 'bg-purple-100' :
                  category.color === 'amber' ? 'bg-amber-100' :
                  'bg-green-100'
                }`}>
                  <span className={`text-lg ${
                    category.color === 'blue' ? 'text-blue-600' :
                    category.color === 'purple' ? 'text-purple-600' :
                    category.color === 'amber' ? 'text-amber-600' :
                    'text-green-600'
                  }`}>
                    {category.color === 'blue' && '⚙️'}
                    {category.color === 'purple' && '🎨'}
                    {category.color === 'amber' && '🔧'}
                    {category.color === 'green' && '⚡'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                      category.color === 'blue' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                      category.color === 'purple' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
                      category.color === 'amber' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                      'bg-green-50 text-green-700 border border-green-100'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Tools & Technologies</h3>
            <p className="text-slate-400">Development tools and platforms I work with daily</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="px-4 py-2 bg-slate-700/50 text-slate-200 rounded-lg text-sm font-medium border border-slate-600/50 hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { value: '7+', label: 'Years Experience' },
            { value: '30+', label: 'Projects Completed' },
            { value: '15+', label: 'Industries Served' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

