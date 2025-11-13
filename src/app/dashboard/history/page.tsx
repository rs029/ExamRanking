'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Clock, FileWarning, Trophy, ArrowUpRight } from 'lucide-react'
import { ExamAttemptHistory, fetchExamHistory } from '@/lib/api'

export default function HistoryPage() {
  const [history, setHistory] = useState<ExamAttemptHistory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setLoading(true)
        const data = await fetchExamHistory()
        setHistory(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load exam history')
      } finally {
        setLoading(false)
      }
    }

    loadHistory()
  }, [])

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-gray-600">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mb-4"></div>
          <p className="text-sm">Fetching your exam attempts...</p>
        </div>
      )
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-5 rounded-lg">
          <div className="flex">
            <FileWarning className="h-5 w-5 text-red-500 mt-0.5 mr-3" />
            <div>
              <p className="font-semibold">Unable to load history</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          </div>
        </div>
      )
    }

    if (history.length === 0) {
      return (
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-10 text-center">
          <Clock className="h-10 w-10 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No exam attempts yet</h3>
          <p className="text-gray-600 mb-6">
            Start by calculating your rank for an exam to see it appear here.
          </p>
          <Link
            href="/exams"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            Browse Exams
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      )
    }

    return (
      <div className="space-y-4">
        {history.map((attempt) => {
          const submittedDate = new Date(attempt.submittedAt).toLocaleString()
          const totalMarks = attempt.exam.totalMarks
          const score = attempt.score ?? 0
          const correct = attempt.correct ?? 0
          const wrong = attempt.wrong ?? 0
          const unattempted =
            attempt.unattempted !== null && attempt.unattempted !== undefined
              ? attempt.unattempted
              : null

          return (
            <div
              key={attempt.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {attempt.exam.name}
                    </h3>
                    {attempt.exam.code && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100">
                        {attempt.exam.code}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Submitted on {submittedDate}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Score</p>
                    <p className="text-lg font-semibold text-primary-600">
                      {score}{typeof totalMarks === 'number' ? ` / ${totalMarks}` : ''}
                    </p>
                  </div>
                  <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-md text-sm font-medium flex items-center">
                    <Trophy className="h-4 w-4 mr-2" />
                    Rank pending
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs uppercase text-gray-500">Correct</p>
                  <p className="text-lg font-semibold text-green-600">{correct}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs uppercase text-gray-500">Incorrect</p>
                  <p className="text-lg font-semibold text-red-500">{wrong}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs uppercase text-gray-500">Attempted</p>
                  <p className="text-lg font-semibold text-gray-900">{correct + wrong}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs uppercase text-gray-500">Unattempted</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {unattempted !== null ? unattempted : 'N/A'}
                  </p>
                </div>
              </div>

              {attempt.url && (
                <div className="mt-4 text-sm">
                  <span className="text-gray-500">Result URL:</span>{' '}
                  <a
                    href={attempt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    View submission
                  </a>
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Exam History</h1>
          <p className="text-gray-600 mt-2">
            Review all your rank calculation attempts and keep track of your progress over time.
          </p>
        </div>

        {renderContent()}
      </div>
    </div>
  )
}

