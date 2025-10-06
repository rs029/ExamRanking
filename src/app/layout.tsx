import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exam Ranking - Calculate Your Exam Rank & Performance',
  description: 'Calculate your rank and analyze performance for various competitive exams including JEE Main, NEET, CAT, GATE, UPSC CSE, and more. Get accurate results and insights.',
  keywords: 'exam ranking, rank calculator, JEE Main, NEET, CAT, GATE, UPSC, competitive exams, performance analysis',
  authors: [{ name: 'Exam Ranking Team' }],
  creator: 'Exam Ranking',
  publisher: 'Exam Ranking',
  openGraph: {
    title: 'Exam Ranking - Calculate Your Exam Rank & Performance',
    description: 'Calculate your rank and analyze performance for various competitive exams. Get accurate results and insights.',
    url: 'https://examranking.com',
    siteName: 'Exam Ranking',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Exam Ranking - Calculate Your Exam Rank',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exam Ranking - Calculate Your Exam Rank & Performance',
    description: 'Calculate your rank and analyze performance for various competitive exams.',
    images: ['/og-image.jpg'],
    creator: '@examranking',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
