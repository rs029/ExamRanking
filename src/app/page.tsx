import { Metadata } from 'next'
import ExamCard from '@/components/ExamCard'
import { Calculator, TrendingUp, Users, Award } from 'lucide-react'
import examsData from '@/data/exams.json'

export const metadata: Metadata = {
  title: 'Exam Ranking - Calculate Your Rank for Competitive Exams',
  description: 'Calculate your rank and analyze performance for JEE Main, NEET, CAT, GATE, UPSC CSE, SSC CGL, Bank PO, CLAT and other competitive exams. Get accurate results instantly.',
}

export default function Home() {
  const stats = [
    {
      icon: Calculator,
      title: "8+ Exams",
      description: "Multiple competitive exams supported"
    },
    {
      icon: Users,
      title: "100K+ Users",
      description: "Students trust our calculations"
    },
    {
      icon: TrendingUp,
      title: "99.9% Accuracy",
      description: "Precise rank calculations"
    },
    {
      icon: Award,
      title: "Instant Results",
      description: "Get your rank in seconds"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculate Your <span className="text-primary-200">Exam Rank</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Get accurate rank calculations and performance analysis for all major competitive exams. 
              Upload your results and know where you stand instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#exams"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Choose Your Exam
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exams Grid Section */}
      <section id="exams" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Exam
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our comprehensive list of competitive exams to calculate your rank and analyze your performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {examsData.map((exam) => (
              <ExamCard key={exam.slug} exam={exam} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Exam Ranking?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the most accurate and comprehensive rank calculation service for competitive exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accurate Calculations</h3>
              <p className="text-gray-600">
                Our advanced algorithms ensure precise rank calculations based on the latest exam patterns and normalization methods.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Analysis</h3>
              <p className="text-gray-600">
                Get detailed insights into your performance with subject-wise breakdown, accuracy analysis, and improvement suggestions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multiple Formats</h3>
              <p className="text-gray-600">
                Support for various input formats including result URLs, PDF files, and manual score entry for maximum convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Calculate Your Rank?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who trust Exam Ranking for accurate performance analysis and rank calculations.
          </p>
          <a
            href="#exams"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </>
  )
}
