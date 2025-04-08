"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Share2 } from "lucide-react"

export function ShareButtons({ slug, title }: { slug: string; title: string }) {
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(`https://www.nixensoft.com/blog/${slug}`)
    const encodedTitle = encodeURIComponent(title)

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
        break
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${encodedTitle}`, "_blank")
        break
      case "instagram":
        // Instagram doesn't have a direct share URL, but we can copy the link
        navigator.clipboard.writeText(`https://www.nixensoft.com/blog/${slug}`)
        alert("Link copied to clipboard! Open Instagram to share.")
        break
      default:
        navigator.clipboard.writeText(`https://www.nixensoft.com/blog/${slug}`)
        alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="flex gap-3">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-blue-100 hover:text-blue-600"
        onClick={() => handleShare("facebook")}
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Share on Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-blue-100 hover:text-blue-600"
        onClick={() => handleShare("twitter")}
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Share on Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-blue-100 hover:text-blue-600"
        onClick={() => handleShare("instagram")}
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Share on Instagram</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-blue-100 hover:text-blue-600"
        onClick={() => handleShare("copy")}
      >
        <Share2 className="h-5 w-5" />
        <span className="sr-only">Copy Link</span>
      </Button>
    </div>
  )
}

