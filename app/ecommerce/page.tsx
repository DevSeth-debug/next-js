"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
import { ProductCard } from "@/components/ecommerce/product-card"
import { ProductFilters } from "@/components/ecommerce/product-filters"
import { ProductSearch } from "@/components/ecommerce/product-search"
import { ShoppingCartComponent } from "@/components/ecommerce/shopping-cart"
import { useCart } from "@/hooks/use-cart"
import type { Product, FilterOptions } from "@/types/ecommerce"

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    brand: "Apple",
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    description: "The most advanced iPhone yet with titanium design and A17 Pro chip.",
    features: ["6.7-inch display", "A17 Pro chip", "Pro camera system", "Titanium design"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    price: 1299,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    brand: "Samsung",
    rating: 4.7,
    reviews: 890,
    inStock: true,
    description: "Ultimate Galaxy experience with S Pen and AI features.",
    features: ["6.8-inch display", "S Pen included", "200MP camera", "AI features"],
    colors: ["Titanium Gray", "Titanium Black", "Titanium Violet"],
  },
  {
    id: "3",
    name: "Nike Air Max 270",
    price: 150,
    originalPrice: 180,
    image: "/placeholder.svg?height=200&width=200",
    category: "Clothing",
    brand: "Nike",
    rating: 4.5,
    reviews: 2100,
    inStock: true,
    description: "Comfortable running shoes with Max Air cushioning.",
    features: ["Max Air cushioning", "Breathable mesh", "Durable rubber outsole"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Red", "Blue"],
  },
  {
    id: "4",
    name: "Sony WH-1000XM5",
    price: 399,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    brand: "Sony",
    rating: 4.9,
    reviews: 750,
    inStock: false,
    description: "Industry-leading noise canceling headphones.",
    features: ["30-hour battery", "Quick charge", "Multipoint connection", "Touch controls"],
    colors: ["Black", "Silver"],
  },
  {
    id: "5",
    name: "Adidas Ultraboost 22",
    price: 190,
    image: "/placeholder.svg?height=200&width=200",
    category: "Clothing",
    brand: "Adidas",
    rating: 4.6,
    reviews: 1800,
    inStock: true,
    description: "Energy-returning running shoes for ultimate comfort.",
    features: ["Boost midsole", "Primeknit upper", "Continental rubber outsole"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Core Black", "Cloud White", "Solar Red"],
  },
  {
    id: "6",
    name: "MacBook Pro 16-inch",
    price: 2499,
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    brand: "Apple",
    rating: 4.8,
    reviews: 650,
    inStock: true,
    description: "Powerful laptop for professionals with M3 Pro chip.",
    features: ["16-inch Liquid Retina display", "M3 Pro chip", "22-hour battery", "Studio-quality mics"],
    colors: ["Space Gray", "Silver"],
  },
]

export default function EcommercePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    brand: [],
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
  })

  const { addItem } = useCart()

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const filtered = mockProducts.filter((product) => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false
      }

      // Brand filter
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Rating filter
      if (filters.rating > 0 && product.rating < filters.rating) {
        return false
      }

      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        // In a real app, you'd sort by creation date
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [searchQuery, filters, sortBy])

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
  }

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
  }

  const clearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      priceRange: [0, 1000],
      rating: 0,
      inStock: false,
    })
  }

  return (
    <AppShell>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
          <ProductFilters filters={filters} onFiltersChange={setFilters} onClearFilters={clearFilters} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <ProductSearch onSearch={setSearchQuery} />
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCartComponent onCheckout={() => {}} />
              <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{filteredProducts.length} products found</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No products found matching your criteria.</p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  )
}
