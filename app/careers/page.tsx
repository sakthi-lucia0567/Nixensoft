import type { Metadata } from "next";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import AnnouncementBanner from "@/components/announcement-banner";
import { Seo } from "@/components/seo";
import { SchemaMarkup } from "@/components/schema-markup";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  Heart,
  Coffee,
  Award,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Nixensoft - Digital Marketing Agency",
  description:
    "Join the Nixensoft team and build your career in digital marketing. Explore current job openings and learn about our company culture.",
};

export default function CareersPage() {
  return (
    <>
      <Seo
        pageName="Careers | Nixensoft - Digital Marketing Agency"
        description="Join the Nixensoft team and build your career in digital marketing. Explore current job openings and learn about our company culture."
        canonical="https://www.nixensoft.com/careers"
        ogTitle="Careers - Nixensoft Digital Marketing Agency"
        ogDescription="Discover exciting career opportunities at Nixensoft, a leading digital marketing agency in Coimbatore."
      />
      <SchemaMarkup
        pageName="careers"
        type="WebPage"
        data={{
          name: "Nixensoft Careers",
          description: "Explore career opportunities at Nixensoft.",
        }}
      />

      <AnnouncementBanner />
      <MainNav />

      {/* Hero Section with 4:1 aspect ratio image */}
      <div className="relative text-white" style={{ aspectRatio: "4/1" }}>
        <img
          src="https://img.freepik.com/free-photo/three-women-working-together_23-2151944846.jpg?t=st=1743052371~exp=1743055971~hmac=c816e2ad48835fa2caaac0d45326e8f7b1a243e0826ba1454809b0a620d15001&w=1060"
          alt="Team members working together"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {`Build your career at Nixensoft and be part of a team that's
              shaping the future of digital marketing.`}
            </p>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Careers", href: "/careers" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-700">
              At Nixensoft, we believe in creating an environment where talented
              individuals can thrive, innovate, and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Collaborative Culture
              </h3>
              <p className="text-gray-700">
                Work in a collaborative environment where teamwork is valued and
                every voice is heard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Professional Growth
              </h3>
              <p className="text-gray-700">
                Access continuous learning opportunities, mentorship programs,
                and clear career advancement paths.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-gray-700">
                Enjoy flexible work arrangements and policies that support a
                healthy work-life balance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Coffee className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Great Benefits</h3>
              <p className="text-gray-700">
                Competitive salary, health insurance, paid time off, and other
                perks to support your wellbeing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Recognition & Rewards
              </h3>
              <p className="text-gray-700">
                Your contributions are valued and recognized through various
                reward and recognition programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Innovative Projects
              </h3>
              <p className="text-gray-700">
                Work on cutting-edge digital marketing projects for diverse
                clients across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Hiring Process</h2>
            <p className="text-lg text-gray-700">
              {`We've designed a straightforward hiring process to help us find
              the right talent and ensure a great experience for candidates.`}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-12 relative">
              {[
                {
                  step: "Application Review",
                  description:
                    "Our recruitment team reviews your application and resume to assess your qualifications and experience.",
                  icon: Briefcase,
                },
                {
                  step: "Initial Screening",
                  description:
                    "If your profile matches our requirements, we'll schedule a phone or video call to discuss your experience and expectations.",
                  icon: Users,
                },
                {
                  step: "Technical Assessment",
                  description:
                    "Depending on the role, you may be asked to complete a technical assessment or assignment to demonstrate your skills.",
                  icon: CheckCircle,
                },
                {
                  step: "Interview",
                  description:
                    "You'll meet with the hiring manager and team members for a more in-depth discussion about the role and your qualifications.",
                  icon: Users,
                },
                {
                  step: "Offer & Onboarding",
                  description:
                    "If selected, you'll receive an offer letter. Once accepted, our HR team will guide you through the onboarding process.",
                  icon: Award,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                    {index % 2 === 0 ? (
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:ml-auto md:mr-0 max-w-md">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">
                          {item.step}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full order-1 md:order-2 mb-4 md:mb-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 md:text-left md:pl-8 order-2 md:order-3">
                    {index % 2 === 1 ? (
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:mr-auto md:ml-0 max-w-md">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">
                          {item.step}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ) : (
                      <div className="block md:hidden bg-white p-6 rounded-lg shadow-md border border-gray-100 max-w-md">
                        <h3 className="text-xl font-semibold mb-2 text-blue-600">
                          {item.step}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Life at Nixensoft</h2>
            <p className="text-lg text-gray-700">
              Hear from our team members about their experience working at
              Nixensoft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                position: "SEO Specialist",
                years: "2 years",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Working at Nixensoft has been a rewarding experience. The collaborative environment and opportunities for growth have helped me develop both professionally and personally.",
              },
              {
                name: "Rahul Verma",
                position: "Content Manager",
                years: "3 years",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "What I love most about Nixensoft is the culture of innovation and continuous learning. We're encouraged to explore new ideas and approaches to deliver the best results for our clients.",
              },
              {
                name: "Ananya Patel",
                position: "Social Media Strategist",
                years: "1.5 years",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "The work-life balance at Nixensoft is amazing. The flexible work arrangements and supportive management make it a great place to build a career while maintaining personal well-being.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position} | {testimonial.years}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards an exciting career at Nixensoft. Explore
            our current openings or submit your resume for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              View Current Openings
            </Button>
            <Button className="bg-transparent border border-white hover:bg-white/10">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
