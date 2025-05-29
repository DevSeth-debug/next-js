"use client"

import { useState } from "react"
import { TaskColumn } from "./task-column"
import { TaskModal } from "./task-modal"
import type { Task, TaskColumn as TaskColumnType } from "@/types/task"

const mockAssignees = [
  { id: "1", name: "John Doe", avatar: "/placeholder.svg", initials: "JD" },
  { id: "2", name: "Jane Smith", avatar: "/placeholder.svg", initials: "JS" },
  { id: "3", name: "Mike Johnson", avatar: "/placeholder.svg", initials: "MJ" },
  { id: "4", name: "Sarah Wilson", avatar: "/placeholder.svg", initials: "SW" },
]

const initialColumns: TaskColumnType[] = [
  {
    id: "todo",
    title: "TODO",
    status: "todo",
    color: "bg-yellow-400",
    tasks: [
      {
        id: "1",
        title: "Brand Logo Design",
        description: "Make a redesign of the logo in corporate colors.",
        status: "todo",
        priority: "medium",
        dueDate: "Jun 17",
        assignees: [mockAssignees[0], mockAssignees[1]],
        attachments: 2,
        comments: 5,
      },
      {
        id: "2",
        title: "New Header Image",
        description: "Create a new header image for the website homepage.",
        status: "todo",
        priority: "low",
        dueDate: "Jun 17",
        assignees: [mockAssignees[2]],
        attachments: 1,
        comments: 3,
        image: "/placeholder.svg?height=128&width=256",
      },
      {
        id: "3",
        title: "Wireframe for App",
        description: "Make a wireframe for an app for a pre-presentation.",
        status: "todo",
        priority: "high",
        dueDate: "Jun 17",
        assignees: [mockAssignees[0], mockAssignees[3]],
        attachments: 1,
        comments: 0,
      },
    ],
  },
  {
    id: "in-progress",
    title: "IN PROGRESS",
    status: "in-progress",
    color: "bg-blue-400",
    tasks: [
      {
        id: "4",
        title: "Updating Modules",
        description: "Step-by-step update of modules.",
        status: "in-progress",
        priority: "medium",
        dueDate: "Jun 17",
        assignees: [mockAssignees[1], mockAssignees[2]],
        attachments: 2,
        comments: 5,
        progress: 50,
        subtasks: [
          { id: "s1", title: "Module 1", completed: true },
          { id: "s2", title: "Module 2", completed: true },
          { id: "s3", title: "Module 3", completed: false },
          { id: "s4", title: "Module 4", completed: false },
        ],
      },
      {
        id: "5",
        title: "Template Progress",
        description: "Designing cool UI design templates.",
        status: "in-progress",
        priority: "high",
        dueDate: "Jun 17",
        assignees: [mockAssignees[0], mockAssignees[3]],
        attachments: 2,
        comments: 5,
        progress: 75,
        subtasks: [
          { id: "s5", title: "Inbox Template", completed: true },
          { id: "s6", title: "Chat Template", completed: true },
          { id: "s7", title: "Tasks Template", completed: true },
          { id: "s8", title: "Projects Template", completed: false },
        ],
      },
    ],
  },
  {
    id: "completed",
    title: "COMPLETED",
    status: "completed",
    color: "bg-green-400",
    tasks: [
      {
        id: "6",
        title: "Refresh Photo Slider",
        description: "Update the photo slider with new images and animations.",
        status: "completed",
        priority: "medium",
        dueDate: "Jun 17",
        assignees: [mockAssignees[1], mockAssignees[2]],
        attachments: 3,
        comments: 2,
        image: "/placeholder.svg?height=128&width=256",
      },
      {
        id: "7",
        title: "Server Startup",
        description: "Running the server in test mode and configuring.",
        status: "completed",
        priority: "high",
        dueDate: "Jun 17",
        assignees: [mockAssignees[0], mockAssignees[3]],
        attachments: 17,
        comments: 0,
      },
      {
        id: "8",
        title: "New Background",
        description: "Create new background designs for the application.",
        status: "completed",
        priority: "low",
        dueDate: "Jun 17",
        assignees: [mockAssignees[2]],
        attachments: 1,
        comments: 2,
        image: "/placeholder.svg?height=128&width=256",
      },
    ],
  },
]

export function TaskBoard() {
  const [columns, setColumns] = useState<TaskColumnType[]>(initialColumns)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string>("")

  const handleAddTask = (status: string) => {
    setSelectedStatus(status)
    setEditingTask(null)
    setIsModalOpen(true)
  }

  const handleEditTask = (task: Task) => {
    setEditingTask(task)
    setSelectedStatus(task.status)
    setIsModalOpen(true)
  }

  const handleSaveTask = (taskData: Partial<Task>) => {
    if (editingTask) {
      // Update existing task
      setColumns((prev) =>
        prev.map((column) => ({
          ...column,
          tasks: column.tasks.map((task) => (task.id === editingTask.id ? { ...task, ...taskData } : task)),
        })),
      )
    } else {
      // Add new task
      const newTask: Task = {
        id: Date.now().toString(),
        title: taskData.title || "",
        description: taskData.description || "",
        status: (taskData.status as any) || selectedStatus,
        priority: taskData.priority || "medium",
        dueDate: taskData.dueDate || "Jun 17",
        assignees: taskData.assignees || [],
        attachments: 0,
        comments: 0,
      }

      setColumns((prev) =>
        prev.map((column) =>
          column.status === newTask.status ? { ...column, tasks: [...column.tasks, newTask] } : column,
        ),
      )
    }
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="flex gap-6 overflow-x-auto pb-6">
        {columns.map((column) => (
          <TaskColumn key={column.id} column={column} onAddTask={handleAddTask} onEditTask={handleEditTask} />
        ))}
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        task={editingTask}
        defaultStatus={selectedStatus}
        availableAssignees={mockAssignees}
      />
    </>
  )
}
