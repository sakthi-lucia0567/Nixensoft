import { Users, Search, LineChart, PlayCircle, BarChart2, FileText } from "lucide-react"
import { motion } from "motion/react"

const processes = [
  {
    title: "Understanding Client Needs",
    icon: Users,
    description:
      "The first step is to clearly understand what the client wants to achieve and who their customers are. We are the leading digital marketing company in Coimbatore, creating personalized strategies that match the client's specific goals.",
  },
  {
    title: "Market Research and Competitor Analysis",
    icon: Search,
    description:
      "We conduct thorough market research and competitor analysis to find opportunities, helping Nixensoft, a professional digital marketing agency in Coimbatore, craft strategies that offer a competitive edge.",
  },
  {
    title: "Strategy Development",
    icon: LineChart,
    description:
      "Using the insights gathered, we create a digital marketing strategy covering SEO, social media, content marketing, and more, all aimed at maximizing ROI. Nixensoft, a top online marketing company in Coimbatore, ensures every tactic is optimized for success.",
  },
  {
    title: "Implementation",
    icon: PlayCircle,
    description:
      "We are an expert team that precisely executes the strategy, handling everything from content creation to social media, ensuring our clients' success.",
  },
  {
    title: "Monitoring and Optimization",
    icon: BarChart2,
    description:
      "We continuously monitor campaigns with advanced analytics, adjusting strategies in real-time to ensure the best outcomes.",
  },
  {
    title: "Reporting and Feedback",
    icon: FileText,
    description:
      "We provide detailed reports that highlight successes and areas for improvement, and use client feedback to refine our approach.",
  },
]

export default function ProcessSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Digital Marketing Process</h2>
          <p className="text-lg text-muted-foreground">
            At Nixensoft, our digital marketing workflow turns smart strategies into real results that help your
            business succeed. We concentrate on targeted campaigns, use data to make decisions, and continuously improve
            to ensure long-term growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col gap-4 bg-white p-6 rounded-lg shadow-sm
                         transform transition-all duration-500 hover:scale-105
                         opacity-0 translate-y-8
                         animate-slide-up`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100
                              transform transition-all duration-300 hover:rotate-12"
                >
                  <process.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">
                  {index + 1}. {process.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style> */}
    </motion.section>
  )
}

