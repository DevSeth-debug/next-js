"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Download, Plus, Filter, MoreHorizontal, List, Grid } from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
import { ProductsTable } from "@/components/ecommerce/products-table"
import { Pagination } from "@/components/ecommerce/pagination"
import { AdvancedFilters } from "@/components/ecommerce/advanced-filters"
import { ProductsGrid } from "@/components/ecommerce/products-grid"

const tabs = [
  { id: "all", label: "All", count: 283, active: true },
  { id: "available", label: "Available", count: 268, active: false },
  { id: "disabled", label: "Disabled", count: 15, active: false },
]

export default function EcommercePage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    category: "all",
    status: "all",
    dateFrom: undefined,
    dateTo: undefined,
    priceRange: [500, 5500] as [number, number],
  })

  const totalItems = 100
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Products</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
            <Button size="sm" className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4" />
              Add
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-green-600 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
              >
                {tab.label}
                <Badge variant="secondary" className="text-xs">
                  {tab.count}
                </Badge>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="w-8 h-8"
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="w-8 h-8"
            >
              <Grid className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setShowFilters(true)}
            >
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  Actions
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Bulk Edit</DropdownMenuItem>
                <DropdownMenuItem>Export Selected</DropdownMenuItem>
                <DropdownMenuItem>Archive Selected</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Delete Selected</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Products Display */}
        {viewMode === "list" ? <ProductsTable /> : <ProductsGrid />}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />

        {/* Advanced Filters Panel */}
        <AdvancedFilters
          isOpen={showFilters}
          onClose={() => setShowFilters(false)}
          filters={filters}
          onFiltersChange={setFilters}
          onSave={() => setShowFilters(false)}
        />
      </div>
    </AppShell>
  )
}
