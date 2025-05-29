"use client"

import { useState, useEffect } from "react"
import { X, Check, Monitor, Moon, Sun, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

interface ThemeSettingsProps {
  isOpen: boolean
  onClose: () => void
  currentTheme: string
  onThemeChange: (theme: string) => void
  animationsEnabled: boolean
  onAnimationToggle: (enabled: boolean) => void
}

export function ThemeSettingsPanel({
  isOpen,
  onClose,
  currentTheme,
  onThemeChange,
  animationsEnabled,
  onAnimationToggle,
}: ThemeSettingsProps) {
  const [selectedTheme, setSelectedTheme] = useState(currentTheme || "system")
  const [pendingTheme, setPendingTheme] = useState(currentTheme || "system")
  const [selectedAccent, setSelectedAccent] = useState("green")
  const [enableAnimations, setEnableAnimations] = useState(animationsEnabled)
  const [autoSwitch, setAutoSwitch] = useState(false)

  // Update selected theme when currentTheme changes
  useEffect(() => {
    setSelectedTheme(currentTheme || "system")
    setPendingTheme(currentTheme || "system")
  }, [currentTheme])

  // Update animation state when prop changes
  useEffect(() => {
    setEnableAnimations(animationsEnabled)
  }, [animationsEnabled])

  const handleThemeSelect = (theme: string) => {
    setPendingTheme(theme)
  }

  const handleApplyChanges = () => {
    setSelectedTheme(pendingTheme)
    onThemeChange(pendingTheme)
    onAnimationToggle(enableAnimations)
    onClose()
  }

  const handleAnimationToggle = (checked: boolean) => {
    setEnableAnimations(checked)
  }

  const accentColors = [
    { name: "Green", value: "green", class: "bg-green-500" },
    { name: "Blue", value: "blue", class: "bg-blue-500" },
    { name: "Purple", value: "purple", class: "bg-purple-500" },
    { name: "Orange", value: "orange", class: "bg-orange-500" },
    { name: "Pink", value: "pink", class: "bg-pink-500" },
    { name: "Indigo", value: "indigo", class: "bg-indigo-500" },
  ]

  const isPending = pendingTheme !== selectedTheme || enableAnimations !== animationsEnabled

  return (
    <>
      <div className="theme-settings-backdrop" data-state={isOpen ? "open" : "closed"} onClick={onClose} />
      <div className="theme-settings-panel" data-state={isOpen ? "open" : "closed"}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Settings</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-60px)]">
          {/* Theme Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Theme</h3>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                className={`flex flex-col items-center justify-center h-24 gap-2 ${
                  pendingTheme === "light" ? "border-primary border-2" : ""
                } animate-transition-fast`}
                onClick={() => handleThemeSelect("light")}
              >
                <div className="w-12 h-12 rounded-full bg-white border flex items-center justify-center">
                  <Sun className="h-6 w-6 text-yellow-500" />
                </div>
                <span className="text-sm">Light</span>
                {pendingTheme === "light" && (
                  <div className="absolute top-2 right-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                )}
              </Button>

              <Button
                variant="outline"
                className={`flex flex-col items-center justify-center h-24 gap-2 ${
                  pendingTheme === "dark" ? "border-primary border-2" : ""
                } animate-transition-fast`}
                onClick={() => handleThemeSelect("dark")}
              >
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                  <Moon className="h-6 w-6 text-gray-100" />
                </div>
                <span className="text-sm">Dark</span>
                {pendingTheme === "dark" && (
                  <div className="absolute top-2 right-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                )}
              </Button>

              <Button
                variant="outline"
                className={`flex flex-col items-center justify-center h-24 gap-2 ${
                  pendingTheme === "system" ? "border-primary border-2" : ""
                } animate-transition-fast`}
                onClick={() => handleThemeSelect("system")}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-900 flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-blue-500" />
                </div>
                <span className="text-sm">System</span>
                {pendingTheme === "system" && (
                  <div className="absolute top-2 right-2">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* Accent Color Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Accent Color</h3>
            <div className="grid grid-cols-3 gap-2">
              {accentColors.map((color) => (
                <Button
                  key={color.value}
                  variant="outline"
                  className={`flex flex-col items-center justify-center h-16 gap-2 ${
                    selectedAccent === color.value ? "border-primary border-2" : ""
                  } animate-transition-fast`}
                  onClick={() => setSelectedAccent(color.value)}
                >
                  <div className={`w-6 h-6 rounded-full ${color.class}`}></div>
                  <span className="text-xs">{color.name}</span>
                  {selectedAccent === color.value && (
                    <div className="absolute top-2 right-2">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Animation Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Animations</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable Animations</p>
                  <p className="text-sm text-muted-foreground">Control all animations and transitions</p>
                </div>
                <Switch checked={enableAnimations} onCheckedChange={handleAnimationToggle} className="animation-toggle">
                  <span className="animation-toggle-thumb" />
                </Switch>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto Switch Theme</p>
                  <p className="text-sm text-muted-foreground">Light during day, dark at night</p>
                </div>
                <Switch checked={autoSwitch} onCheckedChange={setAutoSwitch} className="animation-toggle">
                  <span className="animation-toggle-thumb" />
                </Switch>
              </div>

              <div className="p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center gap-2 text-sm">
                  {enableAnimations ? (
                    <>
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Animations are enabled</span>
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 text-muted-foreground" />
                      <span>Animations are disabled for better performance</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Animation Examples */}
          {enableAnimations && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Animation Preview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center pulse-animation mb-2">
                    <span className="text-primary text-xs">Pulse</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Pulse Animation</span>
                </div>
                <div className="p-4 border rounded-lg flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center bounce-animation mb-2">
                    <span className="text-primary text-xs">Bounce</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Bounce Animation</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} className="animate-transition-fast">
            Cancel
          </Button>
          <Button onClick={handleApplyChanges} className="animate-transition-fast">
            Apply Changes{isPending ? "*" : ""}
          </Button>
        </div>
      </div>
    </>
  )
}
