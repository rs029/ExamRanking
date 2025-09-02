export interface Exam {
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  totalMarks: number;
  subjects: string[];
}

export interface ExamResult {
  rank: number;
  score: number;
  totalMarks: number;
  percentage: number;
  categoryRank?: number;
  normalizedMarks: number;
  attempted: number;
  unattempted: number;
  correct: number;
  incorrect: number;
  category?: string;
}
