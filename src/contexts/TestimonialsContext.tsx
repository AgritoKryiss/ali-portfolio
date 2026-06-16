import React from 'react'

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  text: string
  image: string
  date: string
  rating: number
}

interface TestimonialsContextType {
  testimonials: Testimonial[]
  addTestimonial: (testimonial: Testimonial) => void
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void
  deleteTestimonial: (id: string) => void
}

const TestimonialsContext = React.createContext<TestimonialsContextType | undefined>(undefined)

const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Startup',
    text: "Ali's expertise in WordPress transformed our online presence. Highly recommend!",
    image: '/testimonials/sarah.jpg',
    date: '2026-06-01',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Founder',
    company: 'E-Commerce Store',
    text: 'Professional, responsive, and delivered beyond expectations. Great to work with!',
    image: '/testimonials/mike.jpg',
    date: '2026-05-15',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emma Wilson',
    role: 'Operations Manager',
    company: 'Digital Agency',
    text: 'The custom solution he built saved us thousands in operational costs.',
    image: '/testimonials/emma.jpg',
    date: '2026-05-01',
    rating: 5,
  },
]

export function TestimonialsProvider({ children }: { children: React.ReactNode }) {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>(SAMPLE_TESTIMONIALS)

  const addTestimonial = (testimonial: Testimonial) => {
    setTestimonials([testimonial, ...testimonials])
  }

  const updateTestimonial = (id: string, updatedTestimonial: Partial<Testimonial>) => {
    setTestimonials(
      testimonials.map(testimonial =>
        testimonial.id === id ? { ...testimonial, ...updatedTestimonial } : testimonial,
      ),
    )
  }

  const deleteTestimonial = (id: string) => {
    setTestimonials(testimonials.filter(testimonial => testimonial.id !== id))
  }

  return (
    <TestimonialsContext.Provider
      value={{ testimonials, addTestimonial, updateTestimonial, deleteTestimonial }}
    >
      {children}
    </TestimonialsContext.Provider>
  )
}

export function useTestimonials() {
  const context = React.useContext(TestimonialsContext)
  if (!context) {
    throw new Error('useTestimonials must be used within TestimonialsProvider')
  }
  return context
}
