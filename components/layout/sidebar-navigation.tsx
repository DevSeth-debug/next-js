"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  CheckSquare,
  ShoppingCart,
  Calendar,
  Mail,
  MessageCircle,
  FolderOpen,
  FileText,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SidebarItem {
  icon: React.ElementType
  label: string
  href: string
  badge?: string | null
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: CheckSquare, label: "Task", href: "/tasks" },
  { icon: ShoppingCart, label: "E-Commerce", href: "/ecommerce" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: Mail, label: "Mail", href: "/mail", badge: "1" },
  { icon: MessageCircle, label: "Chat", href: "/chat" },
  { icon: FolderOpen, label: "Projects", href: "/projects" },
  { icon: FileText, label: "File Manager", href: "/files" },
  { icon: FileText, label: "Notes", href: "/notes" },
  { icon: Users, label: "Contacts", href: "/contacts" },
]

interface SidebarNavigationProps {
  isCollapsed?: boolean
}

export function SidebarNavigation({ isCollapsed = false }: SidebarNavigationProps) {
  const pathname = usePathname()

  return (
    <div className="space-y-1">
      {!isCollapsed && (
        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 transition-opacity duration-200">
          MAIN MENU
        </div>
      )}
      {sidebarItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
              isActive
                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            } ${isCollapsed ? "justify-center" : ""}`}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <>
                <span className="flex-1 text-sm transition-opacity duration-200">{item.label}</span>
                {item.badge && (
                  <Badge className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full transition-opacity duration-200">
                    {item.badge}
                  </Badge>
                )}
              </>
            )}

            {/* Tooltip for collapsed state */}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                {item.label}
                {item.badge && (
                  <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</span>
                )}
              </div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
