import type { Metadata } from "next";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import AnnouncementBanner from "@/components/announcement-banner";
import { Seo } from "@/components/seo";
import { SchemaMarkup } from "@/components/schema-markup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Handshake, Users, TrendingUp, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Nixensoft - Digital Marketing Agency",
  description:
    "Join forces with Nixensoft to create powerful digital marketing partnerships. Explore our partnership opportunities and grow your business with us.",
};

export default function PartnerWithUsPage() {
  return (
    <>
      <Seo
        pageName="Partner With Us | Nixensoft - Digital Marketing Agency"
        description="Join forces with Nixensoft to create powerful digital marketing partnerships. Explore our partnership opportunities and grow your business with us."
        canonical="https://www.nixensoft.com/partner-with-us"
        ogTitle="Partner With Us - Nixensoft Digital Marketing Agency"
        ogDescription="Discover the benefits of partnering with Nixensoft, a leading digital marketing agency in Coimbatore."
      />
      <SchemaMarkup
        pageName="partner-with-us"
        type="WebPage"
        data={{
          name: "Partner With Nixensoft",
          description: "Explore partnership opportunities with Nixensoft.",
        }}
      />

      <AnnouncementBanner />
      <MainNav />

      {/* Hero Section - Matching Our Story page */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Partner With Us
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Join forces with Nixensoft to create powerful partnerships that
              drive growth and innovation.
            </p>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Partner With Us", href: "/partner-with-us" },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Why Partner With Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-700">
              Discover the benefits of forming a strategic partnership with
              Nixensoft, a leading digital marketing agency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accelerated Growth</h3>
              <p className="text-gray-700">
                Leverage our expertise and resources to accelerate your business
                growth and reach new markets faster.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expanded Network</h3>
              <p className="text-gray-700">
                Gain access to our extensive network of clients, partners, and
                industry connections to expand your reach.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Handshake className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mutual Success</h3>
              <p className="text-gray-700">
                Our partnership model is built on mutual success, ensuring that
                both parties benefit from the collaboration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-700">
                Extend your reach to international markets with our global
                digital marketing expertise and connections.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                Partner with an agency known for its commitment to quality and
                excellence in digital marketing services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Innovative Solutions
              </h3>
              <p className="text-gray-700">
                Access cutting-edge digital marketing technologies and
                innovative solutions through our partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Partnership Models</h2>
            <p className="text-lg text-gray-700">
              We offer flexible partnership models tailored to your business
              needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Referral Partnership
              </h3>
              <p className="text-gray-700 mb-4">
                Earn commissions by referring clients to our digital marketing
                services. A simple way to add value to your network.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Competitive commission structure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Marketing materials provided</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>No minimum referral requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-200 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Reseller Partnership
              </h3>
              <p className="text-gray-700 mb-4">
                White-label our services and offer them to your clients under
                your brand. Perfect for agencies looking to expand their service
                offerings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>White-labeled services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Customizable reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Wholesale pricing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Strategic Alliance
              </h3>
              <p className="text-gray-700 mb-4">
                Form a strategic alliance to collaborate on projects, share
                resources, and create integrated service offerings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Joint marketing initiatives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Shared resources and expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Co-branded service offerings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Long-term relationship focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Become a Partner</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ready to explore a partnership with Nixensoft? Fill out the form
                to get started on your partnership journey.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our partnership team will review your application and contact
                you within 48 hours to discuss the next steps.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Simple Application Process
                    </h4>
                    <p className="text-gray-700">
                      Quick and straightforward application with minimal
                      paperwork.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Approval</h4>
                    <p className="text-gray-700">
                      Get approved and start your partnership in as little as 48
                      hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dedicated Support</h4>
                    <p className="text-gray-700">
                      Receive dedicated support from our partnership team
                      throughout the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                  <h3 className="text-2xl font-semibold text-center">
                    Partner Application
                  </h3>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" type="text" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input id="company" type="text" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div>
                      <label htmlFor="website" className="text-sm font-medium">
                        Website
                      </label>
                      <Input id="website" type="url" />
                    </div>
                    <div>
                      <label
                        htmlFor="partnership"
                        className="text-sm font-medium"
                      >
                        Partnership Type
                      </label>
                      <select
                        id="partnership"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select Partnership Type</option>
                        <option value="referral">Referral Partnership</option>
                        <option value="reseller">Reseller Partnership</option>
                        <option value="strategic">Strategic Alliance</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium">
                        Tell us about your business and partnership goals
                      </label>
                      <Textarea
                        id="message"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Partner Success Stories</h2>
            <p className="text-lg text-gray-700">
              Hear from our existing partners about their experience working
              with Nixensoft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "David Wilson",
                company: "Wilson Web Solutions",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Partnering with Nixensoft has allowed us to offer top-tier digital marketing services to our clients without having to build an in-house team. Our revenue has increased by 40% in the first year of partnership.",
              },
              {
                name: "Anita Patel",
                company: "Global Marketing Associates",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "The reseller partnership with Nixensoft has been a game-changer for our agency. We can now offer comprehensive digital marketing solutions to our clients, and the white-label reporting makes it seamless.",
              },
              {
                name: "Robert Chen",
                company: "Digital Growth Partners",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Our strategic alliance with Nixensoft has opened doors to new markets and clients we couldn't reach before. The collaboration has been smooth, professional, and highly profitable for both parties.",
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
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
