"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Sample data for recommended articles
const recommendedArticles = [
  {
    id: 1,
    title: "Creating Accessible Web Forms: Best Practices",
    excerpt:
      "Learn how to design and develop web forms that are accessible to all users, including those with disabilities.",
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=500&fit=crop",
    category: "Web Development",
    slug: "accessible-web-forms-best-practices",
  },
  {
    id: 2,
    title: "Color Theory for Digital Designers: A Comprehensive Guide",
    excerpt:
      "Master the fundamentals of color theory and learn how to apply these principles to create visually appealing digital designs.",
    image:
      "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&h=500&fit=crop",
    category: "Graphic Design",
    slug: "color-theory-digital-designers",
  },
  {
    id: 3,
    title: "Optimizing Images for Web: Performance and Quality Balance",
    excerpt:
      "Discover techniques to optimize your website images for faster loading times without sacrificing visual quality.",
    image:
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=500&fit=crop",
    category: "Web Design",
    slug: "optimizing-images-web-performance",
  },
  {
    id: 4,
    title: "Typography in UI Design: Choosing the Right Fonts",
    excerpt:
      "Learn how to select and pair fonts that enhance readability, establish hierarchy, and reinforce your brand identity.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    category: "UI Design",
    slug: "typography-ui-design-fonts",
  },
];

export function RecommendedArticles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <Sparkles className="h-6 w-6 text-blue-600 mr-2" />
          <h2 className="text-3xl font-bold">Recommended For You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              // className="flex flex-col h-full"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                <Link
                  href={`/blog/${article.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {article.title}
                </Link>
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              <Link
                href={`/blog/${article.slug}`}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-auto"
              >
                Read More →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
