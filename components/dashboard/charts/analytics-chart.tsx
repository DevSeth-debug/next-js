import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronDown, TrendingUp, TrendingDown } from "lucide-react"

export function AnalyticsChart() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-gray-900 dark:text-white">Analytics</CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>19 Aug - 25 Aug</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">$5,850</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-teal-400" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">$1,750</span>
          </div>
        </div>
        <div className="h-48 relative">
          <svg className="w-full h-full" viewBox="0 0 300 150">
            <defs>
              <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M 20 120 Q 60 100 100 80 T 180 60 T 260 40" stroke="#10b981" strokeWidth="2" fill="none" />
            <path d="M 20 120 Q 60 100 100 80 T 180 60 T 260 40 L 260 150 L 20 150 Z" fill="url(#greenGradient)" />
            <circle cx="260" cy="40" r="3" fill="#10b981" />
          </svg>
          <div className="absolute bottom-2 left-4 text-xs text-gray-500 dark:text-gray-400">
            $1,000
            <br />
            22 August, 2019
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
