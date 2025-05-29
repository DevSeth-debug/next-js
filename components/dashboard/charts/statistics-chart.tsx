import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronDown } from "lucide-react"

export function StatisticsChart() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg text-gray-900 dark:text-white">Statistics</CardTitle>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">2500</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">1200</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">23 August, 2020</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>19 Aug - 25 Aug</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 flex items-end justify-between gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
            const heights = [60, 80, 70, 65, 90, 75, 55]
            return (
              <div key={day} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full flex flex-col gap-1">
                  <div className="bg-green-500 rounded-t" style={{ height: `${heights[index]}%` }}></div>
                  <div className="bg-teal-400 rounded-b" style={{ height: `${heights[index] * 0.6}%` }}></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">{day}</span>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Expense</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
