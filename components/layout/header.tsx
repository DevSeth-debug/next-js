"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Bell, ChevronDown, Menu, Settings } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "./breadcrumb"

interface HeaderProps {
  onThemeSettingsOpen?: () => void
  onSidebarToggle?: () => void
  isSidebarOpen?: boolean
}

export function Header({ onThemeSettingsOpen, onSidebarToggle, isSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onSidebarToggle}
            className={`dark:text-gray-300 dark:hover:bg-gray-700 transition-all duration-200 ${
              isSidebarOpen ? "text-green-600 dark:text-green-400" : ""
            }`}
            title={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <Breadcrumb />
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
          <Button
            variant="ghost"
            size="icon"
            onClick={onThemeSettingsOpen}
            className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <Settings className="w-5 h-5" />
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
            <DropdownMenuContent className="dark:bg-gray-800 dark:border-gray-700">
              <DropdownMenuItem
                asChild
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
