"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All" },
  { id: "web-design", name: "Web Design" },
  { id: "graphic-design", name: "Graphic Design" },
  { id: "logo-design", name: "Logo Design" },
  { id: "web-development", name: "Web Development" },
  { id: "mobile-app", name: "Mobile App Development" },
  { id: "seo", name: "SEO" },
  { id: "digital-marketing", name: "Digital Marketing" },
]

export function CategoryFilter({ onFilterChange }: { onFilterChange?: (category: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    if (onFilterChange) {
      onFilterChange(categoryId)
    }
  }

  return (
    <section className="py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Explore Topics</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">View All Categories</button>
        </div>

        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

