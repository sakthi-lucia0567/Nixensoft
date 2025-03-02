"use client"

import { motion } from "motion/react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is responsive web design?",
    answer:
      "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that your website looks good and functions properly whether it's being viewed on a desktop computer, tablet, or smartphone.",
  },
  {
    question: "How long does it typically take to design and develop a website?",
    answer:
      "The timeline for designing and developing a website can vary depending on the complexity of the project. A simple website might take 4-6 weeks, while a more complex site could take 3-6 months. We'll provide you with a more accurate timeline after discussing your specific requirements.",
  },
  {
    question: "Do you offer website maintenance services after the site is launched?",
    answer:
      "Yes, we offer ongoing website maintenance services to ensure your site remains up-to-date, secure, and performing optimally. Our maintenance packages include regular updates, security checks, backups, and technical support.",
  },
  {
    question: "Can you help with search engine optimization (SEO) for my website?",
    answer:
      "We integrate SEO best practices into our web design process to ensure your site is optimized for search engines. We can also provide additional SEO services to improve your website's visibility and ranking in search results.",
  },
  {
    question: "What is the difference between static and dynamic websites?",
    answer:
      "Static websites have fixed content that doesn't change unless manually updated by a developer. They're simpler and faster to load but less flexible. Dynamic websites, on the other hand, can display different content to different users, often pulling information from a database. They're more interactive and easier to update but can be more complex to develop and maintain.",
  },
]

export function WebDesignFAQSection() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our web design services</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

