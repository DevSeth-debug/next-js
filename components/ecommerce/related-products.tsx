"use client"

import { ProductCard } from "./product-card"
import type { Product } from "@/types/ecommerce"

interface RelatedProductsProps {
  currentProduct: Product
  products: Product[]
  onAddToCart: (product: Product) => void
  onViewDetails: (product: Product) => void
}

export function RelatedProducts({ currentProduct, products, onAddToCart, onViewDetails }: RelatedProductsProps) {
  // Filter related products by category or brand
  const relatedProducts = products
    .filter(
      (product) =>
        product.id !== currentProduct.id &&
        (product.category === currentProduct.category || product.brand === currentProduct.brand),
    )
    .slice(0, 4)

  if (relatedProducts.length === 0) return null

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
        ))}
      </div>
    </div>
  )
}
