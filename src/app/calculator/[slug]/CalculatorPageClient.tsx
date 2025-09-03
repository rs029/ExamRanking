'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import CalculatorForm from '@/components/CalculatorForm'
import ResultsPanel from '@/components/ResultsPanel'
import { generateMockResult, generateMockLeaderboard } from '@/lib/utils'
import { ExamResult } from '@/types/exam'
import examsData from '@/data/exams.json'
import { ArrowLeft, Info } from 'lucide-react'
import Link from 'next/link'

interface CalculatorPageClientProps {
  slug: string
}

export default function CalculatorPageClient({ slug }: CalculatorPageClientProps) {
  const [result, setResult] = useState<ExamResult | null>(null)
  const [leaderboard, setLeaderboard] = useState<any[]>([])
  const [exam, setExam] = useState<any>(null)

  useEffect(() => {
    const foundExam = examsData.find(e => e.slug === slug)
    if (!foundExam) {
      notFound()
    }
    setExam(foundExam)
  }, [slug])

  const handleFormSubmit = async (formData: FormData): Promise<ExamResult> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const mockResult = generateMockResult(slug)
    const mockLeaderboard = generateMockLeaderboard()
    
    setResult(mockResult)
    setLeaderboard(mockLeaderboard)
    
    return mockResult
  }

  if (!exam) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {exam.name} Rank Calculator
          </h1>
          <p className="text-lg text-gray-600 mt-2">{exam.description}</p>
        </div>

        {/* Exam Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-blue-900 mb-1">How it works</h3>
              <p className="text-sm text-blue-800">
                Upload your {exam.name} result document or paste the result URL. Our system will analyze your performance 
                and calculate your rank based on the latest normalization methods and cutoff trends.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <CalculatorForm 
              examName={exam.name}
              onSubmit={handleFormSubmit}
            />

            {/* Exam Details */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Exam Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Category</span>
                  <span className="font-medium text-gray-900">{exam.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Marks</span>
                  <span className="font-medium text-gray-900">{exam.totalMarks}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Subjects</span>
                  <span className="font-medium text-gray-900">{exam.subjects.length}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Subjects Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {exam.subjects.map((subject: string, index: number) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {result ? (
              <ResultsPanel 
                result={result}
                examName={exam.name}
                leaderboard={leaderboard}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Your Results Will Appear Here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fill out the form on the left to calculate your {exam.name} rank and get detailed performance analysis.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">What you&apos;ll get:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Overall rank and category rank</li>
                      <li>• Detailed score breakdown</li>
                      <li>• Performance insights and analysis</li>
                      <li>• Comparison with top scorers</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Supported Input Formats</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Official result URLs from exam conducting bodies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                PDF result documents and scorecards
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Screenshot images (JPG, PNG)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Word documents with result details
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy & Security</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                All uploaded files are processed securely
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                No personal data is stored permanently
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Results are calculated in real-time
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                SSL encrypted data transmission
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
