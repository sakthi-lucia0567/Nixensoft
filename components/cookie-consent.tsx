"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"
import { CookieSettingsModal } from "./cookie-settings-modal"

interface CookieSettings {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

const defaultSettings: CookieSettings = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>(defaultSettings)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    } else {
      setCookieSettings(JSON.parse(consent))
    }
  }, [])

  const acceptAll = () => {
    const allAccepted: CookieSettings = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    setCookieSettings(allAccepted)
    setShowBanner(false)
  }

  const saveSettings = (settings: CookieSettings) => {
    localStorage.setItem("cookieConsent", JSON.stringify(settings))
    setCookieSettings(settings)
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 z-50">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Cookie className="h-6 w-6 text-blue-400" />
            <p className="text-sm">
              We use cookies to ensure that we give you the best experience on our website.{" "}
              <button
                onClick={() => setShowSettings(true)}
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
              >
                Read cookies policies
              </button>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setShowSettings(true)} className="text-black">
              Cookie Setting
            </Button>
            <Button onClick={acceptAll}>Accept All Cookies</Button>
          </div>
        </div>
      </div>

      <CookieSettingsModal
        open={showSettings}
        onOpenChange={setShowSettings}
        initialSettings={cookieSettings}
        onSave={saveSettings}
      />
    </>
  )
}

