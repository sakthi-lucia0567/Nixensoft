"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

// Sample blog posts data for search
const blogPosts = [
  {
    id: 1,
    title: "10 Essential Web Design Principles for Creating Stunning Websites",
    excerpt:
      "Learn the fundamental principles that can transform your website from ordinary to extraordinary.",
    category: "Web Design",
    content:
      "Web design principles include contrast, balance, emphasis, proportion, hierarchy, repetition, pattern, white space, movement, and variety. These principles help create visually appealing and effective websites.",
  },
  {
    id: 2,
    title: "The Psychology of Color in UI Design",
    excerpt:
      "Discover how color choices impact user perception and behavior in interface design.",
    category: "UI Design",
    content:
      "Colors evoke emotions and influence user behavior. Blue conveys trust and security, red creates urgency, green suggests growth, yellow represents optimism, and purple implies luxury.",
  },
  {
    id: 3,
    title: "Mobile-First Design: Why It Matters",
    excerpt:
      "Explore the importance of prioritizing mobile experiences in your design process.",
    category: "Web Development",
    content:
      "Mobile-first design is an approach that prioritizes designing for mobile devices before designing for desktop or other devices. This ensures better user experiences on smaller screens.",
  },
  {
    id: 4,
    title: "Web Development Trends to Watch in 2023",
    excerpt:
      "Stay ahead of the curve with these emerging web development technologies and practices.",
    category: "Web Development",
    content:
      "Emerging trends include AI integration, progressive web apps, voice search optimization, motion UI, dark mode, and serverless architecture.",
  },
  {
    id: 5,
    title: "Creating Effective Landing Pages for Conversion",
    excerpt:
      "Learn strategies to design landing pages that convert visitors into customers.",
    category: "Web Design",
    content:
      "Effective landing pages have clear value propositions, compelling CTAs, minimal distractions, social proof, and mobile optimization.",
  },
  {
    id: 6,
    title: "The Art of Web Typography",
    excerpt:
      "Master the principles of typography to enhance readability and visual appeal.",
    category: "Web Design",
    content:
      "Web typography involves font selection, hierarchy, spacing, alignment, contrast, and responsive considerations to ensure content is readable and visually appealing.",
  },
  {
    id: 7,
    title: "Optimizing Website Performance for Better SEO",
    excerpt:
      "Discover techniques to improve your website's speed and performance for search engines.",
    category: "SEO",
    content:
      "Website performance optimization includes image compression, code minification, browser caching, content delivery networks, and reducing server response times.",
  },
];

export function SearchBox() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof blogPosts>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle search as user types
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const query = searchQuery.toLowerCase();
      const results = blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query)
      );
      setSearchResults(results);
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearching(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };

  // Highlight matching text in search results
  const highlightMatch = (text: string, query: string) => {
    if (!query || query.length < 2) return text;

    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(
      regex,
      '<mark class="bg-yellow-200 text-gray-900">$1</mark>'
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search articles by keyword..."
          className="w-full h-12 pl-12 pr-10 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery.length >= 2 && setIsSearching(true)}
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

        {searchQuery && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-gray-600"
            onClick={clearSearch}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {isSearching && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            // className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-[70vh] overflow-y-auto"
          >
            <div className="p-4 border-b border-gray-100">
              <p className="text-sm text-gray-500">
                Found{" "}
                <span className="font-medium text-gray-900">
                  {searchResults.length}
                </span>{" "}
                results for
                <span className="font-medium text-blue-600">{searchQuery}</span>
              </p>
            </div>

            <ul className="divide-y divide-gray-100">
              {searchResults.map((post) => (
                <li
                  key={post.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <a href={`/blog/${post.id}`} className="block">
                    <div className="flex items-start">
                      <Badge className="mt-1 shrink-0 bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {post.category}
                      </Badge>
                      <div className="ml-3">
                        <h4
                          className="text-base font-medium text-gray-900"
                          dangerouslySetInnerHTML={{
                            __html: highlightMatch(post.title, searchQuery),
                          }}
                        />
                        <p
                          className="mt-1 text-sm text-gray-600 line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: highlightMatch(post.excerpt, searchQuery),
                          }}
                        />
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t border-gray-100 text-center">
              <a
                href={`/blog/search?q=${encodeURIComponent(searchQuery)}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                View all results
              </a>
            </div>
          </motion.div>
        )}

        {isSearching &&
          searchResults.length === 0 &&
          searchQuery.length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              // className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 p-8 text-center"
            >
              <p className="text-gray-500 mb-2">
                No results found for {searchQuery}
              </p>
              <p className="text-sm text-gray-400">
                Try adjusting your search terms or browse our categories
              </p>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  );
}
