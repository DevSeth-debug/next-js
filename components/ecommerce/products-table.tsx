"use client"

import type React from "react"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, ChevronUp, ChevronDown } from "lucide-react"
import { EditProductModal } from "./edit-product-modal"

interface Product {
  id: string
  name: string
  productNo: string
  category: string
  date: string
  price: string
  status: "Available" | "Disabled"
  selected?: boolean
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    productNo: "#790841",
    category: "Notebook",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "2",
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    productNo: "#790841",
    category: "Watch",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
    selected: true,
  },
  {
    id: "3",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
    selected: true,
  },
  {
    id: "4",
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    productNo: "#790841",
    category: "Watch",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
    selected: true,
  },
  {
    id: "5",
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    productNo: "#790841",
    category: "Notebook",
    date: "12.09.20",
    price: "$2,500",
    status: "Disabled",
  },
  {
    id: "6",
    name: "Apple iPhone 11 Pro Max 64GB Midnight Green",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Disabled",
  },
  {
    id: "7",
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    productNo: "#790841",
    category: "Notebook",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "8",
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    productNo: "#790841",
    category: "Watch",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
]

interface ProductsTableProps {
  products?: Product[]
}

export function ProductsTable({ products = mockProducts }: ProductsTableProps) {
  const [sortField, setSortField] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    products.filter((p) => p.selected).map((p) => p.id),
  )
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [showEditModal, setShowEditModal] = useState(false)

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const handleSelectProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(products.map((p) => p.id))
    }
  }

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product)
    setShowEditModal(true)
  }

  const handleSaveProduct = (productData: any) => {
    console.log("Saving product:", productData)
    // Here you would typically send the data to your API
  }

  const SortButton = ({ field, children }: { field: string; children: React.ReactNode }) => (
    <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => handleSort(field)}>
      <span className="flex items-center gap-1">
        {children}
        {sortField === field && (
          <span className="ml-1">
            {sortDirection === "asc" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </span>
        )}
      </span>
    </Button>
  )

  return (
    <>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedProducts.length === products.length}
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all products"
                />
              </TableHead>
              <TableHead>
                <SortButton field="name">PRODUCT NAME</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="productNo">PRODUCT NO.</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="category">CATEGORY</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="date">DATE</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="price">PRICE</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="status">STATUS</SortButton>
              </TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => handleSelectProduct(product.id)}
                    aria-label={`Select ${product.name}`}
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="text-gray-500">{product.productNo}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-gray-500">{product.date}</TableCell>
                <TableCell className="font-medium">{product.price}</TableCell>
                <TableCell>
                  <Badge
                    variant={product.status === "Available" ? "default" : "secondary"}
                    className={
                      product.status === "Available"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <MoreHorizontal className="w-4 h-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditProduct(product)}>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        product={editingProduct}
        onSave={handleSaveProduct}
      />
    </>
  )
}
