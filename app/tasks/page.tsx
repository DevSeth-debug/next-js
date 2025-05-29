"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Plus, Filter, SlidersHorizontal } from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
import { TaskBoard } from "@/components/tasks/task-board"

export default function TasksPage() {
  const [selectedProject, setSelectedProject] = useState("Design Plan")

  return (
    <AppShell>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white"
              >
                <span>{selectedProject}</span>
                <ChevronDown className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="dark:bg-gray-800 dark:border-gray-700">
              <DropdownMenuItem
                onClick={() => setSelectedProject("Design Plan")}
                className="dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Design Plan
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSelectedProject("Development Sprint")}
                className="dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Development Sprint
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setSelectedProject("Marketing Campaign")}
                className="dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Marketing Campaign
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Sort
          </Button>
          <Button size="sm" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white">
            <Plus className="w-4 h-4" />
            Add
          </Button>
        </div>
      </div>

      {/* Task Board */}
      <TaskBoard />
    </AppShell>
  )
}
