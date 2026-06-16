/**
 * Image optimization utilities
 * Handles lazy loading, responsive images, and format conversion
 */

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  lazy?: boolean
  srcSet?: string
  sizes?: string
}

/**
 * Get optimized image URL with quality and size parameters
 * For use with image CDN services
 */
export const getOptimizedImageUrl = (url: string, width: number = 800, quality: number = 80): string => {
  if (!url) return ''

  // For Vercel, Cloudinary, or similar CDN
  // Adjust based on your image hosting service
  if (url.startsWith('http') && !url.includes('?')) {
    return `${url}?w=${width}&q=${quality}`
  }

  return url
}

/**
 * Generate responsive image srcSet for different screen sizes
 */
export const generateSrcSet = (url: string, sizes: number[] = [480, 768, 1024, 1440]): string => {
  return sizes.map(size => `${getOptimizedImageUrl(url, size)} ${size}w`).join(', ')
}

/**
 * Generate sizes attribute for responsive images
 */
export const generateSizes = (): string => {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
}

/**
 * Preload image for better performance
 */
export const preloadImage = (src: string): void => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  }
}

/**
 * Lazy load image with Intersection Observer
 */
export const lazyLoadImage = (img: HTMLImageElement): void => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    img.src = img.dataset.src || ''
    return
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement
        image.src = image.dataset.src || ''
        image.classList.remove('lazy')
        obs.unobserve(image)
      }
    })
  })

  observer.observe(img)
}

/**
 * Get WebP format URL if supported
 */
export const getWebPUrl = (url: string): string => {
  if (url.endsWith('.jpg') || url.endsWith('.jpeg')) {
    return url.replace(/\.(jpg|jpeg)$/i, '.webp')
  }
  return url
}

/**
 * Check if browser supports WebP
 */
export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false

  const canvas = document.createElement('canvas')
  canvas.width = 1
  canvas.height = 1

  try {
    return canvas.toDataURL('image/webp').indexOf('webp') === 5
  } catch {
    return false
  }
}
