import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const blogPosts = [
  {
    title: "SEO Basics: Beginner's Guide to SEO Success",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
    image:
      "https://t3.ftcdn.net/jpg/06/36/77/04/360_F_636770460_Yx21AgodrKZWWpVNTmGb2WL5yP15xcvf.jpg",
    featured: true,
  },
  {
    title: "How to quickly deploy a static website",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    title: "How to Rank Higher on Google (6 Easy Steps)",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    title: "What is SEO? Search Engine Optimization Explained",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    title: "12 SEO Best Practices That Everyone Should Follow",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    title: "Spotify's Car Thing available to all premium users",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    title: "How to schedule your Tweets to send later",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
];

export default function BlogSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16 bg-[#F9FAFB]"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Blog
          </h2>
          <p className="mx-auto text-lg text-muted-foreground">
            Stay ahead with expert marketing insights! 🚀 Read our blog for the
            latest trends, tips, and strategies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured Post */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:row-span-2"
          >
            <a href="#" className="group block space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  width={100}
                  height={100}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-blue-600">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground">
                  {blogPosts[0].description}
                </p>
                <span className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          </motion.div>

          {/* Other Posts - First Two Columns */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-4 lg:grid-cols-1"
          >
            {blogPosts.slice(1, 3).map((post, index) => (
              <a key={index} href="#" className="group block space-y-3">
                <h3 className="text-lg font-semibold group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                <span className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </motion.div>

          {/* Other Posts - Third Column */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1"
          >
            {blogPosts.slice(3, 5).map((post, index) => (
              <a key={index} href="#" className="group block space-y-3">
                <h3 className="text-lg font-semibold group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                <span className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1">
                  Read more <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
