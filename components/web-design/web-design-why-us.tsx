"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import Image from "next/image"

const reasons = [
  {
    title: "Expert Design Team",
    description: "Our experienced designers create stunning, user-friendly websites that reflect your brand identity.",
  },
  {
    title: "Custom Solutions",
    description: "We develop tailored web solutions that meet your specific business requirements and goals.",
  },
  {
    title: "Timely Delivery",
    description: "We ensure your project is completed on schedule without compromising on quality.",
  },
  {
    title: "Ongoing Support",
    description: "Our team provides continuous support and maintenance to keep your website running smoothly.",
  },
  {
    title: "SEO Optimization",
    description: "We build websites with SEO best practices to improve your search engine rankings.",
  },
  {
    title: "Affordable Pricing",
    description: "We offer competitive pricing without compromising on quality or features.",
  },
]

export function WebDesignWhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Web design team collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pl-8"
          >
            <h2 className="text-4xl font-bold mb-8">Why Choose Us for Your Web Design Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Nixensoft, we combine creativity with technical expertise to deliver exceptional web design solutions
              that help your business stand out in the digital landscape.
            </p>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

