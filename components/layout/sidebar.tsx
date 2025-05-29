"use client"

import { Search } from "lucide-react"
import { SidebarNavigation } from "./sidebar-navigation"
import { SidebarLogo } from "./sidebar-logo"

interface SidebarProps {
  isOpen: boolean
  isMobile: boolean
  onClose?: () => void
  className?: string
}

export function Sidebar({ isOpen, isMobile, onClose, className }: SidebarProps) {
  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={onClose} />}

        {/* Mobile Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl border-r dark:border-gray-700 transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } ${className || ""}`}
        >
          <SidebarContent />
        </div>
      </>
    )
  }

  // Desktop Sidebar
  return (
    <div
      className={`hidden md:flex flex-col bg-white dark:bg-gray-800 shadow-sm border-r dark:border-gray-700 transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      } ${className || ""}`}
    >
      <SidebarContent isCollapsed={!isOpen} />
    </div>
  )
}

function SidebarContent({ isCollapsed = false }: { isCollapsed?: boolean }) {
  return (
    <div className="p-4 h-full overflow-hidden">
      <SidebarLogo isCollapsed={isCollapsed} />

      {!isCollapsed && (
        <div className="relative mb-6 transition-opacity duration-200">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search anything"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>
      )}

      <SidebarNavigation isCollapsed={isCollapsed} />
    </div>
  )
}
