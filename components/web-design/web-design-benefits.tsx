"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function WebDesignBenefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">
            Benefits of Professional Web Design for Your Business
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto text-left"
        >
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {`Investing in professional web design can significantly impact your business's success in the digital world.
            A well-designed website increases your online visibility, making it easier for potential customers to find
            you. It provides a better user experience with intuitive navigation and responsive design, keeping visitors
            engaged and encouraging them to explore your offerings. This enhanced user experience often leads to higher
            conversion rates, as strategic design elements and clear calls-to-action guide users towards making
            purchases or inquiries.`}
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {` Moreover, a professional website builds trust with your audience, establishing your business as reliable and
            authoritative. It enhances your credibility in the market, which is crucial for attracting and retaining
            customers. From a technical standpoint, optimized web design ensures fast loading times and smooth
            functionality, reducing bounce rates and improving your site's performance in search engine rankings.`}
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {`Perhaps most importantly, a unique and modern design gives you a
            competitive advantage. It allows you to stand out from competitors,
            showcasing your brand's strengths and unique value proposition. In
            today's digital-first world, your website is often the first point
            of contact between your business and potential customers. A
            professional web design ensures that this first impression is a
            strong and positive one, setting the stage for successful business
            relationships.`}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Start Your Web Design Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
