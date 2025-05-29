"use client"

import { useState } from "react"
import { useTheme } from "next-themes"

export function useThemeSettings() {
  const [showThemeSettings, setShowThemeSettings] = useState(false)
  const { theme, setTheme } = useTheme()

  const openThemeSettings = () => setShowThemeSettings(true)
  const closeThemeSettings = () => setShowThemeSettings(false)

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    closeThemeSettings()
  }

  return {
    showThemeSettings,
    currentTheme: theme || "light",
    openThemeSettings,
    closeThemeSettings,
    handleThemeChange,
  }
}
