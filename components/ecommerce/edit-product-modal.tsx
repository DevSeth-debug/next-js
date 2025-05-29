"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, Upload } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  category: string
  price: string
  originalPrice?: string
  discount?: string
  tags: string[]
  images: string[]
  inventory: {
    stock: number
    sku: string
    barcode: string
  }
  shipping: {
    weight: string
    dimensions: {
      length: string
      width: string
      height: string
    }
  }
}

interface EditProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product | null
  onSave: (productData: Product) => void
}

const categories = [
  { value: "phone", label: "Phone" },
  { value: "notebook", label: "Notebook" },
  { value: "watch", label: "Watch" },
  { value: "accessories", label: "Accessories" },
]

export function EditProductModal({ isOpen, onClose, product, onSave }: EditProductModalProps) {
  const [formData, setFormData] = useState<Product>(
    product || {
      id: "",
      name: "Apple iPhone 11 Pro Max 64GB Midnight Green",
      description: "",
      category: "phone",
      price: "2500",
      originalPrice: "2800",
      discount: "15",
      tags: ["Apple", "iPhone", "64GB"],
      images: [],
      inventory: {
        stock: 50,
        sku: "IPH11PM64MG",
        barcode: "123456789012",
      },
      shipping: {
        weight: "0.5",
        dimensions: {
          length: "15.8",
          width: "7.7",
          height: "0.8",
        },
      },
    },
  )

  const [newTag, setNewTag] = useState("")
  const [activeTab, setActiveTab] = useState("information")

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const updateNestedField = (parent: string, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof Product],
        [field]: value,
      },
    }))
  }

  const addTag = (tag: string) => {
    if (tag.trim() && !formData.tags.includes(tag.trim())) {
      updateField("tags", [...formData.tags, tag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    updateField(
      "tags",
      formData.tags.filter((tag) => tag !== tagToRemove),
    )
  }

  const handleSave = () => {
    onSave(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="border-b px-6 pt-6">
            <TabsList className="grid w-full grid-cols-5 bg-transparent p-0 h-auto">
              <TabsTrigger
                value="information"
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3"
              >
                INFORMATION
              </TabsTrigger>
              <TabsTrigger
                value="images"
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3"
              >
                IMAGES
              </TabsTrigger>
              <TabsTrigger
                value="pricing"
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3"
              >
                PRICING
              </TabsTrigger>
              <TabsTrigger
                value="inventory"
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3"
              >
                INVENTORY
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="data-[state=active]:bg-transparent data-[state=active]:text-green-600 data-[state=active]:border-b-2 data-[state=active]:border-green-600 rounded-none pb-3"
              >
                SHIPPING
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
            {/* Information Tab */}
            <TabsContent value="information" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Information</h2>

              {/* Product Name */}
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                  Product Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Description */}
              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Description</Label>

                {/* Rich Text Toolbar */}
                <div className="flex items-center gap-1 p-2 border border-b-0 rounded-t-md bg-gray-50 dark:bg-gray-700">
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <span className="text-sm font-medium">A</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Underline className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-1" />
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <AlignLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <AlignCenter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <AlignRight className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <AlignJustify className="w-4 h-4" />
                  </Button>
                </div>

                <Textarea
                  placeholder="Type something"
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  className="min-h-32 rounded-t-none border-t-0"
                />
              </div>

              {/* Category */}
              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Category</Label>
                <Select value={formData.category} onValueChange={(value) => updateField("category", value)}>
                  <SelectTrigger>
                    <SelectValue />
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

              {/* Tags */}
              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Tags</Label>

                {/* Existing Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                      {tag}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 hover:bg-red-100 dark:hover:bg-red-900"
                        onClick={() => removeTag(tag)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>

                {/* Add New Tag */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addTag(newTag)
                      }
                    }}
                    className="flex-1"
                  />
                  <Button variant="outline" onClick={() => addTag(newTag)} disabled={!newTag.trim()}>
                    Add
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Images Tab */}
            <TabsContent value="images" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Product Images</h2>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  Drag and Drop or{" "}
                  <label className="text-green-600 cursor-pointer hover:underline">
                    Browse
                    <input type="file" multiple accept="image/*" className="hidden" />
                  </label>{" "}
                  to upload
                </p>
                <p className="text-sm text-gray-500">Recommended size: 800x800px</p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 flex items-center justify-center"
                  >
                    <Upload className="w-8 h-8 text-gray-300" />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Pricing</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Price</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <Input
                      value={formData.price}
                      onChange={(e) => updateField("price", e.target.value)}
                      className="pl-8"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Original Price
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <Input
                      value={formData.originalPrice}
                      onChange={(e) => updateField("originalPrice", e.target.value)}
                      className="pl-8"
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Discount (%)</Label>
                <Input
                  value={formData.discount}
                  onChange={(e) => updateField("discount", e.target.value)}
                  placeholder="0"
                />
              </div>
            </TabsContent>

            {/* Inventory Tab */}
            <TabsContent value="inventory" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Inventory</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                    Stock Quantity
                  </Label>
                  <Input
                    type="number"
                    value={formData.inventory.stock}
                    onChange={(e) => updateNestedField("inventory", "stock", Number.parseInt(e.target.value))}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">SKU</Label>
                  <Input
                    value={formData.inventory.sku}
                    onChange={(e) => updateNestedField("inventory", "sku", e.target.value)}
                    placeholder="Product SKU"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Barcode</Label>
                <Input
                  value={formData.inventory.barcode}
                  onChange={(e) => updateNestedField("inventory", "barcode", e.target.value)}
                  placeholder="Product barcode"
                />
              </div>
            </TabsContent>

            {/* Shipping Tab */}
            <TabsContent value="shipping" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shipping</h2>

              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Weight (kg)</Label>
                <Input
                  value={formData.shipping.weight}
                  onChange={(e) => updateNestedField("shipping", "weight", e.target.value)}
                  placeholder="0.0"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                  Dimensions (cm)
                </Label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label className="text-xs text-gray-500 mb-1 block">Length</Label>
                    <Input
                      value={formData.shipping.dimensions.length}
                      onChange={(e) =>
                        updateNestedField("shipping", "dimensions", {
                          ...formData.shipping.dimensions,
                          length: e.target.value,
                        })
                      }
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500 mb-1 block">Width</Label>
                    <Input
                      value={formData.shipping.dimensions.width}
                      onChange={(e) =>
                        updateNestedField("shipping", "dimensions", {
                          ...formData.shipping.dimensions,
                          width: e.target.value,
                        })
                      }
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label className="text-xs text-gray-500 mb-1 block">Height</Label>
                    <Input
                      value={formData.shipping.dimensions.height}
                      onChange={(e) =>
                        updateNestedField("shipping", "dimensions", {
                          ...formData.shipping.dimensions,
                          height: e.target.value,
                        })
                      }
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>

          {/* Footer */}
          <div className="border-t px-6 py-4">
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
