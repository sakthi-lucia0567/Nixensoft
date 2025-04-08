"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useSeoStore } from "@/lib/seo-store"
import { AlertCircle, CheckCircle2, FileText, Globe, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SeoPage() {
  const { seoSettings, updateSeoSettings, generateSitemap } = useSeoStore()
  const [activeTab, setActiveTab] = useState("global")
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [globalSettings, setGlobalSettings] = useState({
    siteName: seoSettings.global.siteName,
    siteDescription: seoSettings.global.siteDescription,
    defaultOgImage: seoSettings.global.defaultOgImage,
    googleAnalyticsId: seoSettings.global.googleAnalyticsId,
    googleVerification: seoSettings.global.googleVerification,
  })
  const [robotsTxt, setRobotsTxt] = useState(seoSettings.technical.robotsTxt)
  const [selectedPage, setSelectedPage] = useState("home")
  const [pageSettings, setPageSettings] = useState(seoSettings.pages.home)

  useEffect(() => {
    if (selectedPage) {
      setPageSettings(
        seoSettings.pages[selectedPage] || {
          title: "",
          description: "",
          canonical: "",
          ogTitle: "",
          ogDescription: "",
          ogImage: "",
        },
      )
    }
  }, [selectedPage, seoSettings.pages])

  const handleGlobalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateSeoSettings({
      ...seoSettings,
      global: globalSettings,
    })
    showSuccess("Global SEO settings updated successfully")
  }

  const handleRobotsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateSeoSettings({
      ...seoSettings,
      technical: {
        ...seoSettings.technical,
        robotsTxt,
      },
    })
    showSuccess("Robots.txt updated successfully")
  }

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateSeoSettings({
      ...seoSettings,
      pages: {
        ...seoSettings.pages,
        [selectedPage]: pageSettings,
      },
    })
    showSuccess(`SEO settings for ${selectedPage} page updated successfully`)
  }

  const handleSitemapGeneration = () => {
    try {
      generateSitemap()
      showSuccess("Sitemap generated successfully")
    } catch (err) {
      setError("Failed to generate sitemap")
    }
  }

  const showSuccess = (message: string) => {
    setSuccess(message)
    setError(null)
    setTimeout(() => setSuccess(null), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">SEO Management</h1>
        <Button onClick={handleSitemapGeneration}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Generate Sitemap
        </Button>
      </div>

      {success && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">{success}</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="global">Global Settings</TabsTrigger>
          <TabsTrigger value="pages">Page SEO</TabsTrigger>
          <TabsTrigger value="technical">Technical SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global SEO Settings</CardTitle>
              <CardDescription>
                These settings apply to your entire website and serve as defaults when page-specific settings are not
                provided.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGlobalSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="siteName" className="text-sm font-medium">
                    Site Name
                  </label>
                  <Input
                    id="siteName"
                    value={globalSettings.siteName}
                    onChange={(e) => setGlobalSettings({ ...globalSettings, siteName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="siteDescription" className="text-sm font-medium">
                    Site Description
                  </label>
                  <Textarea
                    id="siteDescription"
                    value={globalSettings.siteDescription}
                    onChange={(e) => setGlobalSettings({ ...globalSettings, siteDescription: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="defaultOgImage" className="text-sm font-medium">
                    Default Social Image URL
                  </label>
                  <Input
                    id="defaultOgImage"
                    value={globalSettings.defaultOgImage}
                    onChange={(e) => setGlobalSettings({ ...globalSettings, defaultOgImage: e.target.value })}
                    placeholder="https://example.com/default-image.jpg"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="googleAnalyticsId" className="text-sm font-medium">
                    Google Analytics ID
                  </label>
                  <Input
                    id="googleAnalyticsId"
                    value={globalSettings.googleAnalyticsId}
                    onChange={(e) => setGlobalSettings({ ...globalSettings, googleAnalyticsId: e.target.value })}
                    placeholder="G-XXXXXXXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="googleVerification" className="text-sm font-medium">
                    Google Site Verification
                  </label>
                  <Input
                    id="googleVerification"
                    value={globalSettings.googleVerification}
                    onChange={(e) => setGlobalSettings({ ...globalSettings, googleVerification: e.target.value })}
                    placeholder="Verification code from Google Search Console"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Save Global Settings
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page-Specific SEO</CardTitle>
              <CardDescription>
                Customize SEO settings for individual pages to improve their search engine visibility.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="pageSelect" className="text-sm font-medium">
                    Select Page
                  </label>
                  <Select value={selectedPage} onValueChange={setSelectedPage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Page</SelectItem>
                      <SelectItem value="blog">Blog Page</SelectItem>
                      <SelectItem value="contact">Contact Page</SelectItem>
                      <SelectItem value="our-story">Our Story Page</SelectItem>
                      <SelectItem value="services">Services Page</SelectItem>
                      <SelectItem value="web-design">Web Design Page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <form onSubmit={handlePageSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="pageTitle" className="text-sm font-medium">
                      Page Title
                    </label>
                    <Input
                      id="pageTitle"
                      value={pageSettings.title}
                      onChange={(e) => setPageSettings({ ...pageSettings, title: e.target.value })}
                      placeholder="Page Title | Site Name"
                    />
                    <p className="text-xs text-gray-500">Recommended length: 50-60 characters</p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="pageDescription" className="text-sm font-medium">
                      Meta Description
                    </label>
                    <Textarea
                      id="pageDescription"
                      value={pageSettings.description}
                      onChange={(e) => setPageSettings({ ...pageSettings, description: e.target.value })}
                      rows={3}
                      placeholder="A brief description of the page content"
                    />
                    <p className="text-xs text-gray-500">Recommended length: 120-160 characters</p>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="canonical" className="text-sm font-medium">
                      Canonical URL
                    </label>
                    <Input
                      id="canonical"
                      value={pageSettings.canonical}
                      onChange={(e) => setPageSettings({ ...pageSettings, canonical: e.target.value })}
                      placeholder="https://example.com/page"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ogTitle" className="text-sm font-medium">
                      Open Graph Title
                    </label>
                    <Input
                      id="ogTitle"
                      value={pageSettings.ogTitle}
                      onChange={(e) => setPageSettings({ ...pageSettings, ogTitle: e.target.value })}
                      placeholder="Title for social media sharing"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ogDescription" className="text-sm font-medium">
                      Open Graph Description
                    </label>
                    <Textarea
                      id="ogDescription"
                      value={pageSettings.ogDescription}
                      onChange={(e) => setPageSettings({ ...pageSettings, ogDescription: e.target.value })}
                      rows={3}
                      placeholder="Description for social media sharing"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ogImage" className="text-sm font-medium">
                      Open Graph Image URL
                    </label>
                    <Input
                      id="ogImage"
                      value={pageSettings.ogImage}
                      onChange={(e) => setPageSettings({ ...pageSettings, ogImage: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Save Page Settings
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Technical SEO</CardTitle>
              <CardDescription>
                Configure technical SEO settings like robots.txt, sitemap, and structured data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Robots.txt</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Globe className="h-4 w-4 mr-1" />
                      <span>Available at: /robots.txt</span>
                    </div>
                  </div>

                  <form onSubmit={handleRobotsSubmit} className="space-y-4">
                    <Textarea
                      value={robotsTxt}
                      onChange={(e) => setRobotsTxt(e.target.value)}
                      rows={8}
                      className="font-mono text-sm"
                    />
                    <Button type="submit">Update Robots.txt</Button>
                  </form>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Sitemap</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>Available at: /sitemap.xml</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-sm text-gray-600 mb-4">
                      The sitemap is automatically generated based on your website's pages. Click the "Generate Sitemap"
                      button to update it.
                    </p>
                    <Button onClick={handleSitemapGeneration}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Generate Sitemap
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

