"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white" style={{ aspectRatio: "4/1" }}>
      {/* Background elements with 4:1 aspect ratio */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full" style={{ aspectRatio: "4/1" }}>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-blue-100/30 blur-3xl" />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Insights & Inspiration for Web Design
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 mb-8"
          >
            Discover the latest trends, tips, and strategies to elevate your digital presence and grow your business
            online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full h-12 pl-12 pr-4 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white">Search</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-gray-600"
          >
            <span>Popular:</span>
            <a href="#" className="text-blue-600 hover:underline">
              Web Design
            </a>
            <span>•</span>
            <a href="#" className="text-blue-600 hover:underline">
              SEO
            </a>
            <span>•</span>
            <a href="#" className="text-blue-600 hover:underline">
              UX/UI
            </a>
            <span>•</span>
            <a href="#" className="text-blue-600 hover:underline">
              Mobile Development
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

