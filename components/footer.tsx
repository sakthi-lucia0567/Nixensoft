import { Link, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  company: {
    title: "Quick Links",
    links: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Marketplace", href: "/marketplace" },
      { name: "Services", href: "/services" },
      { name: "Team", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
  Design: {
    title: "Design",
    links: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "Graphic Design", href: "/services/digital-marketing" },
      { name: "Logo Design", href: "/services/seo" },
    ],
  },
  development: {
    title: "Development",
    links: [
      { name: "Web Development", href: "/web-development" },
      { name: "Mobile App Development", href: "/mobile-app-development" },
      { name: "ECommerce Development", href: "/ecommerce-development" },
      { name: "Wordpress Development", href: "/wordpress-development" },
      { name: "CRM Development", href: "/case-studies" },
    ],
  },
  digitalmarketing: {
    title: "Digital Marketing",
    links: [
      { name: "Search Engine Optimization", href: "/search-engine-marketing" },
      { name: "Social Media Marketing", href: "/Social-media-marketing" },
      { name: "Google Ads and Meta Ads", href: "/Google-ads" },
      { name: "Whatsapp Marketing", href: "/whatsapp-marketing" },
      { name: "content Marketing", href: "/content-marketing" },
    ],
  },
  blog: {
    title: "Blog",
    links: [
      { name: "News", href: "/blog/news" },
      { name: "Tips & Tricks", href: "/blog/tips" },
      { name: "Industry Updates", href: "/blog/updates" },
      { name: "Events", href: "/blog/events" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Partner With Us", href: "/guide" },
      { name: "Careers", href: "/faqs" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="border-t bg-[#0C032F] relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circle in top-left */}
        <div className="absolute -left-16 -top-16 w-32 h-32 bg-blue-600/10 rounded-full" />

        {/* Dots pattern in top-right */}
        <div className="absolute top-8 right-8 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-blue-600/20 rounded-full" />
          ))}
        </div>

        {/* Large circle in bottom-right */}
        <div className="absolute -right-24 -bottom-24 w-48 h-48 bg-blue-600/5 rounded-full" />

        {/* Hexagon in middle-left */}
        <svg
          className="absolute left-1/4 top-1/2 w-12 h-12 text-blue-600/10 transform -translate-y-1/2"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M12 2l10 6v8l-10 6-10-6V8z" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 py-12 relative">
        <div className="grid gap-8 lg:grid-cols-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Play className="h-8 w-8 text-blue-600 fill-blue-600" />
              <span className="text-xl font-semibold text-white">Nixensoft</span>
            </Link>
            <p className="text-white mb-4">
              Nixensoft is the leading IT company in Coimbatore, delivering innovative digital solutions with
              excellence.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact us</Button>
          </div>
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#C3C1CC] hover:text-blue-600 hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-white">
          <p className="text-white text-sm">&copy; {new Date().getFullYear()} Nixensoft. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-white hover:text-blue-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.instagram.com/nixen_software_tech" className="text-white hover:text-blue-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/company/nixen-software-technologies"
              className="text-white hover:text-blue-600"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.linkedin.com/company/nixen-software-technologies"
              className="text-white hover:text-blue-600"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

