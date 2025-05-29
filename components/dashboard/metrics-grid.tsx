import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, User, BarChart3 } from "lucide-react"

const metrics = [
  {
    title: "Total Income",
    value: "$8,500",
    change: "5.08%",
    trend: "up",
    icon: "$",
  },
  {
    title: "Total Sales",
    value: "3,500K",
    change: "10.5%",
    trend: "up",
    icon: BarChart3,
  },
  {
    title: "New Clients",
    value: "2,500K",
    change: "24.9%",
    trend: "up",
    icon: User,
  },
]

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-500">{metric.change}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                {typeof metric.icon === "string" ? (
                  <span className="text-2xl text-teal-600 dark:text-teal-400">{metric.icon}</span>
                ) : (
                  <metric.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
