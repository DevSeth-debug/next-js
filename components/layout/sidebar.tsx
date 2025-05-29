"use client"

import { Search } from "lucide-react"
import { SidebarNavigation } from "./sidebar-navigation"
import { SidebarLogo } from "./sidebar-logo"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={`w-64 bg-white dark:bg-gray-800 shadow-sm border-r dark:border-gray-700 transition-colors duration-300 ${className || ""}`}
    >
      <div className="p-4">
        <SidebarLogo />

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search anything"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        <SidebarNavigation />
      </div>
    </div>
  )
}
