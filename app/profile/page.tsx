"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, ChevronDown } from "lucide-react"

import { ProfileSidebar } from "@/components/profile/profile-sidebar"
import { ProfileHeader } from "@/components/profile/profile-header"
import { MetricsGrid } from "@/components/dashboard/metrics-grid"
import { StatisticsChart } from "@/components/dashboard/charts/statistics-chart"
import { AnalyticsChart } from "@/components/dashboard/charts/analytics-chart"
import { SalesChart } from "@/components/dashboard/charts/sales-chart"
import { TransactionsList } from "@/components/dashboard/transactions-list"
import ThemeSettingsPanel from "@/components/theme-settings-panel"
import { useThemeSettings } from "@/hooks/use-theme-settings"
import { useSidebar } from "@/hooks/use-sidebar"

export default function ProfilePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days")
  const [activeTab, setActiveTab] = useState("Settings")
  const { showThemeSettings, currentTheme, openThemeSettings, closeThemeSettings, handleThemeChange } =
    useThemeSettings()
  const { isOpen: isSidebarOpen, isMobile, toggle: toggleSidebar, close: closeSidebar } = useSidebar()

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Mobile Sidebar for Profile */}
      {isMobile && (
        <>
          {isSidebarOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={closeSidebar} />}
          <div
            className={`fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl border-r dark:border-gray-700 transition-transform duration-300 ease-in-out z-50 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ProfileSidebar />
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && <ProfileSidebar />}

      <div className="flex-1 flex flex-col">
        <ProfileHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onThemeSettingsOpen={openThemeSettings}
          onSidebarToggle={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="flex-1 p-6 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart />
            <TransactionsList />
          </div>
        </main>
      </div>

      {showThemeSettings && (
        <ThemeSettingsPanel
          isOpen={showThemeSettings}
          onClose={closeThemeSettings}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
      )}
    </div>
  )
}
