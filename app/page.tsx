"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, ChevronDown } from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
import { MetricsGrid } from "@/components/dashboard/metrics-grid"
import { StatisticsChart } from "@/components/dashboard/charts/statistics-chart"
import { AnalyticsChart } from "@/components/dashboard/charts/analytics-chart"
import { SalesChart } from "@/components/dashboard/charts/sales-chart"
import { TransactionsList } from "@/components/dashboard/transactions-list"
import { OrdersTable } from "@/components/dashboard/orders-table"

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days")

  return (
    <AppShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Overview</h1>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-sm">{selectedPeriod}</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-gray-800 dark:border-gray-700">
              <DropdownMenuItem
                onClick={() => setSelectedPeriod("Last 7 days")}
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Last 7 days
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSelectedPeriod("Last 30 days")}
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Last 30 days
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <MetricsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <StatisticsChart />
        <AnalyticsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesChart />
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <TransactionsList />
            </div>
          </div>
        </div>
      </div>

      <OrdersTable />
    </AppShell>
  )
}
