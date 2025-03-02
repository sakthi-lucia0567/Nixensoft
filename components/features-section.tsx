"use client"
import { Pencil, Code, Briefcase } from "lucide-react"
import { motion,useInView } from "motion/react"
import { useRef } from "react"

export default function SecurePlatform() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      title: "Design",
      icon: <Pencil className="h-6 w-6 text-green-500" />,
      items: [
        { name: "Web Design", href: "/services/web-design" },
        { name: "Graphic Design", href: "/services/graphic-design" },
        { name: "Logo Design", href: "/services/logo-design" },
      ],
      bgColor: "bg-blue-50",
      hoverColor: "text-blue-600",
      activeColor: "text-blue-800",
    },
    {
      title: "Development",
      icon: <Code className="h-6 w-6 text-purple-500" />,
      items: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobile-development" },
        { name: "Ecommerce Development", href: "/services/ecommerce" },
        { name: "Wordpress Development", href: "/services/wordpress" },
        { name: "CRM Development", href: "/services/crm" },
      ],
      bgColor: "bg-purple-50",
      hoverColor: "text-purple-600",
      activeColor: "text-purple-800",
    },
    {
      title: "Digital Marketing",
      icon: <Briefcase className="h-6 w-6 text-teal-500" />,
      items: [
        { name: "Search Engine Optimization", href: "/services/seo" },
        { name: "Social Media Optimization", href: "/services/smo" },
        { name: "Google Ads and Meta Ads", href: "/services/ads" },
        { name: "WhatsApp Marketing", href: "/services/whatsapp" },
        { name: "Content Marketing", href: "/services/content" },
      ],
      bgColor: "bg-teal-50",
      hoverColor: "text-teal-600",
      activeColor: "text-teal-800",
    },
  ]

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="text-lg text-muted-foreground mx-auto mt-4">
            {`At NixenSoft, we help your business grow in today's competitive market with effective digital marketing
            solutions. As the top digital marketing experts in Coimbatore, we create strategies that bring real results.
            Our services focus on improving your online presence, attracting more customers, and boosting your business
            growth. With a personalized approach, we make sure your brand stands out, reaches the right people, and
            succeeds in the digital world. Trust NixenSoft to help your business grow with smart and result-focused
            marketing strategies.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${feature.bgColor} rounded-xl p-6 transition-transform hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                {feature.icon}
                <h3 className="font-semibold text-lg">{feature.title}</h3>
              </div>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2 group">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        index === 0 ? "bg-blue-500" : index === 1 ? "bg-purple-500" : "bg-teal-500"
                      }`}
                    />
                    <a
                      href={item.href}
                      className={`text-gray-600 relative py-1 px-2 rounded-md 
                        transition-all duration-200 ease-in-out
                        hover:bg-white/50 hover:${feature.hoverColor}
                        active:${feature.activeColor} active:scale-95
                        before:content-[''] before:absolute before:bottom-0 before:left-0 
                        before:w-0 before:h-0.5 before:transition-all before:duration-200
                        before:${index === 0 ? "bg-blue-500" : index === 1 ? "bg-purple-500" : "bg-teal-500"}
                        hover:before:w-full group-hover:translate-x-1`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

