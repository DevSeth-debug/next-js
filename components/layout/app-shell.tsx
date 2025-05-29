"use client"

import type { ReactNode } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import ThemeSettingsPanel from "@/components/theme-settings-panel"
import { useThemeSettings } from "@/hooks/use-theme-settings"
import { useSidebar } from "@/hooks/use-sidebar"

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const { showThemeSettings, currentTheme, openThemeSettings, closeThemeSettings, handleThemeChange } =
    useThemeSettings()
  const { isOpen: isSidebarOpen, isMobile, toggle: toggleSidebar, close: closeSidebar } = useSidebar()

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar isOpen={isSidebarOpen} isMobile={isMobile} onClose={closeSidebar} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${!isMobile && !isSidebarOpen ? "ml-0" : ""}`}>
        <Header onThemeSettingsOpen={openThemeSettings} onSidebarToggle={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <main className="flex-1 p-6 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          {children}
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
