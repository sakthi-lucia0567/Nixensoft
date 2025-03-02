import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "motion/react"

export default function InnovationSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Why We are the Best Digital Marketing Company in Coimbatore to take care of your business?
            </h2>
            <p className="text-lg text-muted-foreground">
              NixenSoft is a digital marketing Agency in Coimbatore we focuses on getting results for your business.
              We specialize in SEO (search engine optimization), SEM (search engine marketing), PPC (pay-per-click
              marketing), social media management, and content marketing.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-transform duration-300 hover:translate-x-1"
            >
              Grow Your Business With Us
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              At NixenSoft, we are known as the top digital marketing company in Coimbatore because we provide solutions
              that work for your business. Our team uses the latest methods in SEO, content marketing, social media, and
              paid ads to drive more traffic to your website, boost your brand visibility, and engage more people
              online.
            </p>
            <p className="text-lg text-muted-foreground">
              We make marketing simple so you can focus on growing your business. With our clear and real-time tracking,
              we make sure every campaign is successful. Whether you want more visitors to your website or higher sales,
              Nixensoft is here to help your business grow online.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

