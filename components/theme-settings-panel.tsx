"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { X, Sun, Moon, Monitor, Palette, Zap, Check, Settings } from "lucide-react"

interface ThemeSettingsPanelProps {
  isOpen: boolean
  onClose: () => void
  currentTheme?: string
  onThemeChange: (theme: string) => void
}

export default function ThemeSettingsPanel({
  isOpen,
  onClose,
  currentTheme = "light",
  onThemeChange,
}: ThemeSettingsPanelProps) {
  const [selectedTheme, setSelectedTheme] = useState(currentTheme)
  const [pendingTheme, setPendingTheme] = useState(currentTheme)
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [autoSwitch, setAutoSwitch] = useState(false)

  useEffect(() => {
    setSelectedTheme(currentTheme)
    setPendingTheme(currentTheme)
  }, [currentTheme])

  const themeOptions = [
    {
      id: "light",
      name: "Light",
      description: "Clean and bright interface",
      icon: Sun,
      preview: "bg-white border-gray-200",
    },
    {
      id: "dark",
      name: "Dark",
      description: "Easy on the eyes in low light",
      icon: Moon,
      preview: "bg-gray-900 border-gray-700",
    },
    {
      id: "system",
      name: "System",
      description: "Follows your device settings",
      icon: Monitor,
      preview: "bg-gradient-to-br from-white to-gray-900 border-gray-400",
    },
  ]

  const accentColors = [
    { name: "Green", color: "bg-green-500", active: true },
    { name: "Blue", color: "bg-blue-500", active: false },
    { name: "Purple", color: "bg-purple-500", active: false },
    { name: "Orange", color: "bg-orange-500", active: false },
    { name: "Pink", color: "bg-pink-500", active: false },
    { name: "Indigo", color: "bg-indigo-500", active: false },
  ]

  const handleThemeSelect = (themeId: string) => {
    setPendingTheme(themeId)
  }

  const handleApplyChanges = () => {
    onThemeChange(pendingTheme)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-out border-l dark:border-gray-700">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Settings className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Theme Settings</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Customize your dashboard appearance</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="dark:text-gray-300 dark:hover:bg-gray-700">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Theme Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Appearance</h3>
              <div className="space-y-3">
                {themeOptions.map((option) => (
                  <Card
                    key={option.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      pendingTheme === option.id
                        ? "ring-2 ring-green-500 dark:ring-green-400"
                        : "hover:border-gray-300 dark:hover:border-gray-600"
                    } dark:bg-gray-700 dark:border-gray-600`}
                    onClick={() => handleThemeSelect(option.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-8 rounded border-2 ${option.preview} flex items-center justify-center`}>
                          <option.icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900 dark:text-white">{option.name}</span>
                            {pendingTheme === option.id && <Check className="w-4 h-4 text-green-500" />}
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator className="dark:bg-gray-700" />

            {/* Accent Colors */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Accent Color</h3>
              <div className="grid grid-cols-6 gap-3">
                {accentColors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-lg ${color.color} relative transition-transform duration-200 hover:scale-110 ${
                      color.active ? "ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-500" : ""
                    }`}
                    title={color.name}
                  >
                    {color.active && <Check className="w-4 h-4 text-white absolute inset-0 m-auto" />}
                  </button>
                ))}
              </div>
            </div>

            <Separator className="dark:bg-gray-700" />

            {/* Advanced Settings */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Advanced</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Smooth Animations</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Enable transition effects</p>
                    </div>
                  </div>
                  <Switch checked={animationsEnabled} onCheckedChange={setAnimationsEnabled} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Auto Switch</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Follow system schedule</p>
                    </div>
                  </div>
                  <Switch checked={autoSwitch} onCheckedChange={setAutoSwitch} />
                </div>
              </div>
            </div>

            <Separator className="dark:bg-gray-700" />

            {/* Preview */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Preview</h3>
              <Card className="dark:bg-gray-700 dark:border-gray-600">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Palette className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Dashboard Preview</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">How your dashboard will look</p>
                      </div>
                    </div>
                    <div className="h-16 bg-gray-50 dark:bg-gray-800 rounded border dark:border-gray-600 flex items-center justify-center">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t dark:border-gray-700">
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={handleApplyChanges}>
                Apply Changes
                {pendingTheme !== currentTheme && "*"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
