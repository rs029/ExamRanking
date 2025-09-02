'use client'

import { useState } from 'react'
import { Upload, Link as LinkIcon, Loader2 } from 'lucide-react'
import { ExamResult } from '@/types/exam'

interface CalculatorFormProps {
  examName: string
  onSubmit: (data: FormData) => Promise<ExamResult>
}

export default function CalculatorForm({ examName, onSubmit }: CalculatorFormProps) {
  const [inputType, setInputType] = useState<'url' | 'file'>('url')
  const [url, setUrl] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [category, setCategory] = useState('General')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append('inputType', inputType)
      if (inputType === 'url') {
        formData.append('url', url)
      } else if (file) {
        formData.append('file', file)
      }
      formData.append('category', category)

      await onSubmit(formData)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {examName} Rank Calculator
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Type Selection */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">
            Choose Input Method
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="url"
                checked={inputType === 'url'}
                onChange={(e) => setInputType(e.target.value as 'url' | 'file')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <LinkIcon className="h-4 w-4 ml-2 mr-1" />
              <span className="text-sm text-gray-700">URL/Link</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="file"
                checked={inputType === 'file'}
                onChange={(e) => setInputType(e.target.value as 'url' | 'file')}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <Upload className="h-4 w-4 ml-2 mr-1" />
              <span className="text-sm text-gray-700">File Upload</span>
            </label>
          </div>
        </div>

        {/* URL Input */}
        {inputType === 'url' && (
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
              Result URL/Link
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com/your-result-link"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Paste your result page URL or direct link to your scorecard
            </p>
          </div>
        )}

        {/* File Upload */}
        {inputType === 'file' && (
          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
              Upload Result File
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, JPG, PNG up to 10MB
                </p>
                {file && (
                  <p className="text-sm text-green-600 mt-2">
                    Selected: {file.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Category Selection */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="EWS">EWS</option>
          </select>
        </div>

        {/* Additional Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
              State (Optional)
            </label>
            <select
              id="state"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select State</option>
              <option value="delhi">Delhi</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="karnataka">Karnataka</option>
              <option value="tamil-nadu">Tamil Nadu</option>
              <option value="uttar-pradesh">Uttar Pradesh</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              Gender (Optional)
            </label>
            <select
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || (inputType === 'url' && !url) || (inputType === 'file' && !file)}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-4 w-4" />
              Calculating...
            </>
          ) : (
            'Calculate Rank'
          )}
        </button>
      </form>
    </div>
  )
}
