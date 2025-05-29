"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Heart } from "lucide-react"

interface Product {
  id: string
  name: string
  productNo: string
  category: string
  date: string
  price: string
  status: "Available" | "Disabled"
  image?: string
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "2",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "3",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Disabled",
  },
  {
    id: "4",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Disabled",
  },
  {
    id: "5",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "6",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "7",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
  {
    id: "8",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    productNo: "#790841",
    category: "Phone",
    date: "12.09.20",
    price: "$2,500",
    status: "Available",
  },
]

interface ProductsGridProps {
  products?: Product[]
}

export function ProductsGrid({ products = mockProducts }: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
          <CardContent className="p-0">
            {/* Status Badge */}
            <div className="p-4 pb-0">
              <div className="flex items-center justify-between">
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
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="px-4 py-6">
              <div className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                {product.image ? (
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-white text-sm leading-tight line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{product.date}</span>
                  <span>{product.category}</span>
                </div>

                <div className="text-lg font-semibold text-gray-900 dark:text-white">{product.price}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
