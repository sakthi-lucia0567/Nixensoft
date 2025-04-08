"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus, Trash2, Save, Star, Edit } from "lucide-react"
import { useCMSStore } from "@/lib/cms-store"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsEditor() {
  const router = useRouter()
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useCMSStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null)

  const handleEditTestimonial = (testimonial: any) => {
    setEditingTestimonial({ ...testimonial })
    setIsDialogOpen(true)
  }

  const handleAddNewTestimonial = () => {
    setEditingTestimonial({
      rating: 5,
      content: "",
      author: "",
      role: "",
      avatar: "",
    })
    setIsDialogOpen(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditingTestimonial((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (rating: number) => {
    setEditingTestimonial((prev: any) => ({ ...prev, rating }))
  }

  const handleSaveTestimonial = () => {
    if (editingTestimonial.id) {
      // Update existing testimonial
      updateTestimonial(editingTestimonial.id, editingTestimonial)
    } else {
      // Add new testimonial
      addTestimonial(editingTestimonial)
    }
    setIsDialogOpen(false)
    setEditingTestimonial(null)
  }

  const handleDeleteTestimonial = (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial? This action cannot be undone.")) {
      deleteTestimonial(id)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/admin/content" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Edit Testimonials</h1>
        </div>

        <Button onClick={handleAddNewTestimonial} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Testimonial
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Testimonials</CardTitle>
          <CardDescription>Manage customer testimonials displayed on your website.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= testimonial.rating
                              ? "text-amber-500 fill-amber-500"
                              : star - 0.5 <= testimonial.rating
                                ? "text-amber-500 fill-amber-500"
                                : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium">{testimonial.rating}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditTestimonial(testimonial)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDeleteTestimonial(testimonial.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3">{testimonial.content}</p>

                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {testimonials.length === 0 && (
              <div className="col-span-2 text-center py-8">
                <p className="text-gray-500 mb-4">No testimonials added yet</p>
                <Button onClick={handleAddNewTestimonial}>Add Your First Testimonial</Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingTestimonial?.id ? "Edit Testimonial" : "Add New Testimonial"}</DialogTitle>
            <DialogDescription>
              {editingTestimonial?.id
                ? "Update the details for this testimonial"
                : "Add a new customer testimonial to your website"}
            </DialogDescription>
          </DialogHeader>

          {editingTestimonial && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= editingTestimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm font-medium">{editingTestimonial.rating}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Testimonial Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={editingTestimonial.content}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="What the customer said about your services..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="author">Customer Name</Label>
                  <Input
                    id="author"
                    name="author"
                    value={editingTestimonial.author}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role/Company</Label>
                  <Input
                    id="role"
                    name="role"
                    value={editingTestimonial.role}
                    onChange={handleInputChange}
                    placeholder="CEO, Company Name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="avatar">Avatar URL</Label>
                <Input
                  id="avatar"
                  name="avatar"
                  value={editingTestimonial.avatar}
                  onChange={handleInputChange}
                  placeholder="https://example.com/avatar.jpg"
                />
                <p className="text-sm text-gray-500">Enter the URL for the customer's profile picture</p>
              </div>

              <Separator />

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-3">Preview</h3>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={editingTestimonial.avatar || "/placeholder.svg?height=48&width=48"}
                      alt={editingTestimonial.author}
                    />
                    <AvatarFallback>
                      {editingTestimonial.author ? editingTestimonial.author.charAt(0) : "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= editingTestimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-2">
                      {editingTestimonial.content || "Testimonial content will appear here..."}
                    </p>
                    <p className="font-medium">{editingTestimonial.author || "Customer Name"}</p>
                    <p className="text-sm text-gray-500">{editingTestimonial.role || "Role, Company"}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveTestimonial} className="bg-blue-600 hover:bg-blue-700">
              <Save className="mr-2 h-4 w-4" /> Save Testimonial
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

