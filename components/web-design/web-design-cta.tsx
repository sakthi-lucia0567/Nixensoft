"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export function WebDesignCTA() {
  return (
    <>
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 transform rotate-45" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full opacity-10" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 opacity-10 transform rotate-12" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Transform Your Online Presence?
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white mx-auto"
          >
           {` Let's create a stunning website that captures your brand's essence and drives results. Our expert web design
            team in Coimbatore is ready to bring your vision to life.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white hover:bg-black text-black hover:text-white gap-2 text-lg px-8 py-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}

