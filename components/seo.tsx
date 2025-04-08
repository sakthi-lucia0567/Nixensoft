"use client";

import Head from "next/head";
import { useSeoStore } from "@/lib/seo-store";
import Script from "next/script";

interface SeoProps {
  pageName: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
}

export function Seo({ pageName }: SeoProps) {
  const { seoSettings } = useSeoStore();
  const global = seoSettings.global;
  const page = seoSettings.pages[pageName] || {
    title: "",
    description: "",
    canonical: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
  };

  const title = page.title || `${pageName} | ${global.siteName}`;
  const description = page.description || global.siteDescription;
  const ogTitle = page.ogTitle || title;
  const ogDescription = page.ogDescription || description;
  const ogImage = page.ogImage || global.defaultOgImage;
  const canonical = page.canonical || "";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonical} />
        <meta property="twitter:title" content={ogTitle} />
        <meta property="twitter:description" content={ogDescription} />
        <meta property="twitter:image" content={ogImage} />

        {/* Google verification */}
        {global.googleVerification && (
          <meta
            name="google-site-verification"
            content={global.googleVerification}
          />
        )}
      </Head>

      {/* Google Analytics */}
      {global.googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${global.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${global.googleAnalyticsId}');
            `}
          </Script>
        </>
      )}
    </>
  );
}
