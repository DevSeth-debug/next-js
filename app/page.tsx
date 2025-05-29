"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  Download,
  Home,
  ShoppingCart,
  Calendar,
  Mail,
  MessageSquare,
  FolderKanban,
  FileText,
  Users,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeSettingsPanel } from "@/components/theme-settings-panel"
import { AnimationToggle } from "@/components/animation-toggle"

export default function Dashboard() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [animationsEnabled, setAnimationsEnabled] = useState(true)

  // Load animation preference from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const storedPreference = localStorage.getItem("animationsEnabled")
    if (storedPreference !== null) {
      setAnimationsEnabled(storedPreference === "true")
    }
  }, [])

  // Apply animation class to document body
  useEffect(() => {
    if (mounted) {
      if (animationsEnabled) {
        document.body.classList.add("animations-enabled")
        document.body.classList.remove("animations-disabled")
      } else {
        document.body.classList.add("animations-disabled")
        document.body.classList.remove("animations-enabled")
      }
    }
  }, [animationsEnabled, mounted])

  const handleThemeChange = (newTheme) => {
    console.log("Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  const handleAnimationToggle = (enabled) => {
    setAnimationsEnabled(enabled)
    localStorage.setItem("animationsEnabled", String(enabled))
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background animate-transition">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 border-r bg-background h-screen flex flex-col animate-transition">
          <div className="p-4 flex items-center gap-2 border-b">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">F</span>
            </div>
            <span className="font-bold text-lg">FLOWER</span>
          </div>

          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search anything"
                className="w-full bg-muted pl-8 animate-transition-fast"
              />
            </div>
          </div>

          <div className="px-2 py-2">
            <h3 className="px-4 text-xs font-semibold text-muted-foreground mb-2">MAIN MENU</h3>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start bg-primary/10 text-primary hover:bg-primary/20 animate-transition-fast"
              >
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start animate-transition-fast">
                <FileText className="mr-2 h-4 w-4" />
                Task
              </Button>
              <Button variant="ghost" className="w-full justify-start flex items-center animate-transition-fast">
                <ShoppingCart className="mr-2 h-4 w-4" />
                E-Commerce
                <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
              <Button variant="ghost" className="w-full justify-start animate-transition-fast">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </Button>
              <Button variant="ghost" className="w-full justify-start flex items-center animate-transition-fast">
                <Mail className="mr-2 h-4 w-4" />
                Mail
                <Badge className="ml-auto bg-red-500 text-white">1</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start animate-transition-fast">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat
              </Button>
              <Button variant="ghost" className="w-full justify-start animate-transition-fast">
                <FolderKanban className="mr-2 h-4 w-4" />
                Projects
              </Button>
              <Button variant="ghost" className="w-full justify-start animate-transition-fast">
                <FileText className="mr-2 h-4 w-4" />
                File Manager
              </Button>
              <Button variant="ghost" className="w-full justify-start animate-transition-fast">
                <FileText className="mr-2 h-4 w-4" />
                Notes
              </Button>
              <Button variant="ghost" className="w-full justify-start animate-transition-fast">
                <Users className="mr-2 h-4 w-4" />
                Contacts
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b flex items-center justify-between px-4 bg-background animate-transition">
            <Button variant="ghost" size="icon" className="md:hidden animate-transition-fast">
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex-1" />

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="animate-transition-fast">
                <Search className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="animate-transition-fast">
                <Bell className="h-5 w-5" />
              </Button>

              <AnimationToggle className="mx-2" />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSettingsOpen(true)}
                className="animate-transition-fast"
              >
                <Settings className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 animate-transition-fast">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AT</AvatarFallback>
                    </Avatar>
                    <span>ArtTemplate</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-6 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-semibold">Overview</h1>
              <div className="flex items-center gap-4">
                <Button variant="outline" className="flex items-center gap-2 animate-transition-fast">
                  <Download className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 animate-transition-fast">
                      Last 7 days
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                    <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                    <DropdownMenuItem>Last 90 days</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="card-hover animate-transition">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Income</p>
                      <h3 className="text-2xl font-bold mt-1">$8,500</h3>
                      <p className="text-xs text-green-500 mt-1">+5.08%</p>
                    </div>
                    <div className="h-12 w-12 bg-green-100 dark:bg-green-900/20 rounded-md flex items-center justify-center text-green-500">
                      <span className="text-2xl">$</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover animate-transition">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Sales</p>
                      <h3 className="text-2xl font-bold mt-1">3.500K</h3>
                      <p className="text-xs text-green-500 mt-1">+10.5%</p>
                    </div>
                    <div className="h-12 w-12 bg-green-100 dark:bg-green-900/20 rounded-md flex items-center justify-center text-green-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="12" width="4" height="8" rx="1" fill="currentColor" />
                        <rect x="10" y="8" width="4" height="12" rx="1" fill="currentColor" />
                        <rect x="17" y="4" width="4" height="16" rx="1" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover animate-transition">
                <CardContent className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">New Clients</p>
                      <h3 className="text-2xl font-bold mt-1">2.500K</h3>
                      <p className="text-xs text-green-500 mt-1">+24.9%</p>
                    </div>
                    <div className="h-12 w-12 bg-green-100 dark:bg-green-900/20 rounded-md flex items-center justify-center text-green-500">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Animation Settings Demo */}
            <Card className="mb-6 animate-transition">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Animation Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Animation Status</h3>
                        <p className="text-sm text-muted-foreground">Toggle all animations on or off</p>
                      </div>
                      <AnimationToggle />
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Animation Examples</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center pulse-animation">
                            <span className="text-primary">Pulse</span>
                          </div>
                          <span className="text-xs">Pulse</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center bounce-animation">
                            <span className="text-primary">Bounce</span>
                          </div>
                          <span className="text-xs">Bounce</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                            <Settings className="h-6 w-6 text-primary spin-animation" />
                          </div>
                          <span className="text-xs">Spin</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Animation Effects</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <Button className="w-full btn-animation">Hover & Click Me</Button>
                      <Card className="card-hover">
                        <CardContent className="p-4">
                          <p className="text-sm">This card has hover effects</p>
                        </CardContent>
                      </Card>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 hover-scale">
                          Scale on Hover
                        </Button>
                        <Button variant="outline" className="flex-1 animate-transition-fast">
                          Fast Transition
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="card-hover animate-transition">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Statistics</h3>
                    <Button variant="outline" size="sm" className="text-xs animate-transition-fast">
                      19 Aug - 25 Aug
                    </Button>
                  </div>
                  <div className="h-64 flex items-end justify-between">
                    {/* Simplified bar chart */}
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                      <div key={day} className="flex flex-col items-center">
                        <div className="w-8 flex flex-col items-center">
                          <div
                            className="w-full bg-green-200 dark:bg-green-900/30 rounded-t-sm animate-transition"
                            style={{ height: `${Math.max(20, Math.random() * 80)}px` }}
                          ></div>
                          <div
                            className="w-full bg-green-500 dark:bg-green-600 rounded-b-sm animate-transition"
                            style={{ height: `${Math.max(30, Math.random() * 100)}px` }}
                          ></div>
                        </div>
                        <span className="text-xs mt-2">{day}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center mt-4 gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-200 dark:bg-green-900/30"></div>
                      <span className="text-xs">Expense</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover animate-transition">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Analytics</h3>
                    <Button variant="outline" size="sm" className="text-xs animate-transition-fast">
                      19 Aug - 25 Aug
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">↑</span>
                      <span className="font-semibold">$5,850</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">↓</span>
                      <span className="font-semibold">$1,750</span>
                    </div>
                  </div>
                  <div className="h-48 relative">
                    {/* Simplified line chart */}
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <path
                        d="M0,50 C20,40 40,80 60,70 C80,60 100,80 120,60 C140,40 160,70 180,50 C200,30 220,60 240,50 C260,40 280,60 300,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-500 animate-transition"
                      />
                      <path
                        d="M0,50 C20,40 40,80 60,70 C80,60 100,80 120,60 C140,40 160,70 180,50 C200,30 220,60 240,50 C260,40 280,60 300,50"
                        fill="url(#gradient)"
                        fillOpacity="0.2"
                        stroke="none"
                        className="animate-transition"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="currentColor" className="text-green-500" />
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-green-500" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-between mt-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <span key={day} className="text-xs">
                        {day}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>

      {/* Theme Settings Panel */}
      <ThemeSettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        currentTheme={theme}
        onThemeChange={handleThemeChange}
        animationsEnabled={animationsEnabled}
        onAnimationToggle={handleAnimationToggle}
      />
    </div>
  )
}
