"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Settings, User, Bell, Shield, Globe, Mail, Key, Save, Trash2 } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [formState, setFormState] = useState({
    siteName: "Nixensoft",
    siteDescription: "Digital Marketing Agency in Coimbatore",
    email: "info@nixensoft.com",
    phone: "+91 9876543210",
    address: "123 Main Street, Coimbatore, Tamil Nadu, India",
    logo: "",
    favicon: "",
    socialLinks: {
      facebook: "https://facebook.com/nixensoft",
      twitter: "https://twitter.com/nixensoft",
      instagram: "https://instagram.com/nixensoft",
      linkedin: "https://linkedin.com/company/nixensoft",
    },
    seoSettings: {
      defaultTitle: "Nixensoft - Digital Marketing Agency in Coimbatore",
      defaultDescription:
        "Nixensoft is a leading digital marketing agency in Coimbatore offering SEO, social media, and web design services.",
      defaultKeywords: "digital marketing, SEO, social media, web design, Coimbatore",
      googleAnalyticsId: "UA-XXXXXXXXX-X",
      googleTagManagerId: "GTM-XXXXXXX",
    },
    emailSettings: {
      smtpServer: "smtp.example.com",
      smtpPort: "587",
      smtpUsername: "info@nixensoft.com",
      smtpPassword: "********",
      fromEmail: "info@nixensoft.com",
      fromName: "Nixensoft",
    },
    notificationSettings: {
      newLeadNotification: true,
      newCommentNotification: true,
      newsletterSignupNotification: false,
      marketingEmails: true,
    },
    securitySettings: {
      twoFactorAuth: false,
      passwordExpiry: "90",
      ipRestriction: false,
      allowedIps: "",
    },
    userSettings: {
      name: "Admin User",
      email: "admin@nixensoft.com",
      role: "administrator",
      bio: "Digital marketing professional with over 5 years of experience.",
      avatar: "",
    },
  })

  const handleInputChange = (section, field, value) => {
    if (section) {
      setFormState({
        ...formState,
        [section]: {
          ...formState[section],
          [field]: value,
        },
      })
    } else {
      setFormState({
        ...formState,
        [field]: value,
      })
    }
  }

  const handleSocialInputChange = (platform, value) => {
    setFormState({
      ...formState,
      socialLinks: {
        ...formState.socialLinks,
        [platform]: value,
      },
    })
  }

  const handleSwitchChange = (section, field, checked) => {
    setFormState({
      ...formState,
      [section]: {
        ...formState[section],
        [field]: checked,
      },
    })
  }

  const handleSaveSettings = () => {
    // In a real application, this would save to a database or API
    console.log("Saving settings:", formState)
    alert("Settings saved successfully!")
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button onClick={handleSaveSettings} className="bg-blue-600 hover:bg-blue-700">
          <Save className="mr-2 h-4 w-4" />
          Save All Settings
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          <TabsTrigger value="general" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="seo" className="flex items-center">
            <Globe className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">SEO</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center">
            <Mail className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">Email</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="user" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">User Profile</span>
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center">
            <Key className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">API Keys</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your website's general information and appearance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={formState.siteName}
                    onChange={(e) => handleInputChange(null, "siteName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="siteDescription">Site Description</Label>
                  <Input
                    id="siteDescription"
                    value={formState.siteDescription}
                    onChange={(e) => handleInputChange(null, "siteDescription", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => handleInputChange(null, "email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => handleInputChange(null, "phone", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formState.address}
                    onChange={(e) => handleInputChange(null, "address", e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Logo & Favicon</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="logo">Logo</Label>
                    <div className="flex items-center gap-4">
                      {formState.logo && (
                        <div className="w-16 h-16 border rounded flex items-center justify-center bg-gray-50">
                          <img
                            src={formState.logo || "/placeholder.svg"}
                            alt="Logo"
                            className="max-w-full max-h-full"
                          />
                        </div>
                      )}
                      <Input id="logo" type="file" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="favicon">Favicon</Label>
                    <div className="flex items-center gap-4">
                      {formState.favicon && (
                        <div className="w-8 h-8 border rounded flex items-center justify-center bg-gray-50">
                          <img
                            src={formState.favicon || "/placeholder.svg"}
                            alt="Favicon"
                            className="max-w-full max-h-full"
                          />
                        </div>
                      )}
                      <Input id="favicon" type="file" className="flex-1" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Social Media Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      value={formState.socialLinks.facebook}
                      onChange={(e) => handleSocialInputChange("facebook", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      value={formState.socialLinks.twitter}
                      onChange={(e) => handleSocialInputChange("twitter", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input
                      id="instagram"
                      value={formState.socialLinks.instagram}
                      onChange={(e) => handleSocialInputChange("instagram", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={formState.socialLinks.linkedin}
                      onChange={(e) => handleSocialInputChange("linkedin", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* SEO Settings */}
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Configure your website's search engine optimization settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="defaultTitle">Default Meta Title</Label>
                  <Input
                    id="defaultTitle"
                    value={formState.seoSettings.defaultTitle}
                    onChange={(e) => handleInputChange("seoSettings", "defaultTitle", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="defaultDescription">Default Meta Description</Label>
                  <Textarea
                    id="defaultDescription"
                    value={formState.seoSettings.defaultDescription}
                    onChange={(e) => handleInputChange("seoSettings", "defaultDescription", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="defaultKeywords">Default Keywords</Label>
                  <Textarea
                    id="defaultKeywords"
                    value={formState.seoSettings.defaultKeywords}
                    onChange={(e) => handleInputChange("seoSettings", "defaultKeywords", e.target.value)}
                    placeholder="Comma separated keywords"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                  <Input
                    id="googleAnalyticsId"
                    value={formState.seoSettings.googleAnalyticsId}
                    onChange={(e) => handleInputChange("seoSettings", "googleAnalyticsId", e.target.value)}
                    placeholder="UA-XXXXXXXXX-X"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="googleTagManagerId">Google Tag Manager ID</Label>
                  <Input
                    id="googleTagManagerId"
                    value={formState.seoSettings.googleTagManagerId}
                    onChange={(e) => handleInputChange("seoSettings", "googleTagManagerId", e.target.value)}
                    placeholder="GTM-XXXXXXX"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
              <CardDescription>
                Configure your email server settings for sending notifications and newsletters.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="smtpServer">SMTP Server</Label>
                  <Input
                    id="smtpServer"
                    value={formState.emailSettings.smtpServer}
                    onChange={(e) => handleInputChange("emailSettings", "smtpServer", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input
                    id="smtpPort"
                    value={formState.emailSettings.smtpPort}
                    onChange={(e) => handleInputChange("emailSettings", "smtpPort", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpUsername">SMTP Username</Label>
                  <Input
                    id="smtpUsername"
                    value={formState.emailSettings.smtpUsername}
                    onChange={(e) => handleInputChange("emailSettings", "smtpUsername", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPassword">SMTP Password</Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    value={formState.emailSettings.smtpPassword}
                    onChange={(e) => handleInputChange("emailSettings", "smtpPassword", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromEmail">From Email</Label>
                  <Input
                    id="fromEmail"
                    type="email"
                    value={formState.emailSettings.fromEmail}
                    onChange={(e) => handleInputChange("emailSettings", "fromEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromName">From Name</Label>
                  <Input
                    id="fromName"
                    value={formState.emailSettings.fromName}
                    onChange={(e) => handleInputChange("emailSettings", "fromName", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline">Test Email Configuration</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure when and how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="newLeadNotification">New Lead Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications when a new lead is submitted.</p>
                  </div>
                  <Switch
                    id="newLeadNotification"
                    checked={formState.notificationSettings.newLeadNotification}
                    onCheckedChange={(checked) =>
                      handleSwitchChange("notificationSettings", "newLeadNotification", checked)
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="newCommentNotification">New Comment Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when a new comment is posted on your blog.
                    </p>
                  </div>
                  <Switch
                    id="newCommentNotification"
                    checked={formState.notificationSettings.newCommentNotification}
                    onCheckedChange={(checked) =>
                      handleSwitchChange("notificationSettings", "newCommentNotification", checked)
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="newsletterSignupNotification">Newsletter Signup Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when someone subscribes to your newsletter.
                    </p>
                  </div>
                  <Switch
                    id="newsletterSignupNotification"
                    checked={formState.notificationSettings.newsletterSignupNotification}
                    onCheckedChange={(checked) =>
                      handleSwitchChange("notificationSettings", "newsletterSignupNotification", checked)
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketingEmails">Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive marketing emails and product updates from us.
                    </p>
                  </div>
                  <Switch
                    id="marketingEmails"
                    checked={formState.notificationSettings.marketingEmails}
                    onCheckedChange={(checked) =>
                      handleSwitchChange("notificationSettings", "marketingEmails", checked)
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security settings to protect your account and website.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    checked={formState.securitySettings.twoFactorAuth}
                    onCheckedChange={(checked) => handleSwitchChange("securitySettings", "twoFactorAuth", checked)}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                  <Input
                    id="passwordExpiry"
                    type="number"
                    value={formState.securitySettings.passwordExpiry}
                    onChange={(e) => handleInputChange("securitySettings", "passwordExpiry", e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">Set to 0 for no expiry.</p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="ipRestriction">IP Restriction</Label>
                    <Switch
                      id="ipRestriction"
                      checked={formState.securitySettings.ipRestriction}
                      onCheckedChange={(checked) => handleSwitchChange("securitySettings", "ipRestriction", checked)}
                    />
                  </div>
                  <Textarea
                    id="allowedIps"
                    value={formState.securitySettings.allowedIps}
                    onChange={(e) => handleInputChange("securitySettings", "allowedIps", e.target.value)}
                    placeholder="Enter allowed IP addresses, one per line"
                    disabled={!formState.securitySettings.ipRestriction}
                  />
                  <p className="text-sm text-muted-foreground">Restrict admin access to specific IP addresses.</p>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Reset All Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Profile Settings */}
        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Manage your personal information and account settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="userName">Name</Label>
                  <Input
                    id="userName"
                    value={formState.userSettings.name}
                    onChange={(e) => handleInputChange("userSettings", "name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userEmail">Email</Label>
                  <Input
                    id="userEmail"
                    type="email"
                    value={formState.userSettings.email}
                    onChange={(e) => handleInputChange("userSettings", "email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="userRole">Role</Label>
                  <Select
                    value={formState.userSettings.role}
                    onValueChange={(value) => handleInputChange("userSettings", "role", value)}
                  >
                    <SelectTrigger id="userRole">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrator">Administrator</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="author">Author</SelectItem>
                      <SelectItem value="contributor">Contributor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="userBio">Bio</Label>
                  <Textarea
                    id="userBio"
                    value={formState.userSettings.bio}
                    onChange={(e) => handleInputChange("userSettings", "bio", e.target.value)}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="userAvatar">Profile Picture</Label>
                  <div className="flex items-center gap-4">
                    {formState.userSettings.avatar ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={formState.userSettings.avatar || "/placeholder.svg"}
                          alt="Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-8 w-8 text-gray-500" />
                      </div>
                    )}
                    <Input id="userAvatar" type="file" className="flex-1" />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <div className="flex items-end">
                    <Button variant="outline">Update Password</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Keys */}
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage API keys for integrating with third-party services.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 border rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Google Maps API Key</h3>
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="password" value="AIzaSyD2jLTxZk9JJYoP6JI-..." readOnly />
                      <Button variant="ghost" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Used for displaying maps on the contact page.</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Mailchimp API Key</h3>
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="password" value="9a8b7c6d5e4f3g2h1i0j..." readOnly />
                      <Button variant="ghost" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Used for newsletter subscriptions.</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">reCAPTCHA Site Key</h3>
                      <Button variant="outline" size="sm">
                        Regenerate
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="password" value="6LdXXXXXXXXXXXXXXXXXXXX" readOnly />
                      <Button variant="ghost" size="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Used for form spam protection.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button>Generate New API Key</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

