import { Metadata } from 'next'
import CalculatorPageClient from './CalculatorPageClient'
import examsData from '@/data/exams.json'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const exam = examsData.find(e => e.slug === params.slug)
  
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
  return examsData.map((exam) => ({
    slug: exam.slug,
  }))
}
interface CalculatorPageProps {
  params: {
    slug: string
  }
}

export default function CalculatorPage({ params }: CalculatorPageProps) {
  const exam = examsData.find(e => e.slug === params.slug)
  
  if (!exam) {
    notFound()
  }

  return <CalculatorPageClient slug={params.slug} />
}
