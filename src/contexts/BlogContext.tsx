import React from 'react'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  category: string
  tags: string[]
  image: string
  author: string
  readTime: number
}

export interface BlogContextType {
  posts: BlogPost[]
  addPost: (post: BlogPost) => void
  updatePost: (id: string, post: Partial<BlogPost>) => void
  deletePost: (id: string) => void
  getPostBySlug: (slug: string) => BlogPost | undefined
  getPostsByCategory: (category: string) => BlogPost[]
}

const BlogContext = React.createContext<BlogContextType | undefined>(undefined)

// Sample blog posts - Replace with API calls in production
const SAMPLE_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with WordPress Development',
    slug: 'getting-started-wordpress-development',
    excerpt: 'Learn the fundamentals of WordPress development and best practices for building custom themes and plugins.',
    content: 'Full content here...',
    date: '2026-06-15',
    category: 'WordPress',
    tags: ['WordPress', 'PHP', 'Development'],
    image: '/blog/wordpress-guide.jpg',
    author: 'Ali Haider',
    readTime: 8,
  },
  {
    id: '2',
    title: 'WooCommerce Optimization Tips',
    slug: 'woocommerce-optimization-tips',
    excerpt: 'Discover proven strategies to optimize your WooCommerce store for better performance and sales.',
    content: 'Full content here...',
    date: '2026-06-10',
    category: 'E-Commerce',
    tags: ['WooCommerce', 'E-Commerce', 'Performance'],
    image: '/blog/woocommerce-tips.jpg',
    author: 'Ali Haider',
    readTime: 6,
  },
  {
    id: '3',
    title: 'Custom Post Types in WordPress',
    slug: 'custom-post-types-wordpress',
    excerpt: 'Master the art of creating and managing custom post types to extend WordPress functionality.',
    content: 'Full content here...',
    date: '2026-06-05',
    category: 'WordPress',
    tags: ['WordPress', 'Custom Post Types', 'Advanced'],
    image: '/blog/custom-post-types.jpg',
    author: 'Ali Haider',
    readTime: 10,
  },
]

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = React.useState<BlogPost[]>(SAMPLE_POSTS)

  const addPost = (post: BlogPost) => {
    setPosts([post, ...posts])
  }

  const updatePost = (id: string, updatedPost: Partial<BlogPost>) => {
    setPosts(posts.map(post => (post.id === id ? { ...post, ...updatedPost } : post)))
  }

  const deletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const getPostBySlug = (slug: string) => {
    return posts.find(post => post.slug === slug)
  }

  const getPostsByCategory = (category: string) => {
    return posts.filter(post => post.category === category)
  }

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost, getPostBySlug, getPostsByCategory }}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlog() {
  const context = React.useContext(BlogContext)
  if (!context) {
    throw new Error('useBlog must be used within BlogProvider')
  }
  return context
}
