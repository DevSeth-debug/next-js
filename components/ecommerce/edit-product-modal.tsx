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
import {
  X,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Upload,
  Trash2,
  ChevronUp,
  ChevronDown,
} from "lucide-react"

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
  const [formData, setFormData] = useState({
    // Basic info
    id: product?.id || "",
    name: product?.name || "Apple iPhone 11 Pro Max 64GB Midnight Green",
    description: product?.description || "",
    category: product?.category || "phone",
    tags: product?.tags || ["Apple", "iPhone", "64GB"],

    // Pricing
    taxExcludedPrice: "2500",
    taxIncludedPrice: "0.00",
    taxRule: "us-al",
    unitPrice: "0.00",
    per: "0",

    // Inventory
    sku: "0",
    quantity: "0",

    // Shipping
    width: "0",
    height: "0",
    depth: "0",
    weight: "0",
    extraShippingFee: "0.00",

    // Images
    images: product?.images || [],
  })

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
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Images</h2>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Drag and Drop or{" "}
                  <label className="text-green-600 cursor-pointer hover:underline">
                    Browse
                    <input type="file" multiple accept="image/*" className="hidden" />
                  </label>{" "}
                  to upload
                </p>
              </div>

              {/* Images Table */}
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                  <span>Image</span>
                  <span>Position</span>
                  <span>Cover</span>
                  <span></span>
                </div>

                {[1, 2, 3].map((index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-900 dark:text-white">{index}</span>
                    <div className="flex items-center">
                      {index === 1 ? (
                        <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                      )}
                    </div>
                    <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Pricing</h2>

              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                  Tax Excluded Price
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    value={formData.taxExcludedPrice}
                    onChange={(e) => updateField("taxExcludedPrice", e.target.value)}
                    className="pl-8"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                  Tax Included Price
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    value={formData.taxIncludedPrice}
                    onChange={(e) => updateField("taxIncludedPrice", e.target.value)}
                    className="pl-8"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-500 dark:text-gray-400">Tax Rule</Label>
                  <Button variant="link" className="text-green-600 hover:text-green-700 p-0 h-auto text-sm">
                    Create New Tax
                  </Button>
                </div>
                <Select value={formData.taxRule} onValueChange={(value) => updateField("taxRule", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us-al">US-AL Rate (4%)</SelectItem>
                    <SelectItem value="us-ca">US-CA Rate (8.5%)</SelectItem>
                    <SelectItem value="us-ny">US-NY Rate (8%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Unit Price</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <Input
                      value={formData.unitPrice}
                      onChange={(e) => updateField("unitPrice", e.target.value)}
                      className="pl-8"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Per</Label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={formData.per}
                      onChange={(e) => updateField("per", e.target.value)}
                      placeholder="0"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-4 h-3 p-0"
                        onClick={() => updateField("per", String(Number.parseInt(formData.per) + 1))}
                      >
                        <ChevronUp className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-4 h-3 p-0"
                        onClick={() => updateField("per", String(Math.max(0, Number.parseInt(formData.per) - 1)))}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Inventory Tab */}
            <TabsContent value="inventory" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Inventory</h2>

              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">SKU</Label>
                <Input value={formData.sku} onChange={(e) => updateField("sku", e.target.value)} placeholder="0" />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Quantity</Label>
                <div className="relative">
                  <Input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => updateField("quantity", e.target.value)}
                    placeholder="0"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-3 p-0"
                      onClick={() => updateField("quantity", String(Number.parseInt(formData.quantity) + 1))}
                    >
                      <ChevronUp className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-3 p-0"
                      onClick={() =>
                        updateField("quantity", String(Math.max(0, Number.parseInt(formData.quantity) - 1)))
                      }
                    >
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Shipping Tab */}
            <TabsContent value="shipping" className="mt-0 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shipping</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Width</Label>
                  <Input
                    value={formData.width}
                    onChange={(e) => updateField("width", e.target.value)}
                    placeholder="0cm"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Height</Label>
                  <Input
                    value={formData.height}
                    onChange={(e) => updateField("height", e.target.value)}
                    placeholder="0cm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Depth</Label>
                  <Input
                    value={formData.depth}
                    onChange={(e) => updateField("depth", e.target.value)}
                    placeholder="0cm"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">Weight</Label>
                  <Input
                    value={formData.weight}
                    onChange={(e) => updateField("weight", e.target.value)}
                    placeholder="0kg"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                  Extra Shipping Fee
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    value={formData.extraShippingFee}
                    onChange={(e) => updateField("extraShippingFee", e.target.value)}
                    className="pl-8"
                    placeholder="0.00"
                  />
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
