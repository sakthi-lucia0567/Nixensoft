"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Play } from "lucide-react"
import { motion,useInView } from "motion/react"
import Image from "next/image"
import useFormEntries from "@/lib/db"

const services = [
  "Web Design",
  "Graphic Design",
  "Logo Design",
  "Web Development",
  "Mobile App Development",
  "ECommerce Development",
  "Wordpress Development",
  "CRM Development",
  "SEO Services",
  "Social Media Marketing",
  "Google Ads and Meta Ads",
  "Whatsapp Marketing",
  "Content Marketing",
]

const companyTypes = ["Digital Marketing Company", "Web Design Company", "Web Development Company", "SEO Company"]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { addEntry } = useFormEntries()

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    companyName: "",
    service: "",
    message: "",
  })

  const changeText = useCallback(() => {
    setCurrentTextIndex((prevIndex) => (prevIndex === companyTypes.length - 1 ? 0 : prevIndex + 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(changeText, 3000)
    return () => clearInterval(interval)
  }, [changeText])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addEntry({
      ...formData,
      page: "Home Page",
    })
    // Reset form
    setFormData({
      name: "",
      phoneNumber: "",
      companyName: "",
      service: "",
      message: "",
    })
    alert("Form submitted successfully!")
  }

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-blue-50 via-white to-white relative"
    >
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: isInView ? 0 : -50, opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Best{" "}
              <span className="relative inline-block">
                <motion.div
                  key={currentTextIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-600"
                >
                  {companyTypes[currentTextIndex]}
                </motion.div>
              </span>{" "}
              in Coimbatore
            </h1>

            <motion.p
              className="text-base sm:text-lg text-black max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We are the best Digital Marketing agency in Coimbatore, helping your business grow with strategies that
              boost your online presence, attract visitors, and increase sales.
            </motion.p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                <Play className="h-5 w-5" />
                Start a Project
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience in Industry</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">300+</div>
                <div className="text-sm text-muted-foreground">Projects successfully completed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">serves clients across multiple countries</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="w-full max-w-md mx-auto relative bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
                <p className="text-sm text-center text-muted-foreground">Fill out the form below to get started</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="text-sm font-medium">
                      Service
                    </label>
                    <Select onValueChange={handleSelectChange} value={formData.service}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase()}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      className="min-h-[100px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>

              <motion.div
                className="absolute -bottom-24 -right-2 w-48 h-48"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jw873IBwZ3f5oU6UBeEIGLfhNeU5GG.png"
                  alt="Decorative image"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                  priority
                  loading="eager"
                />
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Blurry horizontal divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />
      <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-md" />
    </motion.section>
  )
}

