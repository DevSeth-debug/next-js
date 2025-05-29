"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Cake, MapPin, Edit } from "lucide-react"

const favorites = [
  { name: "Ronald Robertson", role: "Product Designer", avatar: "RR" },
  { name: "Regina Cooper", role: "Project Manager", avatar: "RC" },
  { name: "Judith Black", role: "Business Analyst", avatar: "JB" },
  { name: "Dustin Williamson", role: "Web Developer", avatar: "DW" },
  { name: "Calvin Flores", role: "Senior Vice President", avatar: "CF" },
]

export function ProfileSidebar() {
  return (
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
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 uppercase tracking-wider">FAVORITES</h3>
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
  )
}
