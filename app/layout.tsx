import { Inter } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import type React from "react"
import { CookieConsent } from "@/components/cookie-consent"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: "Nixensoft - Best Digital Marketing Agency in Coimbatore",
  description:
    "Nixensoft is the leading digital marketing agency in Coimbatore, offering expert SEO, social media, and web development services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://cdn.brandfetch.io" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preload" href="/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Critical CSS */
            body { font-family: 'Inter', sans-serif; }
            .container { width: 100%; max-width: 1280px; margin-left: auto; margin-right: auto; }
          `,
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

