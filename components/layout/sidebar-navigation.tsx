"use client"

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

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: false, badge: null, href: "/" },
  { icon: CheckSquare, label: "Task", active: true, badge: null, href: "/tasks" },
  { icon: ShoppingCart, label: "E-Commerce", active: false, badge: null, href: "/ecommerce" },
  { icon: Calendar, label: "Calendar", active: false, badge: null, href: "/calendar" },
  { icon: Mail, label: "Mail", active: false, badge: "1", href: "/mail" },
  { icon: MessageCircle, label: "Chat", active: false, badge: null, href: "/chat" },
  { icon: FolderOpen, label: "Projects", active: false, badge: null, href: "/projects" },
  { icon: FileText, label: "File Manager", active: false, badge: null, href: "/files" },
  { icon: FileText, label: "Notes", active: false, badge: null, href: "/notes" },
  { icon: Users, label: "Contacts", active: false, badge: null, href: "/contacts" },
]

interface SidebarNavigationProps {
  isCollapsed?: boolean
}

export function SidebarNavigation({ isCollapsed = false }: SidebarNavigationProps) {
  return (
    <div className="space-y-1">
      {!isCollapsed && (
        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 transition-opacity duration-200">
          MAIN MENU
        </div>
      )}
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
            item.active
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
        </div>
      ))}
    </div>
  )
}
