"use client"

import { motion } from "motion/react"
import { Code, ShoppingCart, FileText, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code,
    title: "Responsive Web Design",
    description:
      "Create websites that deliver a seamless experience across all devices, from desktops to mobiles. As a responsive web design company in Coimbatore, we ensure your site adapts effortlessly to different screen sizes. With a focus on usability and performance, we help enhance user engagement and drive better conversions.",
  },
  {
    icon: ShoppingCart,
    title: "ECommerce Web Design",
    description:
      "Build powerful online stores that drive sales. Our eCommerce web design in Coimbatore combines attractive design with robust functionality, secure payment gateways, and intuitive product management systems to create a seamless shopping experience.",
  },
  {
    icon: FileText,
    title: "Static Web Design",
    description:
      "Deliver fast, secure, and cost-effective websites. Our static web designs are perfect for informational websites, portfolios, and landing pages, offering excellent performance and easy maintenance with modern static site generation.",
  },
  {
    icon: Database,
    title: "Dynamic Web Design",
    description:
      "Create interactive, data-driven websites that engage users. Our dynamic web solutions feature real-time updates, user authentication, content management systems, and database integration for complex web applications.",
  },
]

export function WebDesignServices() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Build High-Performing Websites Like Top Brands</h2>
          <p className="text-lg text-gray-600">
            Transform your online presence with our professional web design services. We create websites that not only
            look great but also deliver results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                Learn more →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

