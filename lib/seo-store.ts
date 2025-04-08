"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface PageSeoSettings {
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
}

export interface SeoSettings {
  global: {
    siteName: string
    siteDescription: string
    defaultOgImage: string
    googleAnalyticsId: string
    googleVerification: string
  }
  pages: {
    [key: string]: PageSeoSettings
  }
  technical: {
    robotsTxt: string
    sitemap: string
  }
}

interface SeoStore {
  seoSettings: SeoSettings
  updateSeoSettings: (settings: SeoSettings) => void
  generateSitemap: () => void
}

const defaultRobotsTxt = `User-agent: *
Allow: /

# Disallow admin pages
Disallow: /admin/

# Sitemap
Sitemap: https://www.nixensoft.com/sitemap.xml`

const defaultSeoSettings: SeoSettings = {
  global: {
    siteName: "Nixensoft - Digital Marketing Agency in Coimbatore",
    siteDescription:
      "Nixensoft is the leading digital marketing agency in Coimbatore, offering expert SEO, social media, and web development services.",
    defaultOgImage: "/images/nixensoft-og-image.jpg",
    googleAnalyticsId: "",
    googleVerification: "",
  },
  pages: {
    home: {
      title: "Nixensoft - Best Digital Marketing Agency in Coimbatore",
      description:
        "Nixensoft is the leading digital marketing agency in Coimbatore, offering expert SEO, social media, and web development services.",
      canonical: "https://www.nixensoft.com/",
      ogTitle: "Nixensoft - Transform Your Digital Presence",
      ogDescription:
        "Partner with Coimbatore's top digital marketing agency for SEO, web design, and social media services that drive real results.",
      ogImage: "/images/nixensoft-home-og.jpg",
    },
    blog: {
      title: "Blog | Nixensoft - Web Design & Digital Marketing Insights",
      description:
        "Discover the latest trends, tips, and strategies in web design, development, and digital marketing to help grow your business online.",
      canonical: "https://www.nixensoft.com/blog",
      ogTitle: "Digital Marketing & Web Design Blog | Nixensoft",
      ogDescription:
        "Expert insights, tips and strategies to help your business succeed online. Stay updated with the latest digital marketing trends.",
      ogImage: "/images/nixensoft-blog-og.jpg",
    },
    "our-story": {
      title: "Our Story | Nixensoft - Digital Marketing Agency",
      description:
        "Learn about Nixensoft's journey, our mission, vision, and the values that drive our digital marketing and web development services.",
      canonical: "https://www.nixensoft.com/our-story",
      ogTitle: "Our Story | Nixensoft",
      ogDescription:
        "Discover how Nixensoft began and the values that drive our commitment to delivering exceptional digital solutions.",
      ogImage: "/images/nixensoft-about-og.jpg",
    },
    contact: {
      title: "Contact Us | Nixensoft - Digital Marketing Agency",
      description:
        "Get in touch with Nixensoft for expert digital marketing, web design, and development services. We're here to help your business grow online.",
      canonical: "https://www.nixensoft.com/contact",
      ogTitle: "Contact Nixensoft | Digital Marketing Experts",
      ogDescription:
        "Reach out to our team for a free consultation about your digital marketing and web development needs.",
      ogImage: "/images/nixensoft-contact-og.jpg",
    },
    services: {
      title: "Services | Nixensoft - Digital Marketing & Web Development",
      description:
        "Explore our comprehensive range of digital marketing, web design, and development services designed to help your business thrive online.",
      canonical: "https://www.nixensoft.com/services",
      ogTitle: "Our Services | Nixensoft",
      ogDescription:
        "From SEO and web design to social media marketing, discover how our services can transform your digital presence.",
      ogImage: "/images/nixensoft-services-og.jpg",
    },
    "web-design": {
      title: "Web Design Services | Nixensoft",
      description:
        "Professional web design services in Coimbatore. Create stunning, responsive websites that drive results for your business.",
      canonical: "https://www.nixensoft.com/services/web-design",
      ogTitle: "Expert Web Design Services | Nixensoft",
      ogDescription:
        "Get a custom, responsive website designed to convert visitors into customers and elevate your brand online.",
      ogImage: "/images/nixensoft-webdesign-og.jpg",
    },
  },
  technical: {
    robotsTxt: defaultRobotsTxt,
    sitemap: "",
  },
}

export const useSeoStore = create<SeoStore>()(
  persist(
    (set) => ({
      seoSettings: defaultSeoSettings,
      updateSeoSettings: (settings) => set({ seoSettings: settings }),
      generateSitemap: () => {
        // In a real implementation, this would generate an actual sitemap
        // For now, we'll just update the timestamp
        set((state) => ({
          seoSettings: {
            ...state.seoSettings,
            technical: {
              ...state.seoSettings.technical,
              sitemap: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nixensoft.com/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.nixensoft.com/blog</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.nixensoft.com/our-story</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.nixensoft.com/contact</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.nixensoft.com/services</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.nixensoft.com/services/web-design</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>`,
            },
          },
        }))
      },
    }),
    {
      name: "seo-storage",
    },
  ),
)

