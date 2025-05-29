export interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "completed"
  priority: "high" | "medium" | "low"
  dueDate: string
  assignees: Assignee[]
  attachments: number
  comments: number
  progress?: number
  subtasks?: Subtask[]
  image?: string
}

export interface Assignee {
  id: string
  name: string
  avatar: string
  initials: string
}

export interface Subtask {
  id: string
  title: string
  completed: boolean
}

export interface TaskColumn {
  id: string
  title: string
  status: "todo" | "in-progress" | "completed"
  color: string
  tasks: Task[]
}
