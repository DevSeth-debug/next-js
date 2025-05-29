import type React from "react"
export interface MetricData {
  title: string
  value: string
  change: string
  trend: "up" | "down"
  icon: string | React.ComponentType<any>
}

export interface Transaction {
  name: string
  time: string
  date: string
  amount: string
  type: string
  avatar: string
}

export interface Order {
  id: string
  customer: string
  amount: string
  payment: string
  date: string
  avatar: string
}

export interface SidebarItem {
  icon: React.ComponentType<any>
  label: string
  active: boolean
  badge?: string | null
}

export interface SocialPlatform {
  name: string
  followers: string
  color: string
  percentage: number
}

export interface Follower {
  name: string
  role: string
  avatar: string
}
