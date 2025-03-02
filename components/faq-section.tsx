"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "motion/react"

const faqs = [
  {
    question: "How will digital marketing improve my business?",
    answer:
      "Digital marketing boosts your business by increasing online visibility, attracting customers, and driving sales. It helps you reach your target audience and measure your results.",
  },
  {
    question: "How do you determine the best strategy for my business?",
    answer:
      "We analyze your goals, audience, and market trends to create a tailored strategy that aligns with your objectives and achieves the best results.",
  },
  {
    question: "How do you track the performance of my campaigns?",
    answer:
      "We use tools and analytics to track key metrics like website traffic and conversion rates, providing regular reports on your campaign performance.",
  },
  {
    question: "How involved do I need to be in the digital marketing process?",
    answer:
      "While we handle most of the work, your feedback and approval on key aspects are crucial to ensure the strategy aligns with your vision and goals.",
  },
  {
    question: "What should I expect in terms of communication and reporting?",
    answer:
      "We provide regular updates and detailed reports, ensuring transparent communication and timely insights into your campaign's progress.",
  },
]
export default function FAQSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16 w-full flex items-center justify-center bg-[#FBFCFD]"
    >
      <div className="px-4 md:px-6 w-full">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto max-w-6xl w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-black-600 w-full text-lg font-semibold">
                    {index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black w-full text-base font-medium">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.section>
  )
}

