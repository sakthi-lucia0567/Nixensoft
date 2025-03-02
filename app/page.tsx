"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import AnnouncementBanner from "@/components/announcement-banner"
import MainNav from "@/components/main-nav"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"

const FeaturesSection = dynamic(() => import("@/components/features-section"), { ssr: false })
const CompaniesSection = dynamic(() => import("@/components/companies-section"), { ssr: false })
const InnovationSection = dynamic(() => import("@/components/innovation-section"), { ssr: false })
const ProcessSection = dynamic(() => import("@/components/process-section"), { ssr: false })
const CTASection = dynamic(() => import("@/components/cta-section"), { ssr: false })
const BlogSection = dynamic(() => import("@/components/blog-section"), { ssr: false })
const FAQSection = dynamic(() => import("@/components/faq-section"), { ssr: false })
const TestimonialSection = dynamic(
  () => import("@/components/testimonial-section").then((mod) => mod.TestimonialSection),
  { ssr: false },
)

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <MainNav />
      <div className="bg-gray-50">
        <HeroSection />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-white">
          <FeaturesSection />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gray-50">
          <CompaniesSection />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-white">
          <InnovationSection />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gray-50">
          <ProcessSection />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-white">
          <TestimonialSection />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gray-50">
          <CTASection />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-white">
          <BlogSection />
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-gray-50">
          <FAQSection />
        </div>
      </Suspense>
      <Footer />
    </>
  )
}

