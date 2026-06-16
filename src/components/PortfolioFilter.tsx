import { useState } from 'react'

export interface PortfolioProject {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  image: string
  link: string
  featured: boolean
}

const SAMPLE_PROJECTS: PortfolioProject[] = [
  {
    id: '1',
    title: 'Fashion E-Store',
    description: 'High-performance WooCommerce store with custom product filters',
    category: 'E-Commerce',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    image: '/portfolio/fashion.jpg',
    link: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Booking Platform',
    description: 'Custom booking system with payment integration',
    category: 'Custom Development',
    technologies: ['WordPress', 'PHP', 'Stripe'],
    image: '/portfolio/booking.jpg',
    link: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Blog Portal',
    description: 'Multi-author WordPress blog with advanced SEO',
    category: 'WordPress',
    technologies: ['WordPress', 'SEO', 'JavaScript'],
    image: '/portfolio/blog.jpg',
    link: 'https://example.com',
    featured: false,
  },
]

export function PortfolioFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = [...new Set(SAMPLE_PROJECTS.map(p => p.category)), 'All']

  const filteredProjects =
    selectedCategory && selectedCategory !== 'All'
      ? SAMPLE_PROJECTS.filter(p => p.category === selectedCategory)
      : SAMPLE_PROJECTS

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Featured projects and recent work
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
