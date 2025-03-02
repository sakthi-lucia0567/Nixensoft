"use client"

import { motion } from "motion/react"

const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description: "Understanding your business goals, target audience, and project requirements",
  },
  {
    number: "2",
    title: "Planning",
    description: "Creating wireframes, sitemaps, and defining the project scope",
  },
  {
    number: "3",
    title: "Design",
    description: "Crafting beautiful, user-friendly interfaces that align with your brand",
  },
  {
    number: "4",
    title: "Development",
    description: "Building your website with clean, efficient code and modern technologies",
  },
  {
    number: "5",
    title: "Testing",
    description: "Ensuring your website works perfectly across all devices and browsers",
  },
  {
    number: "6",
    title: "Launch",
    description: "Deploying your website and providing training and documentation",
  },
]

const additionalSteps = [
  {
    title: "SEO",
    description: "Search engine optimization",
  },
  {
    title: "Analytics",
    description: "Performance tracking",
  },
  {
    title: "Support",
    description: "Ongoing maintenance",
  },
  {
    title: "Updates",
    description: "Regular improvements",
  },
]

export function WebDesignProcess() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Web Design Process</h2>
          <p className="text-lg text-gray-600">
            We follow a structured approach to deliver exceptional websites that meet your business goals and exceed
            expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main process line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2" />

          {/* Process steps */}
          <div className="grid gap-8 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional steps */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {additionalSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Curved connecting lines (SVG) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 50C200 50 200 20 400 20C600 20 600 80 800 80C1000 80 1000 50 1200 50"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

