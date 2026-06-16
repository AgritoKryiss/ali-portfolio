import { ArrowRight } from 'lucide-react'
import { useBlog } from '../contexts/BlogContext'

export function Blog() {
  const { posts } = useBlog()
  const categories = [...new Set(posts.map(post => post.category))]

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog & Insights</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            WordPress tips, tutorials, and industry insights
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map(post => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition group"
            >
              <div className="overflow-hidden bg-gray-200 dark:bg-gray-700 h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime} min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <a href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/blog"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  )
}
