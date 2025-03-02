"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CookieSettings {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieSettingsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialSettings: CookieSettings
  onSave: (settings: CookieSettings) => void
}

export function CookieSettingsModal({ open, onOpenChange, initialSettings, onSave }: CookieSettingsModalProps) {
  const [settings, setSettings] = useState<CookieSettings>(initialSettings)

  const handleSave = () => {
    onSave(settings)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Cookie Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="necessary" className="flex flex-col gap-1">
              <span>Strictly Necessary Cookies</span>
              <span className="font-normal text-sm text-muted-foreground">
                These cookies are essential for the website to function properly.
              </span>
            </Label>
            <Switch
              id="necessary"
              checked={settings.necessary}
              onCheckedChange={(checked) => setSettings((s) => ({ ...s, necessary: checked }))}
              disabled
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="functional" className="flex flex-col gap-1">
              <span>Functional Cookies</span>
              <span className="font-normal text-sm text-muted-foreground">
                These cookies enable personalized features and functionality.
              </span>
            </Label>
            <Switch
              id="functional"
              checked={settings.functional}
              onCheckedChange={(checked) => setSettings((s) => ({ ...s, functional: checked }))}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="analytics" className="flex flex-col gap-1">
              <span>Analytics Cookies</span>
              <span className="font-normal text-sm text-muted-foreground">
                These cookies help us understand how visitors interact with the website.
              </span>
            </Label>
            <Switch
              id="analytics"
              checked={settings.analytics}
              onCheckedChange={(checked) => setSettings((s) => ({ ...s, analytics: checked }))}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Label htmlFor="marketing" className="flex flex-col gap-1">
              <span>Marketing Cookies</span>
              <span className="font-normal text-sm text-muted-foreground">
                These cookies are used to deliver relevant advertisements.
              </span>
            </Label>
            <Switch
              id="marketing"
              checked={settings.marketing}
              onCheckedChange={(checked) => setSettings((s) => ({ ...s, marketing: checked }))}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Preferences</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

