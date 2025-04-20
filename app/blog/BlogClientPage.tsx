"use client";
import AnnouncementBanner from "@/components/announcement-banner";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Seo } from "@/components/seo";
import { SchemaMarkup } from "@/components/schema-markup";
import { useBlogStore } from "@/lib/blog-store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogClientPage() {
  // This would normally be server-side data fetching
  // For demo purposes, we're using the client-side store
  const { blogs, categories, tags } = useBlogStore.getState();

  // Sort blogs by date (newest first)
  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.createdAt || 0).getTime();
    const dateB = new Date(b.createdAt || 0).getTime();
    return dateB - dateA;
  });

  // Featured blog (latest published)
  const featuredBlog =
    sortedBlogs.find((blog) => blog.status === "published") || sortedBlogs[0];

  // Recent blogs (excluding featured)
  const recentBlogs = sortedBlogs
    .filter((blog) => blog.id !== featuredBlog?.id)
    .slice(0, 6);

  return (
    <>
      <Seo
        pageName="Blog | Nixensoft - Digital Marketing Agency"
        description="Explore the latest insights, tips, and trends in digital marketing from Nixensoft, a leading digital marketing agency in Coimbatore."
        canonical="https://www.nixensoft.com/blog"
        ogTitle="Blog - Nixensoft Digital Marketing Agency"
        ogDescription="Stay updated with the latest digital marketing trends, tips, and insights from our experts."
      />
      <SchemaMarkup
        pageName="blog"
        type="Blog"
        data={{
          name: "Nixensoft Blog",
          description: "Digital marketing insights, tips, and trends.",
        }}
      />

      <AnnouncementBanner />
      <MainNav />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white h-[25vw] max-h-[400px] min-h-[200px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/premium-photo/work-from-home-workspace-with-coffee-plants_327191-14815.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl opacity-90 mb-8">
              Insights, tips, and trends in digital marketing from our experts.
            </p>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Search and Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 w-full md:w-80"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
              <Button variant="outline" className="bg-white">
                All
              </Button>
              {categories.slice(0, 5).map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  className="bg-white"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredBlog && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={
                    featuredBlog.featuredImage ||
                    "/placeholder.svg?height=400&width=600"
                  }
                  alt={featuredBlog.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredBlog.categories?.map((categoryId) => {
                    const category = categories.find(
                      (c) => c.id === categoryId
                    );
                    return category ? (
                      <span
                        key={categoryId}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {category.name}
                      </span>
                    ) : null;
                  })}
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  <Link
                    href={`/blog/${featuredBlog.slug}`}
                    className="hover:text-blue-600"
                  >
                    {featuredBlog.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(
                      featuredBlog.createdAt || Date.now()
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {Math.max(
                      1,
                      Math.ceil(featuredBlog.content.split(/\s+/).length / 200)
                    )}{" "}
                    min read
                  </span>
                </div>

                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href={`/blog/${featuredBlog.slug}`}>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <img
                    src={
                      blog.featuredImage ||
                      "/placeholder.svg?height=200&width=400"
                    }
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.categories?.slice(0, 2).map((categoryId) => {
                      const category = categories.find(
                        (c) => c.id === categoryId
                      );
                      return category ? (
                        <span
                          key={categoryId}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {category.name}
                        </span>
                      ) : null;
                    })}
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="hover:text-blue-600"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {new Date(
                        blog.createdAt || Date.now()
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Stay updated with the latest digital marketing trends, tips, and
              insights delivered straight to your inbox.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to our newsletter!");
                // Reset the form
                const form = e.target as HTMLFormElement;
                form.reset();
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                placeholder="Enter your email"
                type="email"
                name="email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                type="submit"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
