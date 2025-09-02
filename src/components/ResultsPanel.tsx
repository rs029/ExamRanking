'use client'

import { Trophy, Target, TrendingUp, Users, CheckCircle, XCircle, Clock } from 'lucide-react'
import { ExamResult } from '@/types/exam'

interface ResultsPanelProps {
  result: ExamResult
  examName: string
  leaderboard?: Array<{
    rank: number
    name: string
    score: number
    percentage: number
  }>
}

export default function ResultsPanel({ result, examName, leaderboard = [] }: ResultsPanelProps) {
  return (
    <div className="space-y-6">
      {/* Main Results Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Your {examName} Results
        </h2>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">Overall Rank</p>
                <p className="text-2xl font-bold">#{result.rank.toLocaleString()}</p>
              </div>
              <Trophy className="h-8 w-8 text-blue-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Score</p>
                <p className="text-2xl font-bold">{result.score}/{result.totalMarks}</p>
              </div>
              <Target className="h-8 w-8 text-green-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Percentage</p>
                <p className="text-2xl font-bold">{result.percentage.toFixed(2)}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-200" />
            </div>
          </div>

          {result.categoryRank && (
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">{result.category} Rank</p>
                  <p className="text-2xl font-bold">#{result.categoryRank.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-orange-200" />
              </div>
            </div>
          )}
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Score Breakdown */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Score Breakdown</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">Correct Answers</span>
                </div>
                <span className="font-medium text-gray-900">{result.correct}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <XCircle className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-sm text-gray-600">Incorrect Answers</span>
                </div>
                <span className="font-medium text-gray-900">{result.incorrect}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Unattempted</span>
                </div>
                <span className="font-medium text-gray-900">{result.unattempted}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-sm font-medium text-gray-700">Total Questions</span>
                <span className="font-bold text-gray-900">{result.attempted + result.unattempted}</span>
              </div>
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Normalized Marks</span>
                <span className="font-medium text-gray-900">{result.normalizedMarks.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Attempted Questions</span>
                <span className="font-medium text-gray-900">{result.attempted}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Accuracy</span>
                <span className="font-medium text-gray-900">
                  {result.attempted > 0 ? ((result.correct / result.attempted) * 100).toFixed(1) : 0}%
                </span>
              </div>
              {result.category && (
                <div className="flex items-center justify-between border-t pt-3">
                  <span className="text-sm font-medium text-gray-700">Category</span>
                  <span className="font-bold text-gray-900">{result.category}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      {leaderboard.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Top Scorers</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-4 font-medium text-gray-700">Rank</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-700">Name</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-700">Score</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-700">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, index) => (
                  <tr key={entry.rank} className={`border-b border-gray-100 ${index < 3 ? 'bg-yellow-50' : ''}`}>
                    <td className="py-2 px-4">
                      <div className="flex items-center">
                        {index === 0 && <Trophy className="h-4 w-4 text-yellow-500 mr-1" />}
                        {index === 1 && <Trophy className="h-4 w-4 text-gray-400 mr-1" />}
                        {index === 2 && <Trophy className="h-4 w-4 text-orange-600 mr-1" />}
                        <span className="font-medium">#{entry.rank}</span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-gray-900">{entry.name}</td>
                    <td className="py-2 px-4 font-medium text-gray-900">{entry.score}</td>
                    <td className="py-2 px-4 text-gray-700">{entry.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Performance Insights */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Strengths</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Good overall performance</li>
              <li>• Consistent accuracy rate</li>
              <li>• Strong attempt strategy</li>
            </ul>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-900 mb-2">Areas for Improvement</h4>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• Consider attempting more questions</li>
              <li>• Focus on accuracy improvement</li>
              <li>• Time management optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
