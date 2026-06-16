import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  type: 'blog' | 'project' | 'service'
  description: string
  link: string
}

const SEARCH_DATA: SearchResult[] = [
  {
    id: '1',
    title: 'Getting Started with WordPress',
    type: 'blog',
    description: 'Learn WordPress fundamentals and best practices',
    link: '/blog/getting-started-wordpress',
  },
  {
    id: '2',
    title: 'Custom Theme Development',
    type: 'service',
    description: 'Build custom WordPress themes from scratch',
    link: '/#services',
  },
  {
    id: '3',
    title: 'Fashion E-Commerce Store',
    type: 'project',
    description: 'High-performance WooCommerce store',
    link: '/#portfolio',
  },
  {
    id: '4',
    title: 'WooCommerce Optimization',
    type: 'blog',
    description: 'Tips and strategies for improving your store',
    link: '/blog/woocommerce-optimization',
  },
]

export function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const lowercaseQuery = query.toLowerCase()
    const filtered = SEARCH_DATA.filter(
      item =>
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.description.toLowerCase().includes(lowercaseQuery),
    )

    setResults(filtered)
  }, [query])

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        title="Press Cmd+K (Mac) or Ctrl+K (Windows) to search"
      >
        <Search size={18} />
        <span className="text-sm">Search...</span>
        <span className="text-xs ml-auto hidden lg:inline">⌘K</span>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-12 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl shadow-lg">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
              <Search size={20} className="text-gray-400" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search blog posts, projects, services..."
                className="flex-1 outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                onClick={() => {
                  setIsOpen(false)
                  setQuery('')
                }}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {results.map(result => (
                    <a
                      key={result.id}
                      href={result.link}
                      onClick={() => {
                        setIsOpen(false)
                        setQuery('')
                      }}
                      className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-start gap-3"
                    >
                      <div className="mt-1">
                        <span className="inline-block text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded">
                          {result.type}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white truncate">
                          {result.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {result.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">Start typing to search...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
