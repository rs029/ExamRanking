import { Metadata } from 'next'
import CalculatorPageClient from './CalculatorPageClient'
import examsData from '@/data/exams.json'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const exam = examsData.find(e => e.slug === slug)
  
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
  params: Promise<{
    slug: string
  }>
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await params
  const exam = examsData.find(e => e.slug === slug)
  
  if (!exam) {
    notFound()
  }

  return <CalculatorPageClient slug={slug} />
}
