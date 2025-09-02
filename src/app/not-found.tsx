import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          {/* 404 Illustration */}
          <div className="mx-auto w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl font-bold text-primary-600">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h2>
          
          <div className="grid grid-cols-1 gap-3">
            <Link
              href="/calculator/jee-main"
              className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              JEE Main Rank Calculator
            </Link>
            <Link
              href="/calculator/neet"
              className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              NEET Rank Calculator
            </Link>
            <Link
              href="/calculator/cat"
              className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              CAT Rank Calculator
            </Link>
            <Link
              href="/contact"
              className="text-sm text-primary-600 hover:text-primary-700 hover:underline"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <div className="flex items-center justify-center text-gray-600 mb-2">
            <Search className="h-5 w-5 mr-2" />
            <span className="text-sm">Looking for something specific?</span>
          </div>
          <p className="text-xs text-gray-500">
            Try using our homepage navigation or contact our support team for assistance.
          </p>
        </div>

        {/* Error Code */}
        <div className="mt-6">
          <p className="text-xs text-gray-400">
            Error Code: 404 - Page Not Found
          </p>
        </div>
      </div>
    </div>
  )
}
