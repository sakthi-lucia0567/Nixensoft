"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronRight } from "lucide-react"
import { motion,useInView } from "motion/react"
import Image from "next/image"

const companies = [
  { name: "Airbnb", logo: "https://cdn.brandfetch.io/idkuvXnjOH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Google", logo: "https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Microsoft", logo: "https://cdn.brandfetch.io/idchmboHEZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  {
    name: "Spotify",
    logo: "https://cdn.brandfetch.io/id20mQyGeY/w/2048/h/561/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  { name: "Amazon", logo: "https://cdn.brandfetch.io/idawOgYOsG/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Apple", logo: "https://cdn.brandfetch.io/idnrCPuv87/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Slack", logo: "https://cdn.brandfetch.io/idJ_HhtG0Z/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
  { name: "Salesforce", logo: "https://cdn.brandfetch.io/idVE84WdIN/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
]

export default function CompaniesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16"
    >
      <div className="container px-4 md:px-6">
        <div
          className={`text-center space-y-4 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-3xl mx-auto">
            How Do Big Names Stay on Top? They Speak Their Truth to the World.
          </h2>
          <p className="mx-auto text-lg text-muted-foreground">
            Big brands stay on top by being honest and connecting with their audience through smart marketing. For
            startups, working with NixenSoft, the best digital marketing company in Coimbatore, helps you build a strong
            online presence, get more leads, and compete with top brands. With expert SEO, social media, and content
            marketing, we make sure your brand reaches the right audience and stays ahead of the competition.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1"
            >
              Boost Your Brand
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1"
            >
              Start a Project
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: isInView ? 1 : 0.5, opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex items-center justify-center rounded-lg bg-gray-50 px-8 py-8 transition-all duration-700 transform hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={120}
                height={40}
                className="max-h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

