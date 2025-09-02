export function cn(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

export function generateMockResult(examSlug: string): any {
  // Mock calculation logic - in real app this would connect to actual calculation service
  const mockResults = {
    rank: Math.floor(Math.random() * 10000) + 1,
    score: Math.floor(Math.random() * 250) + 50,
    totalMarks: 300,
    percentage: 0,
    categoryRank: Math.floor(Math.random() * 2000) + 1,
    normalizedMarks: 0,
    attempted: Math.floor(Math.random() * 90) + 60,
    unattempted: 0,
    correct: 0,
    incorrect: 0,
    category: 'General'
  };

  mockResults.percentage = (mockResults.score / mockResults.totalMarks) * 100;
  mockResults.normalizedMarks = mockResults.score * 0.85; // Mock normalization
  mockResults.unattempted = 100 - mockResults.attempted;
  mockResults.correct = Math.floor(mockResults.attempted * 0.7);
  mockResults.incorrect = mockResults.attempted - mockResults.correct;

  return mockResults;
}

export function generateMockLeaderboard() {
  return Array.from({ length: 10 }, (_, i) => ({
    rank: i + 1,
    name: `Student ${i + 1}`,
    score: Math.floor(Math.random() * 50) + 250,
    percentage: Math.floor(Math.random() * 20) + 80
  }));
}
