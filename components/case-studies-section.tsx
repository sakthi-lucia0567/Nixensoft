"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

const caseStudies = [
  {
    company: "Ford",
    logo: "/placeholder.svg?height=50&width=120",
    projectType: "Official website",
    description: "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    technologies: [
      { name: "React", icon: "/placeholder.svg?height=24&width=24" },
      { name: "Tailwind", icon: "/placeholder.svg?height=24&width=24" },
      { name: "HTML", icon: "/placeholder.svg?height=24&width=24" },
      { name: "CSS", icon: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    company: "FedEx",
    logo: "/placeholder.svg?height=50&width=120",
    projectType: "E-Commerce Website",
    description: "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    technologies: [
      { name: "LinkedIn", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Word", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Stripe", icon: "/placeholder.svg?height=24&width=24" },
      { name: "AWS", icon: "/placeholder.svg?height=24&width=24" },
    ],
  },
  {
    company: "Intel",
    logo: "/placeholder.svg?height=50&width=120",
    projectType: "Logo design",
    description:
      "Nixensoft helps you create a logo that connects your brand with your audience. Whether you're building a personal brand or a corporate identity.",
    technologies: [
      { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
      { name: "Adobe", icon: "https://cdn.worldvectorlogo.com/logos/photoshop-cc-7.svg" },
    ],
  },
]

export default function CaseStudiesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-blue-600 font-semibold">Trusted Companies</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Trusted Over 50+ Companies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              At Nixensoft, we are proud to share our successful projects that help businesses grow. Our creative
              solutions make it easier for clients to reach their goals.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1"
            >
              View all projects <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1"
            >
              View all testimonials <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg border space-y-6"
              >
                <Image
                  src={study.logo || "/placeholder.svg"}
                  alt={`${study.company} logo`}
                  width={120}
                  height={50}
                  className="h-12 w-auto"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">{study.projectType}</h3>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1"
                  >
                    Live preview <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <p className="text-muted-foreground">{study.description}</p>
                <div className="flex gap-3">
                  {study.technologies.map((tech, techIndex) => (
                    <Image
                      key={techIndex}
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1"
                >
                  View case study
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevSlide}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous case studies</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextSlide}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next case studies</span>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

