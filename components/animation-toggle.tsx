"use client"

import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Sparkles, Zap } from "lucide-react"

interface AnimationToggleProps {
  className?: string
}

export function AnimationToggle({ className }: AnimationToggleProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(true)

  // Load animation preference from localStorage on mount
  useEffect(() => {
    const storedPreference = localStorage.getItem("animationsEnabled")
    if (storedPreference !== null) {
      setAnimationsEnabled(storedPreference === "true")
    }
  }, [])

  // Apply animation class to document body and save preference
  useEffect(() => {
    if (animationsEnabled) {
      document.body.classList.add("animations-enabled")
      document.body.classList.remove("animations-disabled")
    } else {
      document.body.classList.add("animations-disabled")
      document.body.classList.remove("animations-enabled")
    }

    localStorage.setItem("animationsEnabled", String(animationsEnabled))
  }, [animationsEnabled])

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Switch
        id="animation-mode"
        checked={animationsEnabled}
        onCheckedChange={setAnimationsEnabled}
        className="animation-toggle"
      >
        <span className="animation-toggle-thumb" />
      </Switch>
      <Label htmlFor="animation-mode" className="flex items-center gap-1.5 cursor-pointer">
        {animationsEnabled ? (
          <Sparkles className="h-4 w-4 text-primary" />
        ) : (
          <Zap className="h-4 w-4 text-muted-foreground" />
        )}
        <span className="text-sm">{animationsEnabled ? "Animations On" : "Animations Off"}</span>
      </Label>
    </div>
  )
}
