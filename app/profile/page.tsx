"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Bell,
  Download,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Calendar,
  MoreHorizontal,
  MapPin,
  Phone,
  Mail,
  Cake,
  Edit,
} from "lucide-react"
import ThemeSettingsPanel from "@/components/theme-settings-panel"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function ProfilePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days")
  const [activeTab, setActiveTab] = useState("Settings")
  const { theme, setTheme } = useTheme()
  const [showThemeSettings, setShowThemeSettings] = useState(false)

  const tabs = ["Settings", "Activity", "Users"]

  const metrics = [
    {
      title: "Total Visitors",
      value: "20,500",
      change: "+4.85%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Total Followers",
      value: "21,800",
      change: "+5.25%",
      trend: "down",
      icon: TrendingDown,
      color: "text-red-500",
    },
    {
      title: "Total Likes",
      value: "30,400",
      change: "+3.55%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Total Comments",
      value: "14,800",
      change: "+10.30%",
      trend: "up",
      icon: TrendingUp,
      color: "text-green-500",
    },
  ]

  const favorites = [
    { name: "Ronald Robertson", role: "Product Designer", avatar: "RR" },
    { name: "Regina Cooper", role: "Project Manager", avatar: "RC" },
    { name: "Judith Black", role: "Business Analyst", avatar: "JB" },
    { name: "Dustin Williamson", role: "Web Developer", avatar: "DW" },
    { name: "Calvin Flores", role: "Senior Vice President", avatar: "CF" },
  ]

  const newFollowers = [
    { name: "Devon Williamson", role: "Product Designer, Apple Inc", avatar: "DW" },
    { name: "Debra Wilson", role: "Project Manager, Facebook Inc", avatar: "DW" },
    { name: "Judith Black", role: "Business Analyst, Google Inc", avatar: "JB" },
    { name: "Philip Henry", role: "Web Developer, Google Inc", avatar: "PH" },
    { name: "Mitchell Cooper", role: "Senior Vice President, Amazon Inc", avatar: "MC" },
  ]

  const socialPlatforms = [
    { name: "Facebook", followers: "3.5k", color: "bg-blue-500", percentage: 25 },
    { name: "Twitter", followers: "7.8k", color: "bg-sky-400", percentage: 35 },
    { name: "Instagram", followers: "5.8k", color: "bg-pink-500", percentage: 27 },
    { name: "YouTube", followers: "4.7k", color: "bg-red-500", percentage: 13 },
  ]

  const visitData = [
    { day: "Mon", value: 2800 },
    { day: "Tue", value: 1900 },
    { day: "Wed", value: 4200 },
    { day: "Thu", value: 2100 },
    { day: "Fri", value: 4800 },
    { day: "Sat", value: 3100 },
    { day: "Sun", value: 3800 },
  ]

  const followerGrowthData = [1200, 800, 4200, 1800, 3200, 5800, 2400]

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-80 bg-white dark:bg-gray-800 shadow-sm border-r dark:border-gray-700 transition-colors duration-300">
        <div className="p-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <Avatar className="w-32 h-32 mx-auto">
                <AvatarImage src="/placeholder.svg?height=128&width=128" />
                <AvatarFallback className="bg-orange-500 text-white text-2xl">FB</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Felecia Brown</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Project Manager</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6">Edit profile</Button>
          </div>

          {/* Info Section */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 uppercase tracking-wider">INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-1">EMAIL</p>
                  <p className="text-gray-900 dark:text-white text-sm">example@mail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-1">PHONE</p>
                  <p className="text-gray-900 dark:text-white text-sm">+123-4567-8800</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cake className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-1">BIRTHDAY</p>
                  <p className="text-gray-900 dark:text-white text-sm">17 March, 1995</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider mb-1">LOCATION</p>
                  <p className="text-gray-900 dark:text-white text-sm">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Favorites Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              FAVORITES
            </h3>
            <div className="space-y-3">
              {favorites.map((person, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-orange-500 text-white text-xs">{person.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{person.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Dashboard
                </Button>
              </Link>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-colors pb-4 border-b-2 ${
                    activeTab === tab
                      ? "text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Bell className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-orange-500 text-white">AT</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">ArtTemplate</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-gray-800 dark:border-gray-700">
                  <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                    Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setShowThemeSettings(true)}
                    className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Theme Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Overview</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Download className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="text-sm">{selectedPeriod}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-gray-800 dark:border-gray-700">
                  <DropdownMenuItem
                    onClick={() => setSelectedPeriod("Last 7 days")}
                    className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Last 7 days
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSelectedPeriod("Last 30 days")}
                    className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Last 30 days
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{metric.title}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</p>
                      <div className="flex items-center gap-1">
                        <metric.icon className={`w-4 h-4 ${metric.color}`} />
                        <span className={`text-sm font-medium ${metric.color}`}>{metric.change}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <metric.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Visits Chart */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">Visits</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>19 Aug - 25 Aug</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingDown className="w-4 h-4 text-red-500" />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">1,400</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Min. Visits</p>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white block mb-1">3,100</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Visits</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">9,500</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Max. Visits</p>
                  </div>
                </div>
                <div className="h-48 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 150">
                    <defs>
                      <linearGradient id="visitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 40 100 L 80 80 L 120 90 L 160 70 L 200 85 L 240 75 L 280 65"
                      stroke="#10b981"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 40 100 L 80 80 L 120 90 L 160 70 L 200 85 L 240 75 L 280 65 L 280 150 L 40 150 Z"
                      fill="url(#visitGradient)"
                    />
                    {[40, 80, 120, 160, 200, 240, 280].map((x, i) => (
                      <circle key={i} cx={x} cy={[100, 80, 90, 70, 85, 75, 65][i]} r="4" fill="#10b981" />
                    ))}
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 px-8">
                    {visitData.map((item) => (
                      <span key={item.day}>{item.day}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Visitors: 3,100 • 21 August, 2019</p>
                </div>
              </CardContent>
            </Card>

            {/* Followers Chart */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">Followers</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                        className="dark:stroke-gray-600"
                      />
                      {socialPlatforms.map((platform, index) => {
                        const prevPercentage = socialPlatforms.slice(0, index).reduce((sum, p) => sum + p.percentage, 0)
                        const circumference = 2 * Math.PI * 40
                        const strokeDasharray = circumference
                        const strokeDashoffset = circumference - (circumference * platform.percentage) / 100
                        const rotation = (prevPercentage * 360) / 100

                        return (
                          <circle
                            key={platform.name}
                            cx="50"
                            cy="50"
                            r="40"
                            stroke={platform.color.replace("bg-", "#")}
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "50% 50%" }}
                          />
                        )
                      })}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">21,800</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Total</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {socialPlatforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 ${platform.color} rounded-full`}></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{platform.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{platform.followers}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Followers Growth */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">Followers Growth</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>19 Aug - 25 Aug</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">21,800</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Week</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <TrendingDown className="w-4 h-4 text-red-500" />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">19,400</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Last Week</p>
                  </div>
                </div>
                <div className="h-48 flex items-end justify-between gap-2">
                  {followerGrowthData.map((value, index) => {
                    const maxValue = Math.max(...followerGrowthData)
                    const height = (value / maxValue) * 100
                    return (
                      <div key={index} className="flex flex-col items-center gap-2 flex-1">
                        <div
                          className="w-full bg-green-500 rounded-t transition-all duration-300 hover:bg-green-600"
                          style={{ height: `${height}%` }}
                          title={`${value} followers`}
                        ></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Peak day: Friday with 5,800 new followers</p>
                </div>
              </CardContent>
            </Card>

            {/* New Followers */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">New Followers</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>19 Aug - 25 Aug</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newFollowers.map((follower, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-orange-500 text-white text-xs">
                            {follower.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{follower.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{follower.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white px-4">
                          Follow
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-8 h-8 dark:text-gray-300 dark:hover:bg-gray-600"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {showThemeSettings && (
        <ThemeSettingsPanel
          isOpen={showThemeSettings}
          onClose={() => setShowThemeSettings(false)}
          currentTheme={theme || "light"}
          onThemeChange={(newTheme) => {
            setTheme(newTheme)
          }}
        />
      )}
    </div>
  )
}
