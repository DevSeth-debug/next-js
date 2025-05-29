"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Grid, List, SlidersHorizontal, Star, TrendingUp } from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
import { ProductCard } from "@/components/ecommerce/product-card"
import { ProductFilters } from "@/components/ecommerce/product-filters"
import { ProductSearch } from "@/components/ecommerce/product-search"
import { ShoppingCartComponent } from "@/components/ecommerce/shopping-cart"
import { ProductDetailModal } from "@/components/ecommerce/product-detail-modal"
import { RelatedProducts } from "@/components/ecommerce/related-products"
import { CheckoutModal } from "@/components/ecommerce/checkout-modal"
import { useCart } from "@/hooks/use-cart"
import type { Product, FilterOptions } from "@/types/ecommerce"

// Enhanced mock product data based on the screenshot
const mockProducts: Product[] = [
  {
    id: "1",
    name: "MacBook Pro 15 Retina Touch Bar MV902",
    price: 2500,
    originalPrice: 2799,
    image: "/placeholder.svg?height=300&width=300",
    category: "Notebook",
    brand: "Apple",
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    description:
      "The most powerful MacBook Pro ever with M3 Pro chip, stunning Retina display, and all-day battery life.",
    features: ["15-inch Retina display", "M3 Pro chip", "Touch Bar", "16GB RAM", "512GB SSD"],
    colors: ["Space Gray", "Silver"],
  },
  {
    id: "2",
    name: "Apple Watch Series 5 Edition GPS + Cellular",
    price: 2500,
    image: "/placeholder.svg?height=300&width=300",
    category: "Watch",
    brand: "Apple",
    rating: 4.7,
    reviews: 890,
    inStock: true,
    description: "Advanced health monitoring, GPS tracking, and cellular connectivity in a premium design.",
    features: ["Always-On Retina display", "GPS + Cellular", "ECG app", "Fall detection"],
    colors: ["Gold", "Silver", "Space Gray"],
    sizes: ["40mm", "44mm"],
  },
  {
    id: "3",
    name: "Apple iPhone 11 Pro Max 256GB Space Gray",
    price: 2500,
    image: "/placeholder.svg?height=300&width=300",
    category: "Phone",
    brand: "Apple",
    rating: 4.6,
    reviews: 2100,
    inStock: true,
    description: "Pro camera system, Super Retina XDR display, and A13 Bionic chip.",
    features: ["6.5-inch Super Retina XDR", "Triple camera system", "A13 Bionic chip", "256GB storage"],
    colors: ["Space Gray", "Silver", "Gold", "Midnight Green"],
  },
  {
    id: "4",
    name: "Apple iPhone 11 Pro Max 64GB Midnight Green",
    price: 2500,
    image: "/placeholder.svg?height=300&width=300",
    category: "Phone",
    brand: "Apple",
    rating: 4.6,
    reviews: 1800,
    inStock: false,
    description: "Pro camera system with Night mode, Super Retina XDR display.",
    features: ["6.5-inch Super Retina XDR", "Triple camera system", "A13 Bionic chip", "64GB storage"],
    colors: ["Midnight Green", "Space Gray", "Silver", "Gold"],
  },
  {
    id: "5",
    name: "Samsung Galaxy S24 Ultra 512GB",
    price: 1299,
    originalPrice: 1399,
    image: "/placeholder.svg?height=300&width=300",
    category: "Phone",
    brand: "Samsung",
    rating: 4.7,
    reviews: 950,
    inStock: true,
    description: "Ultimate Galaxy experience with S Pen, AI features, and 200MP camera.",
    features: ["6.8-inch Dynamic AMOLED", "S Pen included", "200MP camera", "512GB storage"],
    colors: ["Titanium Gray", "Titanium Black", "Titanium Violet"],
  },
  {
    id: "6",
    name: "Dell XPS 13 Plus Developer Edition",
    price: 1899,
    image: "/placeholder.svg?height=300&width=300",
    category: "Notebook",
    brand: "Dell",
    rating: 4.5,
    reviews: 650,
    inStock: true,
    description: "Premium ultrabook with InfinityEdge display and powerful performance.",
    features: ["13.4-inch InfinityEdge", "Intel Core i7", "16GB RAM", "1TB SSD"],
    colors: ["Platinum Silver", "Graphite"],
  },
]

const categories = [
  { name: "All Products", count: 283, value: "" },
  { name: "Notebooks", count: 125, value: "Notebook" },
  { name: "Phones", count: 89, value: "Phone" },
  { name: "Watches", count: 45, value: "Watch" },
  { name: "Accessories", count: 24, value: "Accessories" },
]

const featuredProducts = mockProducts.slice(0, 3)

export default function EcommercePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [showCheckout, setShowCheckout] = useState(false)

  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    brand: [],
    priceRange: [0, 3000],
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

      // Category filter from tabs
      if (selectedCategory && product.category !== selectedCategory) {
        return false
      }

      // Advanced filters
      if (filters.category.length > 0 && !filters.category.includes(product.category)) {
        return false
      }

      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false
      }

      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      if (filters.rating > 0 && product.rating < filters.rating) {
        return false
      }

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
        // Keep original order for newest
        break
      default:
        // Featured - keep original order
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, filters, sortBy])

  const handleAddToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    addItem(product, quantity, color, size)
  }

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
  }

  const clearFilters = () => {
    setFilters({
      category: [],
      brand: [],
      priceRange: [0, 3000],
      rating: 0,
      inStock: false,
    })
    setSelectedCategory("")
  }

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Discover Amazing Products</h1>
            <p className="text-xl mb-6 text-green-100">
              Shop the latest technology and premium products with unbeatable prices and fast shipping.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>

        {/* Main Shopping Section */}
        <div>
          {/* Header with Search and Cart */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <ProductSearch onSearch={setSearchQuery} placeholder="Search for products..." />
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCartComponent onCheckout={() => setShowCheckout(true)} />
              <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="whitespace-nowrap"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
              <ProductFilters filters={filters} onFiltersChange={setFilters} onClearFilters={clearFilters} />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{filteredProducts.length} products found</p>
                  {(searchQuery || selectedCategory || filters.category.length > 0) && (
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all filters
                    </Button>
                  )}
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
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No products found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your search or filter criteria.</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Related Products */}
              {selectedProduct && (
                <RelatedProducts
                  currentProduct={selectedProduct}
                  products={mockProducts}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        onOrderComplete={() => setShowCheckout(false)}
      />
    </AppShell>
  )
}
