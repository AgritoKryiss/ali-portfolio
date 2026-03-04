import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      category: 'WordPress Development',
      skills: [
        { name: 'Theme Development', level: 95 },
        { name: 'Plugin Development', level: 92 },
        { name: 'WooCommerce', level: 90 },
        { name: 'ACF & Custom Post Types', level: 95 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript & jQuery', level: 90 },
        { name: 'Bootstrap Framework', level: 88 },
        { name: 'Responsive Design', level: 95 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'PHP & OOP', level: 92 },
        { name: 'MySQL', level: 85 },
        { name: 'AJAX & REST API', level: 88 },
        { name: 'CRON Jobs & Hooks', level: 90 },
      ],
    },
    {
      category: 'Professional Skills',
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Performance Optimization', level: 90 },
        { name: 'Debugging & Problem Solving', level: 95 },
        { name: 'Client Communication', level: 88 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical skills and tools I use to create amazing WordPress solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}