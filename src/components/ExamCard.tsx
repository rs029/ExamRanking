'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Calculator, 
  Stethoscope, 
  Briefcase, 
  Cpu, 
  Building, 
  Users, 
  CreditCard, 
  Scale,
  BookOpen,
  Lock
} from 'lucide-react'
import { Exam } from '@/types/exam'
import { useAuth } from '@/contexts/AuthContext'

const iconMap = {
  calculator: Calculator,
  stethoscope: Stethoscope,
  briefcase: Briefcase,
  cpu: Cpu,
  building: Building,
  users: Users,
  'credit-card': CreditCard,
  scale: Scale,
  default: BookOpen
}

interface ExamCardProps {
  exam: Exam
}

export default function ExamCard({ exam }: ExamCardProps) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const IconComponent = iconMap[exam.icon as keyof typeof iconMap] || iconMap.default

  const handleExamClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if (!isAuthenticated) {
      // Redirect to signup page
      router.push('/auth/signup')
    } else {
      // If authenticated, proceed to calculator
      router.push(`/calculator/${exam.slug}`)
    }
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-6 border border-gray-200 cursor-pointer"
      onClick={handleExamClick}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary-100 rounded-lg">
          <IconComponent className="h-6 w-6 text-primary-600" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{exam.name}</h3>
          <span className="text-sm text-primary-600 font-medium">{exam.category}</span>
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {exam.description}
      </p>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Total Marks:</span>
          <span className="font-medium text-gray-900">{exam.totalMarks}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Subjects:</span>
          <span className="font-medium text-gray-900">{exam.subjects.length}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Lock className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-500">Sign up to calculate rank</span>
          </div>
          <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
