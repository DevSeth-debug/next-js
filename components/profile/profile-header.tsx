"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Bell, ChevronDown, Menu } from "lucide-react"
import { signOut } from "@/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ProfileHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
  onThemeSettingsOpen?: () => void
  onSidebarToggle?: () => void
  isSidebarOpen?: boolean
}

const tabs = ["Settings", "Activity", "Users"]

export function ProfileHeader({
  activeTab,
  onTabChange,
  onThemeSettingsOpen,
  onSidebarToggle,
  isSidebarOpen,
}: ProfileHeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSidebarToggle}
              className={`md:hidden dark:text-gray-300 dark:hover:bg-gray-700 transition-all duration-200 ${
                isSidebarOpen ? "text-green-600 dark:text-green-400" : ""
              }`}
              title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="flex items-center gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Dashboard
              </Button>
            </Link>
          </div>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`text-sm font-medium transition-colors pb-4 border-b-2 ${
                activeTab === tab
                  ? "text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Search className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-orange-500 text-white">AT</AvatarFallback>
                </Avatar>
                <span className="text-sm">ArtTemplate</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-gray-800 dark:border-gray-700">
              <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                Account Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={onThemeSettingsOpen}
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Theme Settings
              </DropdownMenuItem>
              <DropdownMenuItem 
            
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
