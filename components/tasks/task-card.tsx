"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Calendar, Paperclip, MessageCircle } from "lucide-react"
import type { Task } from "@/types/task"

interface TaskCardProps {
  task: Task
  onEdit?: (task: Task) => void
}

export function TaskCard({ task, onEdit }: TaskCardProps) {
  const priorityColors = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  }

  const statusColors = {
    todo: "bg-yellow-400",
    "in-progress": "bg-blue-400",
    completed: "bg-green-400",
  }

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
      <CardContent className="p-4">
        {/* Priority Indicator */}
        <div className={`h-1 w-full ${priorityColors[task.priority]} rounded-full mb-3`} />

        {/* Due Date */}
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
          <Calendar className="w-3 h-3" />
          <span>{task.dueDate}</span>
        </div>

        {/* Task Title */}
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition-colors">
          {task.title}
        </h3>

        {/* Task Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{task.description}</p>

        {/* Task Image */}
        {task.image && (
          <div className="mb-3">
            <img
              src={task.image || "/placeholder.svg"}
              alt={task.title}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Progress Bar for In Progress Tasks */}
        {task.status === "in-progress" && task.progress !== undefined && (
          <div className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-600 dark:text-gray-400">SUB-TASKS: {task.subtasks?.length || 0}</span>
              <span className="text-xs font-medium text-gray-900 dark:text-white">{task.progress}%</span>
            </div>
            <Progress value={task.progress} className="h-2" />
          </div>
        )}

        {/* Subtasks for Completed Tasks */}
        {task.status === "completed" && task.subtasks && (
          <div className="mb-3 space-y-1">
            {task.subtasks.slice(0, 3).map((subtask) => (
              <div key={subtask.id} className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
                <span className="text-gray-600 dark:text-gray-400">{subtask.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Attachments and Comments */}
          <div className="flex items-center gap-3">
            {task.attachments > 0 && (
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <Paperclip className="w-3 h-3" />
                <span>{task.attachments}</span>
              </div>
            )}
            {task.comments > 0 && (
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                <MessageCircle className="w-3 h-3" />
                <span>{task.comments}</span>
              </div>
            )}
          </div>

          {/* Assignees */}
          <div className="flex items-center gap-1">
            {task.assignees.slice(0, 3).map((assignee, index) => (
              <Avatar
                key={assignee.id}
                className="w-6 h-6 border-2 border-white dark:border-gray-800"
                style={{ marginLeft: index > 0 ? "-8px" : "0" }}
              >
                <AvatarImage src={assignee.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-orange-500 text-white text-xs">{assignee.initials}</AvatarFallback>
              </Avatar>
            ))}
            {task.assignees.length > 3 && (
              <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium text-gray-600 dark:text-gray-400 ml-1">
                +{task.assignees.length - 3}
              </div>
            )}
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-3">
          <div className={`h-1 w-full ${statusColors[task.status]} rounded-full`} />
        </div>
      </CardContent>
    </Card>
  )
}
