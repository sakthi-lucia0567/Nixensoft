import type { Metadata } from "next"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import AnnouncementBanner from "@/components/announcement-banner"
import { Seo } from "@/components/seo"
import { SchemaMarkup } from "@/components/schema-markup"
import { CheckCircle, Users, Award, Target, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story | Nixensoft - Digital Marketing Agency",
  description:
    "Learn about Nixensoft's journey to becoming a leading digital marketing agency in Coimbatore. Discover our mission, values, and team.",
}

export default function OurStoryPage() {
  return (
    <>
      <Seo
        title="Our Story | Nixensoft - Digital Marketing Agency"
        description="Learn about Nixensoft's journey to becoming a leading digital marketing agency in Coimbatore. Discover our mission, values, and team."
        canonical="https://www.nixensoft.com/our-story"
        ogTitle="Our Story - Nixensoft Digital Marketing Agency"
        ogDescription="Discover the journey, mission, and values that drive Nixensoft to deliver exceptional digital marketing services."
      />
      <SchemaMarkup
        pageName="our-story"
        type="AboutPage"
        data={{
          name: "About Nixensoft",
          description: "Learn about Nixensoft's journey, mission, and values.",
        }}
      />

      <AnnouncementBanner />
      <MainNav />

      {/* Hero Section with 4:1 aspect ratio */}
      <div className="relative text-white" style={{ aspectRatio: "4/1" }}>
        <img
          src="/placeholder.svg?height=1080&width=2560"
          alt="Our Story"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl opacity-90 mb-8">
              From humble beginnings to becoming a leading digital marketing agency in Coimbatore.
            </p>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Our Story", href: "/our-story" },
              ]}
              className="text-white/70"
            />
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2015, Nixensoft began as a small team of digital enthusiasts with a shared vision: to help
                businesses in Coimbatore harness the power of digital marketing to grow and succeed.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a three-person operation has now grown into a full-service digital marketing agency with
                a team of over 30 specialists across SEO, content marketing, social media, web development, and more.
              </p>
              <p className="text-lg text-gray-700">
                Throughout our journey, our commitment to delivering measurable results and exceptional service has
                remained unwavering. We've helped hundreds of businesses, from local startups to established
                enterprises, achieve their digital marketing goals.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Nixensoft team"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-700">
              At Nixensoft, we're driven by a clear mission and guided by strong values that shape everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To empower businesses with innovative digital marketing solutions that drive growth, enhance online
                presence, and deliver measurable results.
              </p>
              <p className="text-lg text-gray-700">
                We strive to be more than just a service provider – we aim to be a trusted partner in our clients'
                success, helping them navigate the ever-evolving digital landscape with confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 mb-6">
                To be the most trusted digital marketing agency in South India, known for our expertise, innovation, and
                commitment to client success.
              </p>
              <p className="text-lg text-gray-700">
                We envision a future where every business, regardless of size, can harness the power of digital
                marketing to reach its full potential and thrive in an increasingly connected world.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Integrity</h4>
              <p className="text-gray-700">
                We operate with honesty and transparency in all our dealings, building trust with our clients and
                partners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Excellence</h4>
              <p className="text-gray-700">
                We strive for excellence in everything we do, constantly improving our skills and services to deliver
                the best results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-gray-700">
                We embrace change and continuously explore new ideas and technologies to stay ahead in the digital
                landscape.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Collaboration</h4>
              <p className="text-gray-700">
                We believe in the power of teamwork and partnership, working closely with our clients to achieve shared
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-700">
              We take pride in our accomplishments and the recognition we've received for our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Digital Marketing Agency 2022</h3>
              <p className="text-gray-700">
                Awarded by the Coimbatore Business Association for excellence in digital marketing services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Google Partner Agency</h3>
              <p className="text-gray-700">
                Recognized as a Google Partner agency for our expertise in Google Ads and digital advertising.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Top 10 SEO Companies in South India</h3>
              <p className="text-gray-700">
                Listed among the top 10 SEO companies in South India by Digital Marketing Excellence Awards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

