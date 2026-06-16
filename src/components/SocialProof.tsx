export function SocialProof() {
  const stats = [
    { label: 'Years Experience', value: '7+' },
    { label: 'Clients Served', value: '150+' },
    { label: 'Projects Completed', value: '200+' },
    { label: 'Customer Satisfaction', value: '98%' },
  ]

  const testimonials = [
    {
      id: '1',
      text: "Ali's expertise in WordPress transformed our online presence. Highly recommend!",
      author: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      image: '/testimonials/sarah.jpg',
    },
    {
      id: '2',
      text: 'Professional, responsive, and delivered beyond expectations. Great to work with!',
      author: 'Mike Chen',
      role: 'Founder, E-Commerce Store',
      image: '/testimonials/mike.jpg',
    },
    {
      id: '3',
      text: 'The custom solution he built saved us thousands in operational costs.',
      author: 'Emma Wilson',
      role: 'Operations Manager, Agency',
      image: '/testimonials/emma.jpg',
    },
  ]

  const badges = [
    { name: 'WordPress Certified', icon: '⭐' },
    { name: 'WooCommerce Expert', icon: '🏆' },
    { name: 'Trusted Partner', icon: '✓' },
    { name: '5-Star Rated', icon: '⭐' },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Credentials & Certifications
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-semibold text-gray-900 dark:text-white">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            What Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
