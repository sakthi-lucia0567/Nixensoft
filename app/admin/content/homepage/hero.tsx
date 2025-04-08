"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus, Trash2, Save } from "lucide-react"
import { useCMSStore } from "@/lib/cms-store"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function HeroSectionEditor() {
  const router = useRouter()
  const { heroSection, updateHeroSection } = useCMSStore()
  const [formData, setFormData] = useState(heroSection)
  const [companyType, setCompanyType] = useState("")
  const [statValue, setStatValue] = useState("")
  const [statLabel, setStatLabel] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setFormData(heroSection)
  }, [heroSection])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddCompanyType = () => {
    if (companyType.trim()) {
      setFormData((prev) => ({
        ...prev,
        companyTypes: [...prev.companyTypes, companyType.trim()],
      }))
      setCompanyType("")
    }
  }

  const handleRemoveCompanyType = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      companyTypes: prev.companyTypes.filter((_, i) => i !== index),
    }))
  }

  const handleAddStat = () => {
    if (statValue.trim() && statLabel.trim()) {
      setFormData((prev) => ({
        ...prev,
        stats: [...prev.stats, { value: statValue.trim(), label: statLabel.trim() }],
      }))
      setStatValue("")
      setStatLabel("")
    }
  }

  const handleRemoveStat = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      stats: prev.stats.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      updateHeroSection(formData)
      alert("Hero section updated successfully!")
      router.push("/admin/content")
    } catch (error) {
      console.error("Error updating hero section:", error)
      alert("Failed to update hero section. Please try again.")
    } finally {
      setIsSubmitting(false)
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
          <h1 className="text-3xl font-bold">Edit Hero Section</h1>
        </div>

        <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span> Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Hero Content</CardTitle>
          <CardDescription>
            Edit the main headline, description, and call-to-action for your homepage hero section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <p className="text-sm text-gray-500">Use {"{type}"} as a placeholder for the rotating company types.</p>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Best {type} in Coimbatore"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                placeholder="We are the best Digital Marketing agency in Coimbatore..."
              />
            </div>

            <div className="space-y-2">
              <Label>Company Types (Rotating Text)</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.companyTypes.map((type, index) => (
                  <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-sm">{type}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveCompanyType(index)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  placeholder="Add company type"
                />
                <Button type="button" onClick={handleAddCompanyType} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Statistics</Label>
              <div className="space-y-4 mb-4">
                {formData.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                    <div className="flex-grow">
                      <div className="font-medium">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveStat(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Input value={statValue} onChange={(e) => setStatValue(e.target.value)} placeholder="Value (e.g. 3+)" />
                <Input
                  value={statLabel}
                  onChange={(e) => setStatLabel(e.target.value)}
                  placeholder="Label (e.g. Years Experience)"
                />
              </div>
              <Button type="button" onClick={handleAddStat} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" /> Add Statistic
              </Button>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ctaText">CTA Button Text</Label>
                <Input
                  id="ctaText"
                  name="ctaText"
                  value={formData.ctaText}
                  onChange={handleInputChange}
                  placeholder="Start a Project"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ctaLink">CTA Button Link</Label>
                <Input
                  id="ctaLink"
                  name="ctaLink"
                  value={formData.ctaLink}
                  onChange={handleInputChange}
                  placeholder="/contact"
                />
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="formTitle">Contact Form Title</Label>
                <Input
                  id="formTitle"
                  name="formTitle"
                  value={formData.formTitle}
                  onChange={handleInputChange}
                  placeholder="Contact Us"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="formSubtitle">Contact Form Subtitle</Label>
                <Input
                  id="formSubtitle"
                  name="formSubtitle"
                  value={formData.formSubtitle}
                  onChange={handleInputChange}
                  placeholder="Fill out the form below to get started"
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>This is how your hero section will appear on the homepage.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-6 rounded-lg">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold mb-4">
                {formData.title.replace("{type}", formData.companyTypes[0] || "Digital Marketing Company")}
              </h1>
              <p className="text-gray-700 mb-6">{formData.description}</p>
              <div className="mb-6">
                <Button className="bg-blue-600 hover:bg-blue-700">{formData.ctaText}</Button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {formData.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

