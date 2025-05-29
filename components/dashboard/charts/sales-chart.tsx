import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"

export function SalesChart() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-gray-900 dark:text-white">Sales</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#374151"
                strokeWidth="8"
                fill="none"
                className="dark:stroke-gray-600"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#10b981"
                strokeWidth="8"
                fill="none"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">3,500</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Total</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Current Week</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">2500</span>
              <span className="text-sm text-green-500">5.8%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Last Week</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">1000</span>
              <span className="text-sm text-red-500">5.8%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
