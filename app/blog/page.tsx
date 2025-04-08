import type { Metadata } from "next";
import BlogClientPage from "./BlogClientPage";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Blog | Nixensoft - Digital Marketing Agency",
  description:
    "Explore the latest insights, tips, and trends in digital marketing from Nixensoft, a leading digital marketing agency in Coimbatore.",
};

export default function BlogPage() {
  return (
    <>
      <BlogClientPage />
      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Stay updated with our latest articles, industry insights, and
              digital marketing tips.
            </p>
            <NewsletterForm className="max-w-xl mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
