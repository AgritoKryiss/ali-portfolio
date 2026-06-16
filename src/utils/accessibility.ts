/**
 * Accessibility utilities for enhanced WCAG compliance
 */

/**
 * Focus management utility
 */
export const focusElement = (element: HTMLElement | null): void => {
  if (element && typeof element.focus === 'function') {
    element.focus()
  }
}

/**
 * Skip to main content link helper
 */
export const createSkipLink = (): HTMLElement => {
  const link = document.createElement('a')
  link.href = '#main-content'
  link.className =
    'sr-only focus:not-sr-only absolute top-0 left-0 z-50 p-4 bg-blue-600 text-white font-semibold rounded-b-lg focus:outline-none'
  link.textContent = 'Skip to main content'
  return link
}

/**
 * Announce updates to screen readers
 */
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div')
  announcement.setAttribute('role', 'status')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message

  document.body.appendChild(announcement)

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Keyboard navigation handler
 */
export const handleKeyboardNavigation = (
  event: KeyboardEvent,
  callbacks: {
    onArrowUp?: () => void
    onArrowDown?: () => void
    onEnter?: () => void
    onEscape?: () => void
  },
): void => {
  switch (event.key) {
    case 'ArrowUp':
      callbacks.onArrowUp?.()
      break
    case 'ArrowDown':
      callbacks.onArrowDown?.()
      break
    case 'Enter':
      callbacks.onEnter?.()
      break
    case 'Escape':
      callbacks.onEscape?.()
      break
  }
}

/**
 * Create accessible modal overlay
 */
export const createAccessibleModal = (content: string, _onClose: () => void): HTMLElement => {
  const modal = document.createElement('div')
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.setAttribute('aria-labelledby', 'modal-title')
  modal.className =
    'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'

  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 relative" role="document">
      <button 
        aria-label="Close modal" 
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onclick="this.closest('[role=dialog]').remove()"
      >
        ✕
      </button>
      <div id="modal-title">${content}</div>
    </div>
  `

  return modal
}

/**
 * Generate accessible heading ID
 */
export const generateHeadingId = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

/**
 * Test color contrast ratio (WCAG AA compliance)
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g)
    if (!rgb || rgb.length < 3) return 0.5

    const [r, g, b] = rgb.map(x => parseInt(x) / 255)

    const luminance = (value: number): number => {
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
    }

    return 0.2126 * luminance(r) + 0.7152 * luminance(g) + 0.0722 * luminance(b)
  }

  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)

  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)

  return (lighter + 0.05) / (darker + 0.05)
}
