"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "10 Web Design Trends to Watch in 2023",
    excerpt:
      "Stay ahead of the curve with these cutting-edge web design trends that are shaping the digital landscape in 2023.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
    author: "Alice Johnson",
    date: "June 15, 2023",
  },
  {
    title: "The Importance of Mobile-First Design",
    excerpt: "Discover why prioritizing mobile design is crucial for your website's success and user experience.",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&h=300&fit=crop",
    author: "Bob Smith",
    date: "May 28, 2023",
  },
  {
    title: "Optimizing Website Performance for Better SEO",
    excerpt: "Learn how to improve your website's speed and performance to boost your search engine rankings.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    author: "Charlie Brown",
    date: "April 10, 2023",
  },
]

export function WebDesignBlogSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest web design insights and tips</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all blog posts <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

