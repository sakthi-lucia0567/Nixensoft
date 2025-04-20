"use client";

import { useSeoStore } from "@/lib/seo-store";

interface SchemaMarkupProps {
  pageName: string;
  type:
    | "Organization"
    | "WebSite"
    | "WebPage"
    | "BlogPosting"
    | "Article"
    | "Blog"
    | "AboutPage"
    | "Service";
  data?: Record<string, any>;
}

export function SchemaMarkup({ pageName, type, data = {} }: SchemaMarkupProps) {
  const { seoSettings } = useSeoStore();
  const global = seoSettings.global;
  const page = seoSettings.pages[pageName] || {
    title: "",
    description: "",
    canonical: "",
  };

  let schema: Record<string, any> = {};

  switch (type) {
    case "Organization":
      schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: global.siteName,
        url: "https://www.nixensoft.com",
        logo: "https://www.nixensoft.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+919940759291",
          contactType: "customer service",
        },
        sameAs: [
          "https://www.facebook.com/nixensoft",
          "https://www.twitter.com/nixensoft",
          "https://www.linkedin.com/company/nixensoft",
          "https://www.instagram.com/nixensoft",
        ],
        ...data,
      };
      break;
    case "WebSite":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: global.siteName,
        url: "https://www.nixensoft.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.nixensoft.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        ...data,
      };
      break;
    case "WebPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page.title,
        description: page.description,
        url: page.canonical,
        ...data,
      };
      break;
    case "BlogPosting":
      schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: page.title,
        description: page.description,
        image: page.ogImage || global.defaultOgImage,
        author: {
          "@type": "Person",
          name: data.author || "Nixensoft Team",
        },
        publisher: {
          "@type": "Organization",
          name: global.siteName,
          logo: {
            "@type": "ImageObject",
            url: "https://www.nixensoft.com/logo.png",
          },
        },
        datePublished: data.datePublished || new Date().toISOString(),
        dateModified: data.dateModified || new Date().toISOString(),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": page.canonical,
        },
        ...data,
      };
      break;
    case "Service":
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.title,
        description: page.description,
        provider: {
          "@type": "Organization",
          name: global.siteName,
        },
        serviceType: data.serviceType || "Digital Marketing",
        areaServed: data.areaServed || "Coimbatore",
        ...data,
      };
      break;
    default:
      schema = {
        "@context": "https://schema.org",
        "@type": type,
        ...data,
      };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
