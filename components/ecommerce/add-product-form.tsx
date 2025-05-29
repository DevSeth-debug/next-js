"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Upload,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Trash2,
} from "lucide-react"

interface AddProductFormProps {
  isOpen: boolean
  onClose: () => void
  onSave: (productData: any) => void
}

const categories = [
  { value: "phone", label: "Phone" },
  { value: "notebook", label: "Notebook" },
  { value: "watch", label: "Watch" },
  { value: "accessories", label: "Accessories" },
]

export function AddProductForm({ isOpen, onClose, onSave }: AddProductFormProps) {
  const [formData, setFormData] = useState({
    name: "Apple iPhone 11 Pro Max 64GB Midnight Green",
    description: "",
    category: "phone",
    price: "2500",
    discount: "15",
    images: [] as File[],
    tags: ["Apple", "iPhone", "64GB"],
  })

  const [newTag, setNewTag] = useState("")
  const [isUploading, setIsUploading] = useState(false)

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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

  const handleImageUpload = (files: FileList | null) => {
    if (files) {
      setIsUploading(true)
      // Simulate upload delay
      setTimeout(() => {
        const newImages = Array.from(files)
        updateField("images", [...formData.images, ...newImages])
        setIsUploading(false)
      }, 1500)
    }
  }

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index)
    updateField("images", newImages)
  }

  const handleSave = () => {
    onSave(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose} />

      {/* Form Panel */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-xl border-l dark:border-gray-700 z-50 transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Add Product</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="dark:text-gray-300 dark:hover:bg-gray-700">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
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
                className="min-h-24 rounded-t-none border-t-0"
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

            {/* Price and Discount */}
            <div className="grid grid-cols-2 gap-4">
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
                <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Discount</Label>
                <div className="relative">
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
                  <Input
                    value={formData.discount}
                    onChange={(e) => updateField("discount", e.target.value)}
                    className="pr-8"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Product Images */}
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Product Images</Label>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center mb-4">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Drag and Drop or{" "}
                  <label className="text-green-600 cursor-pointer hover:underline">
                    Browse
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e.target.files)}
                    />
                  </label>{" "}
                  to upload
                </p>
              </div>

              {/* Image Previews */}
              <div className="grid grid-cols-4 gap-3">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <img
                        src={URL.createObjectURL(image) || "/placeholder.svg"}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                ))}

                {/* Empty slots */}
                {Array.from({ length: Math.max(0, 4 - formData.images.length) }).map((_, index) => (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 flex items-center justify-center"
                  >
                    <Upload className="w-6 h-6 text-gray-300" />
                  </div>
                ))}

                {/* Loading indicator */}
                {isUploading && (
                  <div className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-600 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </div>
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
          </div>

          {/* Footer */}
          <div className="p-6 border-t dark:border-gray-700">
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
