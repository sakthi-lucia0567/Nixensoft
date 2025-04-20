"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Sample data for trending articles
const trendingArticles = [
  {
    id: 1,
    title: "The Future of Web Design: AI-Driven Interfaces",
    excerpt:
      "Explore how artificial intelligence is revolutionizing web design with automated layouts, personalized user experiences, and predictive content delivery.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
    category: "Web Design",
    views: "12.5K",
    slug: "future-web-design-ai-interfaces",
  },
  {
    id: 2,
    title: "Responsive Design in 2023: Beyond Media Queries",
    excerpt:
      "Discover advanced techniques for creating truly responsive experiences that adapt to any device, screen size, or user preference.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "Web Development",
    views: "9.8K",
    slug: "responsive-design-beyond-media-queries",
  },
  {
    id: 3,
    title: "Minimalist Logo Design: Creating Impact with Less",
    excerpt:
      "Learn the principles of minimalist logo design and how simplicity can create memorable, versatile brand identities that stand the test of time.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
    category: "Logo Design",
    views: "8.3K",
    slug: "minimalist-logo-design-impact",
  },
];

export function TrendingArticles() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold">Trending Now</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trendingArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              // className="relative group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                    {article.category}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {article.views} views
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href={`/blog/${article.slug}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="mt-3 inline-flex items-center text-blue-300 hover:text-blue-100 text-sm font-medium transition-colors"
                  >
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
