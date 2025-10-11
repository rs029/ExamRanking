const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export interface DashboardData {
  stats: {
    totalCalculations: number
    thisMonthCalculations: number
  }
  recentActivity: Array<{
    exam: string
    date: string
    rank: string | number
    score: number
    status: string
  }>
  achievements: Array<{
    title: string
    description: string
    earned: boolean
  }>
}

export const fetchDashboardData = async (): Promise<DashboardData> => {
  const token = localStorage.getItem('token')
  
  if (!token) {
    throw new Error('No authentication token found')
  }

  // TODO: Update this endpoint when you implement the backend
  // Expected endpoint: GET /users/dashboard
  // Expected response format: DashboardData interface above
  const response = await fetch(`${API_BASE_URL}/users/dashboard`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data')
  }

  return response.json()
}
