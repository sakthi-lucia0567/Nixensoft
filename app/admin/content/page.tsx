"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Home, FileText, Layout, Layers, PanelLeft } from "lucide-react"

export default function ContentManagementPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Content Management</h1>
        <p className="text-muted-foreground">
          Manage all website content from one central location. Edit sections, pages, and components.
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="sections">Sections</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Homepage Sections</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">9 Sections</div>
                <p className="text-xs text-muted-foreground">
                  Hero, Services, Companies, Innovation, Process, Testimonials, CTA, Blog, FAQ
                </p>
                <Link
                  href="/admin/content/homepage"
                  className="inline-flex items-center text-sm text-blue-600 mt-4 hover:underline"
                >
                  Edit Homepage <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Page Content</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5 Pages</div>
                <p className="text-xs text-muted-foreground">Our Story, Blog, Contact, Careers, Services</p>
                <Link
                  href="/admin/content/pages"
                  className="inline-flex items-center text-sm text-blue-600 mt-4 hover:underline"
                >
                  Edit Pages <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reusable Sections</CardTitle>
                <Layers className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4 Sections</div>
                <p className="text-xs text-muted-foreground">Hero, CTA, Testimonials, FAQ</p>
                <Link
                  href="/admin/content/sections"
                  className="inline-flex items-center text-sm text-blue-600 mt-4 hover:underline"
                >
                  Edit Sections <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">UI Components</CardTitle>
                <Layout className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12 Components</div>
                <p className="text-xs text-muted-foreground">Buttons, Cards, Forms, Navigation, Footer</p>
                <Link
                  href="/admin/content/components"
                  className="inline-flex items-center text-sm text-blue-600 mt-4 hover:underline"
                >
                  Edit Components <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Global Settings</CardTitle>
                <PanelLeft className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3 Settings</div>
                <p className="text-xs text-muted-foreground">Navigation, Footer, Announcement Banner</p>
                <Link
                  href="/admin/content/global"
                  className="inline-flex items-center text-sm text-blue-600 mt-4 hover:underline"
                >
                  Edit Settings <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="homepage" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>Edit the main hero section on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/hero"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Hero Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Services Section</CardTitle>
                <CardDescription>Edit the services showcase on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/services"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Services Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Companies Section</CardTitle>
                <CardDescription>Edit the companies showcase on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/companies"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Companies Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Innovation Section</CardTitle>
                <CardDescription>Edit the innovation section on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/innovation"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Innovation Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Process Section</CardTitle>
                <CardDescription>Edit the process steps on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/process"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Process Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testimonials</CardTitle>
                <CardDescription>Edit the testimonials on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/testimonials"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Testimonials <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA Section</CardTitle>
                <CardDescription>Edit the call-to-action section on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/cta"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit CTA Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blog Section</CardTitle>
                <CardDescription>Edit the blog preview on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/blog"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Blog Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQ Section</CardTitle>
                <CardDescription>Edit the frequently asked questions on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/homepage/faqs"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit FAQ Section <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pages" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Our Story Page</CardTitle>
                <CardDescription>Edit the Our Story page content</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/pages/our-story"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Our Story Page <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blog Page</CardTitle>
                <CardDescription>Edit the Blog page layout and components</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/pages/blog"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Blog Page <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Page</CardTitle>
                <CardDescription>Edit the Contact page content and form</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/pages/contact"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Contact Page <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Careers Page</CardTitle>
                <CardDescription>Edit the Careers page content</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/pages/careers"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Careers Page <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Services Pages</CardTitle>
                <CardDescription>Edit the various service pages</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/pages/services"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Services Pages <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sections" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Hero Sections</CardTitle>
                <CardDescription>Edit reusable hero sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/sections/hero"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Hero Sections <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CTA Sections</CardTitle>
                <CardDescription>Edit reusable call-to-action sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/sections/cta"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit CTA Sections <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testimonial Sections</CardTitle>
                <CardDescription>Edit reusable testimonial sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/sections/testimonials"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Testimonial Sections <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAQ Sections</CardTitle>
                <CardDescription>Edit reusable FAQ sections</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/sections/faqs"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit FAQ Sections <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="components" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
                <CardDescription>Edit the main navigation components</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/components/navigation"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Navigation <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Footer</CardTitle>
                <CardDescription>Edit the footer components</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/components/footer"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Footer <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forms</CardTitle>
                <CardDescription>Edit the form components</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href="/admin/content/components/forms"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Edit Forms <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

