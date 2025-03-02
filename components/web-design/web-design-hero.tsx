"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Responsive Design",
    description: "Creating websites that work seamlessly across all devices and screen sizes",
    link: "/services/web-design/responsive",
  },
  {
    title: "UI/UX Excellence",
    description: "Crafting intuitive and engaging user experiences that convert visitors into customers",
    link: "/services/web-design/ui-ux",
  },
  {
    title: "Custom Solutions",
    description: "Developing tailored web solutions that meet your specific business needs",
    link: "/services/web-design/custom",
  },
  {
    title: "Performance Focus",
    description: "Optimizing websites for speed, security, and search engine visibility",
    link: "/services/web-design/performance",
  },
]

export function WebDesignHero() {
  return (
    <section className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            We create digital experiences that inspire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl"
          >
            At Nixensoft, we combine creativity with technical expertise to deliver stunning websites that drive
            results. Our web design team crafts unique digital solutions that help your business stand out in the
            digital landscape.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

