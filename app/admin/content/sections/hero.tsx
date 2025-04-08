"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus, Save, Edit } from "lucide-react"
import { useCMSStore } from "@/lib/cms-store"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const pageOptions = [
  { value: "our-story", label: "Our Story" },
  { value: "blog", label: "Blog" },
  { value: "contact", label: "Contact" },
  { value: "features", label: "Features/Services" },
]

const colorOptions = [
  { name: "Blue", from: "blue-600", to: "blue-800" },
  { name: "Purple", from: "purple-600", to: "purple-800" },
  { name: "Teal", from: "teal-600", to: "teal-800" },
  { name: "Green", from: "green-600", to: "green-800" },
  { name: "Red", from: "red-600", to: "red-800" },
  { name: "Amber", from: "amber-600", to: "amber-800" },
  { name: "Pink", from: "pink-600", to: "pink-800" },
  { name: "Indigo", from: "indigo-600", to: "indigo-800" },
]

export default function PageHeroesEditor() {
  const router = useRouter()
  const { pageHeroes, updatePageHero, addPageHero } = useCMSStore()
  const [activeTab, setActiveTab] = useState("our-story")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingHero, setEditingHero] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleEditHero = (hero: any) => {
    setEditingHero({ ...hero })
    setIsDialogOpen(true)
  }

  const handleAddNewHero = () => {
    setEditingHero({
      page: "",
      title: "",
      description: "",
      backgroundGradient: {
        from: "blue-600",
        to: "blue-800",
      },
    })
    setIsDialogOpen(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditingHero((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleColorSelect = (colorName: string) => {
    const color = colorOptions.find((c) => c.name === colorName)
    if (color && editingHero) {
      setEditingHero({
        ...editingHero,
        backgroundGradient: {
          from: color.from,
          to: color.to,
        },
      })
    }
  }

  const handleSaveHero = () => {
    if (editingHero.id) {
      // Update existing hero
      updatePageHero(editingHero.id, editingHero)
    } else {
      // Add new hero
      addPageHero(editingHero)
    }
    setIsDialogOpen(false)
    setEditingHero(null)
  }

  const getCurrentPageHero = () => {
    return pageHeroes.find((hero) => hero.page === activeTab)
  }

  const currentHero = getCurrentPageHero()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/admin/content" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Edit Page Heroes</h1>
        </div>

        <Button onClick={handleAddNewHero} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Page Hero
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          {pageOptions.map((page) => (
            <TabsTrigger key={page.value} value={page.value}>
              {page.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {pageOptions.map((page) => (
          <TabsContent key={page.value} value={page.value}>
            <Card>
              <CardHeader>
                <CardTitle>{page.label} Hero</CardTitle>
                <CardDescription>Edit the hero section for the {page.label} page.</CardDescription>
              </CardHeader>
              <CardContent>
                {pageHeroes.find((hero) => hero.page === page.value) ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Content</h3>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm text-gray-500">Title</Label>
                            <p className="font-medium">{currentHero?.title}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-500">Description</Label>
                            <p>{currentHero?.description}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Appearance</h3>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-sm text-gray-500">Background</Label>
                            <div
                              className={`h-20 rounded-md bg-gradient-to-r from-${currentHero?.backgroundGradient.from} to-${currentHero?.backgroundGradient.to}`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button onClick={() => handleEditHero(currentHero)} className="bg-blue-600 hover:bg-blue-700">
                        <Edit className="mr-2 h-4 w-4" /> Edit Hero
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">No hero section configured for this page</p>
                    <Button onClick={handleAddNewHero}>Add Hero Section</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingHero?.id ? "Edit Page Hero" : "Add New Page Hero"}</DialogTitle>
            <DialogDescription>
              {editingHero?.id ? "Update the hero section for this page" : "Add a new hero section for a page"}
            </DialogDescription>
          </DialogHeader>

          {editingHero && (
            <div className="space-y-6">
              {!editingHero.id && (
                <div className="space-y-2">
                  <Label htmlFor="page">Page</Label>
                  <Select
                    value={editingHero.page}
                    onValueChange={(value) => setEditingHero({ ...editingHero, page: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent>
                      {pageOptions.map((page) => (
                        <SelectItem key={page.value} value={page.value}>
                          {page.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={editingHero.title}
                  onChange={handleInputChange}
                  placeholder="Page Title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={editingHero.description}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Brief description of the page"
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Background Gradient</Label>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((color) => (
                    <Button
                      key={color.name}
                      type="button"
                      variant="outline"
                      className={`h-10 bg-gradient-to-r from-${color.from} to-${color.to} text-white hover:opacity-90 ${
                        editingHero.backgroundGradient.from === color.from ? "ring-2 ring-offset-2 ring-blue-500" : ""
                      }`}
                      onClick={() => handleColorSelect(color.name)}
                    >
                      {color.name}
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-3">Preview</h3>
                <div
                  className={`bg-gradient-to-r from-${editingHero.backgroundGradient.from} to-${editingHero.backgroundGradient.to} p-8 rounded-lg text-white`}
                >
                  <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold mb-2">{editingHero.title || "Page Title"}</h2>
                    <p>{editingHero.description || "Page description will appear here..."}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveHero} className="bg-blue-600 hover:bg-blue-700">
              <Save className="mr-2 h-4 w-4" /> Save Hero
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

