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
  { icon: Home, label: "Dashboard", active: true, badge: null },
  { icon: CheckSquare, label: "Task", active: false, badge: null },
  { icon: ShoppingCart, label: "E-Commerce", active: false, badge: null },
  { icon: Calendar, label: "Calendar", active: false, badge: null },
  { icon: Mail, label: "Mail", active: false, badge: "1" },
  { icon: MessageCircle, label: "Chat", active: false, badge: null },
  { icon: FolderOpen, label: "Projects", active: false, badge: null },
  { icon: FileText, label: "File Manager", active: false, badge: null },
  { icon: FileText, label: "Notes", active: false, badge: null },
  { icon: Users, label: "Contacts", active: false, badge: null },
]

export function SidebarNavigation() {
  return (
    <div className="space-y-1">
      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">MAIN MENU</div>
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
            item.active
              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="flex-1 text-sm">{item.label}</span>
          {item.badge && (
            <Badge className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">{item.badge}</Badge>
          )}
        </div>
      ))}
    </div>
  )
}
