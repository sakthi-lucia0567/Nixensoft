import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import AnnouncementBanner from "@/components/announcement-banner";
import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import { WebDesignHero } from "@/components/web-design/web-design-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";

// Dynamically import components
const WebDesignAbout = dynamic(
  () =>
    import("@/components/web-design/web-design-about").then(
      (mod) => mod.WebDesignAbout
    ),
  {
    ssr: true,
  }
);
const WebDesignServices = dynamic(
  () =>
    import("@/components/web-design/web-design-services").then(
      (mod) => mod.WebDesignServices
    ),
  { ssr: true }
);

const WebDesignBenefits = dynamic(
  () =>
    import("@/components/web-design/web-design-benefits").then(
      (mod) => mod.WebDesignBenefits
    ),
  { ssr: true }
);
const WebDesignWhyUs = dynamic(
  () =>
    import("@/components/web-design/web-design-why-us").then(
      (mod) => mod.WebDesignWhyUs
    ),
  {
    ssr: true,
  }
);
const WebDesignProcess = dynamic(
  () =>
    import("@/components/web-design/web-design-process").then(
      (mod) => mod.WebDesignProcess
    ),
  {
    ssr: true,
  }
);
const WebDesignCTA = dynamic(
  () =>
    import("@/components/web-design/web-design-cta").then(
      (mod) => mod.WebDesignCTA
    ),
  { ssr: true }
);
const WebDesignContactForm = dynamic(
  () =>
    import("@/components/web-design/web-design-contact-form").then(
      (mod) => mod.WebDesignContactForm
    ),
  { ssr: true }
);
const WebDesignBlogSection = dynamic(
  () =>
    import("@/components/web-design/web-design-blog-section").then(
      (mod) => mod.WebDesignBlogSection
    ),
  { ssr: true }
);
const WebDesignFAQSection = dynamic(
  () =>
    import("@/components/web-design/web-design-faq-section").then(
      (mod) => mod.WebDesignFAQSection
    ),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Web Design Services | Nixensoft",
  description:
    "Professional web design services in Coimbatore. Create stunning, responsive websites that drive results for your business.",
  alternates: {
    canonical: "https://www.nixensoft.com/services/web-design",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Web Design", href: "/services/web-design" },
];

export default function WebDesignPage() {
  return (
    <>
      <AnnouncementBanner />
      <MainNav />
      <main>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <WebDesignHero />
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignAbout />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignServices />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignBenefits />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignWhyUs />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignProcess />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignCTA />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignBlogSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <WebDesignFAQSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12">
                Contact Us for a Free Consultation
              </h2>
              <WebDesignContactForm />
            </div>
          </section>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
