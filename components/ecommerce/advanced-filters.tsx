"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, X } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface FilterState {
  category: string
  status: string
  dateFrom: Date | undefined
  dateTo: Date | undefined
  priceRange: [number, number]
}

interface AdvancedFiltersProps {
  isOpen: boolean
  onClose: () => void
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
  onSave: () => void
}

const categories = [
  { value: "all", label: "All" },
  { value: "notebook", label: "Notebook" },
  { value: "phone", label: "Phone" },
  { value: "watch", label: "Watch" },
  { value: "accessories", label: "Accessories" },
]

const statuses = [
  { value: "all", label: "All" },
  { value: "available", label: "Available" },
  { value: "disabled", label: "Disabled" },
]

export function AdvancedFilters({ isOpen, onClose, filters, onFiltersChange, onSave }: AdvancedFiltersProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters)

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...localFilters, [key]: value }
    setLocalFilters(newFilters)
  }

  const handleSave = () => {
    onFiltersChange(localFilters)
    onSave()
  }

  const handleReset = () => {
    const resetFilters: FilterState = {
      category: "all",
      status: "all",
      dateFrom: undefined,
      dateTo: undefined,
      priceRange: [500, 5500],
    }
    setLocalFilters(resetFilters)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Filter Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl border-l dark:border-gray-700 z-50 transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filter</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="dark:text-gray-300 dark:hover:bg-gray-700">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Category</label>
              <Select value={localFilters.category} onValueChange={(value) => updateFilter("category", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Status</label>
              <Select value={localFilters.status} onValueChange={(value) => updateFilter("status", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Date</label>
              <div className="grid grid-cols-2 gap-3">
                {/* From Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !localFilters.dateFrom && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {localFilters.dateFrom ? format(localFilters.dateFrom, "dd.MM.yyyy") : "12.07.2020"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={localFilters.dateFrom}
                      onSelect={(date) => updateFilter("dateFrom", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                {/* To Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !localFilters.dateTo && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {localFilters.dateTo ? format(localFilters.dateTo, "dd.MM.yyyy") : "12.07.2020"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={localFilters.dateTo}
                      onSelect={(date) => updateFilter("dateTo", date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Price</label>
              <div className="space-y-4">
                <Slider
                  value={localFilters.priceRange}
                  onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
                  max={10000}
                  min={0}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>${localFilters.priceRange[0].toLocaleString()}</span>
                  <span>${localFilters.priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t dark:border-gray-700 space-y-3">
            <Button onClick={handleSave} className="w-full bg-green-600 hover:bg-green-700 text-white">
              Save
            </Button>
            <Button onClick={handleReset} variant="outline" className="w-full">
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
