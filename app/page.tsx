"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Search,
  Bell,
  Download,
  ChevronDown,
  Menu,
  Home,
  CheckSquare,
  ShoppingCart,
  Calendar,
  Mail,
  MessageCircle,
  FolderOpen,
  FileText,
  Users,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
  User,
  BarChart3,
  Settings,
} from "lucide-react"
import ThemeSettingsPanel from "@/components/theme-settings-panel" // Import ThemeSettingsPanel with correct path

import { useTheme } from "next-themes"

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("Last 7 days")
  const { theme, setTheme } = useTheme()
  const [showThemeSettings, setShowThemeSettings] = useState(false)

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

  const orders = [
    {
      id: "#790841",
      customer: "Regina Cooper",
      amount: "$2,500",
      payment: "Credit Card",
      date: "12.09.2019",
      avatar: "RC",
    },
    {
      id: "#798894",
      customer: "Robert Edwards",
      amount: "$1,500",
      payment: "PayPal",
      date: "12.09.2019",
      avatar: "RE",
    },
    {
      id: "#790857",
      customer: "Gloria McKinney",
      amount: "$5,600",
      payment: "Credit Card",
      date: "12.09.2019",
      avatar: "GM",
    },
    {
      id: "#790687",
      customer: "Randall Fisher",
      amount: "$2,850",
      payment: "PayPal",
      date: "12.09.2019",
      avatar: "RF",
    },
  ]

  const transactions = [
    {
      name: "Devon Williamson",
      time: "08:00 AM",
      date: "19 August",
      amount: "+$1,400",
      type: "Payment",
      avatar: "DW",
    },
    {
      name: "Debra Wilson",
      time: "09:45 AM",
      date: "19 August",
      amount: "$800",
      type: "Refund",
      avatar: "DW",
    },
    {
      name: "Judith Black",
      time: "10:15 AM",
      date: "20 August",
      amount: "+$2,050",
      type: "Payment",
      avatar: "JB",
    },
    {
      name: "Philip Henry",
      time: "10:50 AM",
      date: "23 August",
      amount: "$650",
      type: "Payment",
      avatar: "PH",
    },
    {
      name: "Mitchell Cooper",
      time: "12:45 AM",
      date: "25 August",
      amount: "+$500",
      type: "Payment",
      avatar: "MC",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r dark:border-gray-700 transition-colors duration-300">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold text-lg text-gray-900 dark:text-white">FLOWER</span>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search anything"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

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
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-6 py-4 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Menu className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-500 dark:text-gray-400">Dashboard #1</span>
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
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowThemeSettings(true)}
                className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Settings className="w-5 h-5" />
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
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200">
                    Settings
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Income</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$8,500</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500">5.08%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-2xl text-teal-600 dark:text-teal-400">$</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sales</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">3,500K</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500">10.5%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">New Clients</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">2,500K</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500">24.9%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Statistics Chart */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">Statistics</CardTitle>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">2500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">1200</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">23 August, 2020</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>19 Aug - 25 Aug</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                    const heights = [60, 80, 70, 65, 90, 75, 55]
                    return (
                      <div key={day} className="flex flex-col items-center gap-2 flex-1">
                        <div className="w-full flex flex-col gap-1">
                          <div className="bg-green-500 rounded-t" style={{ height: `${heights[index]}%` }}></div>
                          <div className="bg-teal-400 rounded-b" style={{ height: `${heights[index] * 0.6}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{day}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Expense</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Chart */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">Analytics</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>19 Aug - 25 Aug</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">$5,850</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-teal-400" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">$1,750</span>
                  </div>
                </div>
                <div className="h-48 relative">
                  <svg className="w-full h-full" viewBox="0 0 300 150">
                    <defs>
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M 20 120 Q 60 100 100 80 T 180 60 T 260 40" stroke="#10b981" strokeWidth="2" fill="none" />
                    <path
                      d="M 20 120 Q 60 100 100 80 T 180 60 T 260 40 L 260 150 L 20 150 Z"
                      fill="url(#greenGradient)"
                    />
                    <circle cx="260" cy="40" r="3" fill="#10b981" />
                  </svg>
                  <div className="absolute bottom-2 left-4 text-xs text-gray-500 dark:text-gray-400">
                    $1,000
                    <br />
                    22 August, 2019
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sales Chart */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">Sales</CardTitle>
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
                        stroke="#374151"
                        strokeWidth="8"
                        fill="none"
                        className="dark:stroke-gray-600"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset="62.8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">3,500</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Total</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Current Week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">2500</span>
                      <span className="text-sm text-green-500">5.8%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Last Week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">1000</span>
                      <span className="text-sm text-red-500">5.8%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics Bars */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">Statistics</CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>19 Aug - 25 Aug</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Expense</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-900 dark:text-white">
                    <span>2500</span>
                    <span>1200</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[85, 70, 90, 65, 75, 55].map((percentage, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400 w-6">{25 - index}</span>
                      <div className="flex-1 flex gap-1">
                        <div className="bg-green-500 h-4 rounded" style={{ width: `${percentage}%` }}></div>
                        <div className="bg-teal-400 h-4 rounded" style={{ width: `${percentage * 0.6}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transactions */}
            <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg text-gray-900 dark:text-white">Transactions</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-orange-500 text-white text-xs">
                          {transaction.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate text-gray-900 dark:text-white">{transaction.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {transaction.time} — {transaction.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm font-medium ${
                            transaction.amount.startsWith("+") ? "text-green-500" : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {transaction.amount}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Last Orders Table */}
          <Card className="mt-6 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg text-gray-900 dark:text-white">Last Orders</CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>19 Aug - 25 Aug</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="dark:border-gray-700">
                    <TableHead className="text-gray-600 dark:text-gray-400">Customer Name</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Order No.</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Amount</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Payment Type</TableHead>
                    <TableHead className="text-gray-600 dark:text-gray-400">Date</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order, index) => (
                    <TableRow key={index} className="dark:border-gray-700">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-orange-500 text-white text-xs">{order.avatar}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium text-gray-900 dark:text-white">{order.customer}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">{order.id}</TableCell>
                      <TableCell className="font-medium text-gray-900 dark:text-white">{order.amount}</TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">{order.payment}</TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-400">{order.date}</TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
      {showThemeSettings && (
        <ThemeSettingsPanel
          isOpen={showThemeSettings}
          onClose={() => setShowThemeSettings(false)}
          currentTheme={theme || "light"}
          onThemeChange={(newTheme) => {
            console.log("Changing theme to:", newTheme)
            setTheme(newTheme)
          }}
        />
      )}
    </div>
  )
}
