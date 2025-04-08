"use client";

import type React from "react";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { X, Plus } from "lucide-react";
import { useJobStore } from "@/lib/job-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function EditJobOpeningPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { getJob, updateJob } = useJobStore();

  const [title, setTitle] = useState("");
  const [type, setType] = useState<
    "Full-time" | "Part-time" | "Contract" | "Internship" | "Remote"
  >("Full-time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState<string[]>([]);
  const [newRequirement, setNewRequirement] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [errors, setErrors] = useState({
    title: false,
    location: false,
    description: false,
  });

  useEffect(() => {
    const job = getJob(id);

    if (job) {
      setTitle(job.title);
      setType(job.type);
      setLocation(job.location);
      setDescription(job.description);
      setRequirements(job.requirements);
      setIsActive(job.isActive);
    } else {
      router.push("/admin/careers");
    }

    setIsLoading(false);
  }, [id, getJob, router]);

  const handleAddRequirement = () => {
    if (newRequirement.trim()) {
      setRequirements([...requirements, newRequirement.trim()]);
      setNewRequirement("");
    }
  };

  const handleRemoveRequirement = (index: number) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {
      title: title.trim() === "",
      location: location.trim() === "",
      description: description.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    updateJob(id, {
      title,
      type,
      location,
      description,
      requirements,
      isActive,
    });

    router.push("/admin/careers");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Edit Job Opening</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => router.push("/admin/careers")}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Job Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={errors.title ? "border-red-500" : ""}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">Job title is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Job Type</Label>
                <Select
                  value={type}
                  onValueChange={(value) => setType(value as any)}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Part-time">Part-time</SelectItem>
                    <SelectItem value="Contract">Contract</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">
                  Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Coimbatore, Tamil Nadu"
                  className={errors.location ? "border-red-500" : ""}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">Location is required</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={isActive ? "active" : "inactive"}
                  onValueChange={(value) => setIsActive(value === "active")}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Job Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                className={errors.description ? "border-red-500" : ""}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  Job description is required
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Input
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                placeholder="Add a requirement"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddRequirement();
                  }
                }}
              />
              <Button type="button" onClick={handleAddRequirement}>
                <Plus className="h-4 w-4 mr-2" /> Add
              </Button>
            </div>

            <div className="space-y-2">
              {requirements.length === 0 ? (
                <p className="text-muted-foreground">
                  No requirements added yet.
                </p>
              ) : (
                <div className="space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Badge className="flex-1">{req}</Badge>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveRequirement(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push("/admin/careers")}
          >
            Cancel
          </Button>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </div>
  );
}
