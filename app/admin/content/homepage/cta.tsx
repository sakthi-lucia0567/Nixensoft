"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Save } from "lucide-react";
import { useCMSStore } from "@/lib/cms-store";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const colorOptions = [
  { name: "Blue", from: "blue-600", to: "blue-700" },
  { name: "Purple", from: "purple-600", to: "purple-700" },
  { name: "Teal", from: "teal-600", to: "teal-700" },
  { name: "Green", from: "green-600", to: "green-700" },
  { name: "Red", from: "red-600", to: "red-700" },
  { name: "Amber", from: "amber-600", to: "amber-700" },
  { name: "Pink", from: "pink-600", to: "pink-700" },
  { name: "Indigo", from: "indigo-600", to: "indigo-700" },
];

export default function CTAEditor() {
  const router = useRouter();
  const { ctaSection, updateCTASection } = useCMSStore();
  const [formData, setFormData] = useState(ctaSection);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData(ctaSection);
  }, [ctaSection]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorSelect = (colorName: string) => {
    const color = colorOptions.find((c) => c.name === colorName);
    if (color) {
      setFormData((prev) => ({
        ...prev,
        backgroundGradient: {
          from: color.from,
          to: color.to,
        },
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      updateCTASection(formData);
      alert("CTA section updated successfully!");
      router.push("/admin/content");
    } catch (error) {
      console.error("Error updating CTA section:", error);
      alert("Failed to update CTA section. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/admin/content" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Edit CTA Section</h1>
        </div>

        <Button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span> Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Call-to-Action Content</CardTitle>
          <CardDescription>
            Edit the content for your call-to-action section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Let's Talk About Your Business"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                placeholder="Let's create a winning strategy for your brand..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="buttonText">Button Text</Label>
                <Input
                  id="buttonText"
                  name="buttonText"
                  value={formData.buttonText}
                  onChange={handleInputChange}
                  placeholder="Explore Now"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="buttonLink">Button Link</Label>
                <Input
                  id="buttonLink"
                  name="buttonLink"
                  // value={formData.buttonLink}
                  onChange={handleInputChange}
                  placeholder="/contact"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Label>Background Gradient</Label>
              <div className="grid grid-cols-4 gap-2">
                {colorOptions.map((color) => (
                  <Button
                    key={color.name}
                    type="button"
                    variant="outline"
                    className={`h-10 bg-gradient-to-r from-${color.from} to-${
                      color.to
                    } text-white hover:opacity-90 ${
                      formData.backgroundGradient.from === color.from
                        ? "ring-2 ring-offset-2 ring-blue-500"
                        : ""
                    }`}
                    onClick={() => handleColorSelect(color.name)}
                  >
                    {color.name}
                  </Button>
                ))}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>
            This is how your CTA section will appear on the website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`bg-gradient-to-br from-${formData.backgroundGradient.from} to-${formData.backgroundGradient.to} p-8 rounded-lg text-white text-center`}
          >
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold">{formData.title}</h2>
              <p>{formData.description}</p>
              <div>
                <Button className="bg-white text-black hover:bg-gray-100">
                  {formData.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
