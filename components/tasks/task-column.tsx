"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TaskCard } from "./task-card"
import type { TaskColumn as TaskColumnType, Task } from "@/types/task"

interface TaskColumnProps {
  column: TaskColumnType
  onAddTask?: (status: string) => void
  onEditTask?: (task: Task) => void
}

export function TaskColumn({ column, onAddTask, onEditTask }: TaskColumnProps) {
  return (
    <div className="flex-1 min-w-80">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`h-1 w-8 ${column.color} rounded-full`} />
          <h2 className="font-semibold text-gray-900 dark:text-white uppercase tracking-wider text-sm">
            {column.title}
          </h2>
          <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{column.tasks.length}</span>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="w-6 h-6">
          <span className="text-gray-400">⋯</span>
        </Button>
      </div>

      {/* Tasks */}
      <div className="space-y-4 mb-4">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} onEdit={onEditTask} />
        ))}
      </div>

      {/* Add Task Button */}
      <Button
        variant="ghost"
        className="w-full h-12 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
        onClick={() => onAddTask?.(column.status)}
      >
        <Plus className="w-5 h-5 text-gray-400 hover:text-green-500" />
      </Button>
    </div>
  )
}
