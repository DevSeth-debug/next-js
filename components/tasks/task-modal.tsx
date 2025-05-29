"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import type { Task, Assignee } from "@/types/task"

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (task: Partial<Task>) => void
  task?: Task | null
  defaultStatus?: string
  availableAssignees: Assignee[]
}

export function TaskModal({ isOpen, onClose, onSave, task, defaultStatus, availableAssignees }: TaskModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: defaultStatus || "todo",
    priority: "medium" as const,
    dueDate: "",
    assignees: [] as Assignee[],
  })

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate,
        assignees: task.assignees,
      })
    } else {
      setFormData({
        title: "",
        description: "",
        status: defaultStatus || "todo",
        priority: "medium",
        dueDate: "",
        assignees: [],
      })
    }
  }, [task, defaultStatus])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  const addAssignee = (assignee: Assignee) => {
    if (!formData.assignees.find((a) => a.id === assignee.id)) {
      setFormData((prev) => ({
        ...prev,
        assignees: [...prev.assignees, assignee],
      }))
    }
  }

  const removeAssignee = (assigneeId: string) => {
    setFormData((prev) => ({
      ...prev,
      assignees: prev.assignees.filter((a) => a.id !== assigneeId),
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{task ? "Edit Task" : "Create New Task"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="Enter task title..."
              required
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Enter task description..."
              rows={3}
            />
          </div>

          {/* Status, Priority, Due Date */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, status: value as any }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, priority: value as any }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData((prev) => ({ ...prev, dueDate: e.target.value }))}
              />
            </div>
          </div>

          {/* Assignees */}
          <div>
            <Label>Assignees</Label>
            <div className="space-y-3">
              {/* Selected Assignees */}
              {formData.assignees.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.assignees.map((assignee) => (
                    <Badge key={assignee.id} variant="secondary" className="flex items-center gap-2 px-3 py-1">
                      <Avatar className="w-5 h-5">
                        <AvatarImage src={assignee.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">{assignee.initials}</AvatarFallback>
                      </Avatar>
                      <span>{assignee.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-red-100"
                        onClick={() => removeAssignee(assignee.id)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              )}

              {/* Available Assignees */}
              <div className="grid grid-cols-2 gap-2">
                {availableAssignees
                  .filter((assignee) => !formData.assignees.find((a) => a.id === assignee.id))
                  .map((assignee) => (
                    <Button
                      key={assignee.id}
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2 justify-start"
                      onClick={() => addAssignee(assignee)}
                    >
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={assignee.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">{assignee.initials}</AvatarFallback>
                      </Avatar>
                      <span>{assignee.name}</span>
                    </Button>
                  ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-600 hover:bg-green-700">
              {task ? "Update Task" : "Create Task"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
