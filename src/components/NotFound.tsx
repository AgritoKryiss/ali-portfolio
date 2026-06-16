import { Link } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="text-9xl font-bold text-blue-600 mb-2">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-lg text-gray-600">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Go Back Home
          </Link>

          <div className="text-sm text-gray-600">
            <p className="mb-4">Here are some helpful links:</p>
            <div className="flex flex-col space-y-2">
              <Link href="/#portfolio" className="text-blue-600 hover:underline">
                View Portfolio
              </Link>
              <Link href="/#contact" className="text-blue-600 hover:underline">
                Contact Me
              </Link>
              <Link href="/#about" className="text-blue-600 hover:underline">
                Learn About Me
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 text-sm">
            Need help? <a href="#contact" className="text-blue-600 hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  )
}
