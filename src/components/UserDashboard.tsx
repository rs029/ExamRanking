'use client'

import { useAuth } from '@/contexts/AuthContext'
import { Calculator, History, Bookmark, Settings, Trophy, TrendingUp, Clock, Award } from 'lucide-react'
import Link from 'next/link'

export default function UserDashboard() {
  const { user } = useAuth()

  const quickActions = [
    {
      title: 'Calculate Rank',
      description: 'Start a new rank calculation',
      icon: Calculator,
      href: '#exams',
      color: 'bg-blue-500'
    },
    {
      title: 'My History',
      description: 'View your exam history',
      icon: History,
      href: '/dashboard/history',
      color: 'bg-green-500'
    },
    {
      title: 'Saved Results',
      description: 'Access your bookmarked results',
      icon: Bookmark,
      href: '/dashboard/saved',
      color: 'bg-purple-500'
    },
    {
      title: 'Settings',
      description: 'Manage your account',
      icon: Settings,
      href: '/dashboard/settings',
      color: 'bg-gray-500'
    }
  ]

  const recentActivity = [
    {
      exam: 'JEE Main 2024',
      date: '2 days ago',
      rank: '15,234',
      status: 'completed'
    },
    {
      exam: 'NEET 2024',
      date: '1 week ago',
      rank: '8,567',
      status: 'completed'
    },
    {
      exam: 'CAT 2024',
      date: '2 weeks ago',
      rank: '2,145',
      status: 'completed'
    }
  ]

  const achievements = [
    {
      title: 'First Calculation',
      description: 'Completed your first rank calculation',
      icon: Trophy,
      earned: true
    },
    {
      title: 'Exam Explorer',
      description: 'Calculated ranks for 5+ different exams',
      icon: Award,
      earned: true
    },
    {
      title: 'Consistent User',
      description: 'Used the platform for 30+ days',
      icon: TrendingUp,
      earned: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-primary-100 mt-2 text-lg">
                Ready to calculate your next exam rank?
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-primary-200 text-sm">Total Calculations</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="text-right">
                <p className="text-primary-200 text-sm">This Month</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-primary-300 group"
                >
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${action.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{action.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-600" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{activity.exam}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-600">Rank {activity.rank}</p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href="/dashboard/history" 
                className="block text-center mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                View All History →
              </Link>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-primary-600" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center p-3 rounded-lg ${achievement.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                    <div className={`p-2 rounded-full ${achievement.earned ? 'bg-green-500' : 'bg-gray-400'}`}>
                      <achievement.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className={`font-medium ${achievement.earned ? 'text-green-900' : 'text-gray-500'}`}>
                        {achievement.title}
                      </p>
                      <p className={`text-sm ${achievement.earned ? 'text-green-700' : 'text-gray-400'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
