import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import AnnouncementBanner from "@/components/announcement-banner";
import { Seo } from "@/components/seo";
import { SchemaMarkup } from "@/components/schema-markup";
import { getBlogPost, getRelatedPosts } from "@/lib/blog-store";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Tag, ChevronRight } from "lucide-react";
import { ShareButtons } from "./share-buttons";
import { NewsletterForm } from "@/components/newsletter-form";
import { format } from "date-fns";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Nixensoft Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.id, post?.categories?.[0]);

  return (
    <>
      <Seo
        pageName={`${post.title} | Nixensoft Blog`}
        description={post.excerpt}
        canonical={`https://www.nixensoft.com/blog/${params.slug}`}
        ogTitle={post.title}
        ogDescription={post.excerpt}
        ogImage={post.featuredImage}
      />
      <SchemaMarkup
        pageName="blog-post"
        type="BlogPosting"
        data={{
          headline: post.title,
          image: post.featuredImage,
          datePublished: post.createdAt,
          dateModified: post.updatedAt,
          author: {
            "@type": "Person",
            name: post?.author?.name,
          },
        }}
      />

      <AnnouncementBanner />
      <MainNav />

      {/* Hero Section - Matching Our Story page */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl opacity-90 mb-8">{post.excerpt}</p>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${params.slug}` },
              ]}
              // className="text-white/70"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={
                  post.featuredImage || "/placeholder.svg?height=500&width=800"
                }
                alt={post.title}
                className="w-full h-auto"
              />
            </div>

            {/* Author and Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-2">
                  <AvatarImage
                    src={
                      post?.author?.avatar ||
                      "/placeholder.svg?height=40&width=40"
                    }
                    alt={post.author.name}
                  />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author.name}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                  {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-3">Share This Post</h3>
              <ShareButtons slug={params.slug} title={post.title} />
            </div>

            {/* Author Bio */}
            <div className="bg-gray-50 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={
                      post.author.avatar ||
                      "/placeholder.svg?height=64&width=64"
                    }
                    alt={post.author.name}
                  />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    About {post.author.name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {post.author.bio ||
                      "Digital marketing specialist with expertise in SEO, content marketing, and social media strategy."}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      All Posts
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3">Search</h3>
                  <div className="flex">
                    <Input
                      placeholder="Search blog..."
                      className="rounded-r-none"
                    />
                    <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <ul className="space-y-2">
                    {[
                      "Digital Marketing",
                      "SEO",
                      "Social Media",
                      "Content Marketing",
                      "Web Design",
                    ].map((category, index) => (
                      <li key={index}>
                        <a
                          href={`/blog/category/${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="flex items-center justify-between text-gray-700 hover:text-blue-600"
                        >
                          <span>{category}</span>
                          <ChevronRight className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex gap-3">
                        <img
                          src={
                            relatedPost.featuredImage ||
                            "/placeholder.svg?height=60&width=60"
                          }
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium line-clamp-2">
                            <a
                              href={`/blog/${relatedPost.slug}`}
                              className="hover:text-blue-600"
                            >
                              {relatedPost.title}
                            </a>
                          </h4>
                          <p className="text-sm text-gray-500">
                            {format(
                              new Date(post.publishedAt),
                              "MMMM dd, yyyy"
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Subscription */}
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Stay updated with our latest articles and news.
                  </p>
                  <NewsletterForm />
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "marketing",
                      "seo",
                      "social-media",
                      "content",
                      "analytics",
                      "strategy",
                      "branding",
                      "web-design",
                    ].map((tag, index) => (
                      <a
                        key={index}
                        href={`/blog/tag/${tag}`}
                        className="inline-block bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                      >
                        #{tag}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
