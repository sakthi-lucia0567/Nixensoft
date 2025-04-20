"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Plus, X, Globe, Search } from "lucide-react";
import { BlogEditor } from "@/components/blog/blog-editor";
import { useBlogStore } from "@/lib/blog-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { slugify } from "@/lib/utils";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const { blogs, updateBlog, categories, tags, addCategory, addTag } =
    useBlogStore();

  // Basic blog info
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  // SEO fields
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [slug, setSlug] = useState("");

  // Categories and tags
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");

  // Publishing options
  const [status, setStatus] = useState("draft");
  const [scheduledFor, setScheduledFor] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const blog = blogs.find((blog) => blog.id === id);
      if (blog) {
        // Basic info
        setTitle(blog.title);
        setExcerpt(blog.excerpt);
        setContent(blog.content);
        setFeaturedImage(blog.featuredImage || "");

        // SEO
        setMetaTitle(blog.metaTitle || blog.title);
        setMetaDescription(blog.metaDescription || blog.excerpt);
        setKeywords(blog.keywords || "");
        setSlug(blog.slug || slugify(blog.title));

        // Categories and tags
        setSelectedCategories(blog.categories || []);
        setSelectedTags(blog.tags || []);

        // Publishing
        setStatus(blog.status || "draft");
        setScheduledFor(blog.scheduledFor || "");
      } else {
        // Blog not found, redirect to blog dashboard
        router.push("/admin/blog");
      }
    }
    setIsLoading(false);
  }, [id, blogs, router]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!excerpt.trim()) newErrors.excerpt = "Excerpt is required";
    if (!content.trim()) newErrors.content = "Content is required";
    if (status === "scheduled" && !scheduledFor)
      newErrors.scheduledFor = "Schedule date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Generate slug if not provided
      const finalSlug = slug || slugify(title);

      // Update the blog post
      updateBlog(id, {
        title,
        excerpt,
        content,
        featuredImage,
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || excerpt,
        keywords,
        slug: finalSlug,
        categories: selectedCategories,
        tags: selectedTags,
        status: status as "draft" | "published" | "scheduled",
        scheduledFor: status === "scheduled" ? scheduledFor : undefined,
      });

      // Redirect to the blog dashboard
      router.push("/admin/blog");
    } catch (error) {
      console.error("Error updating blog post:", error);
      alert("Failed to update blog post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const categoryId = addCategory(newCategory.trim());
      setSelectedCategories([...selectedCategories, categoryId]);
      setNewCategory("");
    }
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      const tagId = addTag(newTag.trim());
      setSelectedTags([...selectedTags, tagId]);
      setNewTag("");
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center animate-pulse">
          <div className="h-10 w-10 bg-gray-200 rounded mr-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="space-y-4">
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/admin/blog" className="mr-4">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Edit Blog Post</h1>
        </div>

        <div className="flex items-center gap-2">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="button"
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
                <Save className="mr-2 h-4 w-4" /> Update
              </>
            )}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="content">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6 pt-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={errors.title ? "border-red-500" : ""}
              placeholder="Enter blog title"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="excerpt"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Excerpt
            </label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className={errors.excerpt ? "border-red-500" : ""}
              placeholder="Write a short summary of your blog post"
            />
            {errors.excerpt && (
              <p className="mt-1 text-sm text-red-500">{errors.excerpt}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              A short summary of your blog post that will appear in previews.
            </p>
          </div>

          <div>
            <label
              htmlFor="featuredImage"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Featured Image URL
            </label>
            <Input
              id="featuredImage"
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            <p className="mt-1 text-sm text-gray-500">
              Enter a URL for the featured image of your blog post.
            </p>
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <div
              className={`border rounded-md ${
                errors.content ? "border-red-500" : "border-gray-300"
              }`}
            >
              <BlogEditor content={content} onChange={setContent} />
            </div>
            {errors.content && (
              <p className="mt-1 text-sm text-red-500">{errors.content}</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6 pt-4">
          <div>
            <label
              htmlFor="slug"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL Slug
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                /blog/
              </span>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="rounded-l-none"
                placeholder="your-blog-post-title"
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              The URL-friendly version of the title. Leave blank to
              auto-generate.
            </p>
          </div>

          <div>
            <label
              htmlFor="metaTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Meta Title
            </label>
            <Input
              id="metaTitle"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              placeholder="SEO optimized title (defaults to post title)"
            />
            <p className="mt-1 text-sm text-gray-500">
              The title that appears in search engine results. Leave blank to
              use the post title.
            </p>
          </div>

          <div>
            <label
              htmlFor="metaDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Meta Description
            </label>
            <Textarea
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              rows={3}
              placeholder="Brief description for search engines"
            />
            <p className="mt-1 text-sm text-gray-500">
              A short description that appears in search engine results. Leave
              blank to use the excerpt.
            </p>
          </div>

          <div>
            <label
              htmlFor="keywords"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Keywords
            </label>
            <Input
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="seo, blog, marketing, etc."
            />
            <p className="mt-1 text-sm text-gray-500">
              Comma-separated keywords for search engines.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-md">
            <h3 className="text-sm font-medium text-blue-800 flex items-center mb-2">
              <Globe className="h-4 w-4 mr-2" /> SEO Preview
            </h3>
            <div className="bg-white p-3 rounded border">
              <p className="text-blue-600 text-lg font-medium line-clamp-1">
                {metaTitle || title || "Page Title"}
              </p>
              <p className="text-green-700 text-sm">
                {`https://yourwebsite.com/blog/${
                  slug || slugify(title) || "page-title"
                }`}
              </p>
              <p className="text-gray-600 text-sm line-clamp-2">
                {metaDescription || excerpt || "Page description goes here..."}
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6 pt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Categories
            </label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map((categoryId) => {
                  const category = categories.find((c) => c.id === categoryId);
                  return category ? (
                    <Badge
                      key={categoryId}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {category.name}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedCategories(
                            selectedCategories.filter((id) => id !== categoryId)
                          )
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ) : null;
                })}
              </div>

              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <Input
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Add or select a category"
                    className="pl-10"
                  />
                </div>
                <Button type="button" onClick={handleAddCategory} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {categories.length > 0 && (
                <div className="bg-gray-50 p-3 rounded-md max-h-40 overflow-y-auto">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center space-x-2 py-1"
                    >
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              category.id,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter(
                                (id) => id !== category.id
                              )
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tags
            </label>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tagId) => {
                  const tag = tags.find((t) => t.id === tagId);
                  return tag ? (
                    <Badge
                      key={tagId}
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      {tag.name}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedTags(
                            selectedTags.filter((id) => id !== tagId)
                          )
                        }
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ) : null;
                })}
              </div>

              <div className="flex gap-2">
                <div className="relative flex-grow">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add or select a tag"
                    className="pl-10"
                  />
                </div>
                <Button type="button" onClick={handleAddTag} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {tags.length > 0 && (
                <div className="bg-gray-50 p-3 rounded-md max-h-40 overflow-y-auto">
                  {tags.map((tag) => (
                    <div
                      key={tag.id}
                      className="flex items-center space-x-2 py-1"
                    >
                      <Checkbox
                        id={`tag-${tag.id}`}
                        checked={selectedTags.includes(tag.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedTags([...selectedTags, tag.id]);
                          } else {
                            setSelectedTags(
                              selectedTags.filter((id) => id !== tag.id)
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={`tag-${tag.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {tag.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Publishing Options
            </label>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="publish-immediately"
                  checked={status === "published"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setStatus("published");
                    } else {
                      setStatus("draft");
                    }
                  }}
                />
                <label
                  htmlFor="publish-immediately"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Publish immediately
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="schedule-publish"
                  checked={status === "scheduled"}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setStatus("scheduled");
                    } else {
                      setStatus("draft");
                    }
                  }}
                />
                <label
                  htmlFor="schedule-publish"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Schedule for later
                </label>
              </div>

              {status === "scheduled" && (
                <div>
                  <Input
                    type="datetime-local"
                    value={scheduledFor}
                    onChange={(e) => setScheduledFor(e.target.value)}
                    className={errors.scheduledFor ? "border-red-500" : ""}
                  />
                  {errors.scheduledFor && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.scheduledFor}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
