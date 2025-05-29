export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  brand: string
  rating: number
  reviews: number
  inStock: boolean
  description: string
  features: string[]
  colors?: string[]
  sizes?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface Order {
  id: string
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  total: number
  items: CartItem[]
  customer: Customer
}

export interface Customer {
  id: string
  name: string
  email: string
  avatar: string
  joinDate: string
  totalOrders: number
  totalSpent: number
}

export interface FilterOptions {
  category: string[]
  brand: string[]
  priceRange: [number, number]
  rating: number
  inStock: boolean
}
