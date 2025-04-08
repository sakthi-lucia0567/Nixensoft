"use client"
import Link from "next/link"
import { useBlogStore } from "@/lib/blog-store"

export function RecentPosts() {
  const { blogs } = useBlogStore()

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <Link href="/blog/all" className="text-blue-600 hover:text-blue-800 font-medium">
            View All
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 6).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                {post.featuredImage && (
                  <img
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{post.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={post.createdAt}>{new Date(post.createdAt).toLocaleDateString()}</time>
                  </div>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

