"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PlusCircle,
  Search,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Tag,
  Filter,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useBlogStore } from "@/lib/blog-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BlogDashboard() {
  const router = useRouter();
  const { blogs, deleteBlog, categories } = useBlogStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading blogs
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredBlogs = blogs.filter((blog) => {
    // Search filter
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.keywords &&
        blog.keywords.toLowerCase().includes(searchTerm.toLowerCase()));

    // Status filter
    const matchesStatus =
      statusFilter === "all" || blog.status === statusFilter;

    // Category filter
    const matchesCategory =
      categoryFilter === "all" ||
      (blog.categories && blog.categories.includes(categoryFilter));

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      deleteBlog(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <Link href="/admin/blog/new">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="mr-2 h-4 w-4" /> New Blog Post
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="w-full md:w-auto relative flex-grow">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search blogs..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full md:w-auto">
          <Select onValueChange={setStatusFilter} value={statusFilter}>
            <SelectTrigger className="w-full md:w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="scheduled">Scheduled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-auto">
          <Select onValueChange={setCategoryFilter} value={categoryFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="grid gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 animate-pulse"
            >
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="flex space-x-2">
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                  <div className="h-8 w-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredBlogs.length > 0 ? (
        <div className="space-y-4">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blog.scheduledFor
                        ? `Scheduled: ${new Date(
                            blog.scheduledFor
                          ).toLocaleDateString()}`
                        : formatDistanceToNow(new Date(blog.updatedAt), {
                            addSuffix: true,
                          })}
                    </span>

                    {blog.status && (
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-800"
                            : blog.status === "scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {blog.status.charAt(0).toUpperCase() +
                          blog.status.slice(1)}
                      </span>
                    )}

                    {blog.categories && blog.categories.length > 0 && (
                      <span className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {blog.categories
                          .map((catId) => {
                            const category = categories.find(
                              (c) => c.id === catId
                            );
                            return category ? category.name : "";
                          })
                          .join(", ")}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link href={`/admin/blog/edit/${blog.id}`}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/blog/${blog.slug || blog.id}`} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600"
                      >
                        <Trash2 className="h-4 w-4 mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-gray-600 mb-4">
            No blog posts found
          </h3>
          <p className="text-gray-500 mb-6">
            {searchTerm || statusFilter !== "all" || categoryFilter !== "all"
              ? "No blog posts match your search criteria."
              : "You haven't created any blog posts yet."}
          </p>
          {searchTerm || statusFilter !== "all" || categoryFilter !== "all" ? (
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("all");
                setCategoryFilter("all");
              }}
            >
              Clear Filters
            </Button>
          ) : (
            <Link href="/admin/blog/new">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <PlusCircle className="mr-2 h-4 w-4" /> Create Your First Blog
                Post
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
