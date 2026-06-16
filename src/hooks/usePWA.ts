import { useEffect } from 'react'

/**
 * Hook to register and manage PWA service worker
 */
export function usePWA() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.ts', { scope: '/' })
        .then(registration => {
          console.log('Service Worker registered:', registration)

          // Check for updates periodically
          const checkForUpdates = () => {
            registration.update()
          }

          // Check for updates every hour
          setInterval(checkForUpdates, 60 * 60 * 1000)

          // Handle controller change (new SW activated)
          navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log('New service worker activated')
            // You can prompt user to refresh the page here
          })
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error)
        })

      // Handle new service worker ready
      navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.type === 'INSTALLED' || event.data.type === 'UPDATED') {
          // Show update notification to user
          console.log('Application has been updated. Please refresh the page.')
        }
      })
    }
  }, [])
}

/**
 * Prompt user to install PWA
 */
let deferredPrompt: BeforeInstallPromptEvent | null = null

export function usePWAInstallPrompt() {
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault()
      deferredPrompt = e as BeforeInstallPromptEvent
    })
  }, [])

  const promptInstall = async () => {
    if (!deferredPrompt) {
      return false
    }

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    deferredPrompt = null
    return outcome === 'accepted'
  }

  return { promptInstall, canInstall: deferredPrompt !== null }
}

// Type definition
declare global {
  interface Window {
    BeforeInstallPromptEvent: BeforeInstallPromptEvent
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
  }>
}
