"use client"

import { motion } from "motion/react"
import Image from "next/image"

const stats = [
  {
    value: "10k+",
    label: "Deal with Clients",
    color: "text-blue-600",
  },
  {
    value: "1.5k+",
    label: "Team Members",
    color: "text-blue-600",
  },
  {
    value: "24.1k+",
    label: "Completed Project",
    color: "text-blue-600",
  },
]

const services = [
  {
    title: "Responsive Design Solutions",
    description:
      "Our Web Design Strategies are created to make your brand stand out online. We focus on attracting more visitors, keeping them engaged, and delivering real results.",
    background: "bg-blue-50",
  },
  {
    title: "Conversion-Focused Web Strategy",
    description:
      "Our Conversion-Focused Web Strategy is designed to turn visitors into customers with clear navigation, engaging design, and strong call-to-actions. We optimize every element to boost engagement and maximize conversions.",
    background: "bg-red-50",
  },
  {
    title: "SEO-Optimized Web Design",
    description:
      "Our SEO-Optimized Web Design ensures your website is fast, mobile-friendly, and ranks higher on search engines. We create clean, structured, and user-friendly designs to drive more traffic and visibility.",
    background: "bg-purple-50",
    fullWidth: true,
  },
]

export function WebDesignAbout() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <motion.p
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nixen Software Technologies
          </motion.p>
          <motion.h2
            className="text-4xl font-bold leading-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Best Web Design
            <br />
            Company in Coimbatore
          </motion.h2>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src={`https://images.unsplash.com/photo-1606836576983-8b458e75221d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Web Design Company in Coimbatore"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`${service.background} p-8 rounded-3xl ${service.fullWidth ? "lg:col-span-2" : ""}`}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

