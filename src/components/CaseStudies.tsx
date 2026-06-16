export function CaseStudies() {
  const caseStudies = [
    {
      id: '1',
      title: 'E-Commerce Platform Migration',
      client: 'Fashion Retailer',
      challenge: 'Legacy WooCommerce site was slow and outdated',
      solution: 'Complete website redesign with performance optimization',
      results: ['45% faster load times', '32% increase in conversions', '80% reduction in bounce rate'],
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      image: '/case-studies/ecommerce.jpg',
    },
    {
      id: '2',
      title: 'Custom Booking System',
      client: 'Travel Agency',
      challenge: 'Needed custom booking functionality not available in standard plugins',
      solution: 'Built custom WordPress plugin with integrated payment gateway',
      results: ['Fully automated booking process', '90% customer satisfaction', 'Saved $5K/month in manual work'],
      technologies: ['WordPress', 'Custom Plugin', 'Stripe API', 'React'],
      image: '/case-studies/booking.jpg',
    },
    {
      id: '3',
      title: 'Multi-Vendor Marketplace',
      client: 'Digital Products Store',
      challenge: 'Scale operations to support multiple vendors',
      solution: 'Implemented Multi-Vendor WooCommerce with commission management',
      results: ['Onboarded 150+ vendors', '$500K+ in transactions', '99.9% uptime'],
      technologies: ['WooCommerce', 'Marketplace Plugin', 'AWS', 'PHP'],
      image: '/case-studies/marketplace.jpg',
    },
  ]

  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Case Studies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real-world projects and measurable results
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{study.client}</div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{study.title}</h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-400">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map(tech => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
