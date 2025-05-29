"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()

  // Skip rendering breadcrumb on home page
  if (pathname === "/") return null

  // Generate breadcrumb items
  const pathSegments = pathname.split("/").filter(Boolean)

  // Map path segments to readable names
  const pathNames: Record<string, string> = {
    tasks: "Task Management",
    profile: "Profile",
    ecommerce: "E-Commerce",
    calendar: "Calendar",
    mail: "Mail",
    chat: "Chat",
    projects: "Projects",
    files: "File Manager",
    notes: "Notes",
    contacts: "Contacts",
  }

  return (
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
      <Link href="/" className="flex items-center hover:text-gray-700 dark:hover:text-gray-300">
        <Home className="w-4 h-4 mr-1" />
        <span>Home</span>
      </Link>

      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`
        const isLast = index === pathSegments.length - 1

        return (
          <div key={path} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-2" />
            {isLast ? (
              <span className="font-medium text-gray-900 dark:text-white">
                {pathNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)}
              </span>
            ) : (
              <Link href={path} className="hover:text-gray-700 dark:hover:text-gray-300">
                {pathNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
