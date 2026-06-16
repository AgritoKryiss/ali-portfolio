import { Mail } from 'lucide-react'
import { useState } from 'react'
import { trackEvent } from '../utils/analytics'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Replace with your newsletter API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for subscribing!')
        setEmail('')
        trackEvent('newsletter_signup', { email })
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again.')
    }

    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  return (
    <section className="bg-blue-600 dark:bg-blue-900 py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-4">
          <Mail className="text-white" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Stay Updated</h2>
        <p className="text-blue-100 mb-8">
          Get the latest WordPress tips and insights delivered to your inbox
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${
              status === 'success' ? 'text-green-200' : 'text-red-200'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
