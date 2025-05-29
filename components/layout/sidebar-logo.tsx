interface SidebarLogoProps {
  isCollapsed?: boolean
}

export function SidebarLogo({ isCollapsed = false }: SidebarLogoProps) {
  return (
    <div className={`flex items-center gap-2 mb-8 transition-all duration-300 ${isCollapsed ? "justify-center" : ""}`}>
      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
      {!isCollapsed && (
        <span className="font-semibold text-lg text-gray-900 dark:text-white transition-opacity duration-200">
          FLOWER
        </span>
      )}
    </div>
  )
}
