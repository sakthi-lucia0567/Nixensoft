"use client"

import { motion } from "motion/react"
import { AlertTriangle, CheckCircle } from "lucide-react"

const performanceIssues = [
  {
    issue: "Minimize main-thread work",
    solution: "Optimize JavaScript execution, reduce DOM manipulation, and use Web Workers for heavy computations.",
  },
  {
    issue: "Reduce JavaScript execution time",
    solution: "Split large JavaScript bundles, remove unused code, and optimize algorithms.",
  },
  {
    issue: "Avoid excessive DOM size",
    solution: "Implement virtualization for long lists, lazy load content, and simplify your HTML structure.",
  },
  {
    issue: "Preconnect to required origins",
    solution: 'Use <link rel="preconnect"> for critical third-party origins to establish early connections.',
  },
  {
    issue: "Reduce unused CSS",
    solution: "Use CSS purging tools to remove unused styles and consider CSS-in-JS for component-specific styling.",
  },
  {
    issue: "Enable back/forward cache",
    solution: "Avoid using unload event listeners and ensure your page is eligible for bfcache.",
  },
  {
    issue: "Minify JavaScript",
    solution: "Use tools like Terser or UglifyJS to minify your JavaScript code during the build process.",
  },
  {
    issue: "Efficient cache policy for static assets",
    solution: "Implement long-lived caching headers for static assets and use versioning or hashing for cache busting.",
  },
  {
    issue: "Avoid serving legacy JavaScript to modern browsers",
    solution: "Use differential serving to provide modern JavaScript to modern browsers and legacy code to older ones.",
  },
]

export function WebDesignPerformance() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Optimizing Website Performance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Addressing common performance issues to ensure your website runs smoothly and efficiently.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {performanceIssues.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold">{item.issue}</h3>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-600">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

