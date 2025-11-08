import { Metadata } from 'next'
import CalculatorPageClient from './CalculatorPageClient'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exams`)
  const allExams = await response.json()
  const { slug } = await params
  const exam = allExams.find((e: any) => e.slug === slug)
  
  if (!exam) {
    return {
      title: 'Exam Not Found - Exam Ranking',
    }
  }

  return {
    title: `${exam.name} Rank Calculator - Exam Ranking`,
    description: `Calculate your ${exam.name} rank and analyze performance. ${exam.description}. Get accurate results instantly with detailed analysis.`,
    keywords: `${exam.name}, rank calculator, ${exam.category}, competitive exams, performance analysis`,
    openGraph: {
      title: `${exam.name} Rank Calculator - Exam Ranking`,
      description: `Calculate your ${exam.name} rank and analyze performance. Get accurate results instantly.`,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exams`)
  const allExams = await response.json()
  return allExams.map((exam: any) => ({
    slug: exam.slug
  }))
}
interface CalculatorPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exams`)
  const allExams = await response.json()
  const exam = allExams.find((e: any) => e.slug === slug)
  
  if (!exam) {
    notFound()
  }

  return <CalculatorPageClient exam={exam} />
}
