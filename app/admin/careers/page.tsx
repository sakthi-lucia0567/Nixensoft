"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Search,
  Filter,
  ArrowUpDown,
} from "lucide-react";
import { format } from "date-fns";
import { useJobStore } from "@/lib/job-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function CareersAdminPage() {
  const { jobs, deleteJob, toggleJobStatus } = useJobStore();
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<string>("updatedAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<string | null>(null);

  // Filter and sort jobs
  const filteredJobs = jobs
    .filter((job) => {
      // Search filter
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && job.isActive) ||
        (statusFilter === "inactive" && !job.isActive);

      // Type filter
      const matchesType =
        typeFilter === "all" ||
        job.type.toLowerCase().includes(typeFilter.toLowerCase());

      return matchesSearch && matchesStatus && matchesType;
    })
    .sort((a, b) => {
      if (sortField === "title") {
        return sortDirection === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortField === "type") {
        return sortDirection === "asc"
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type);
      } else if (sortField === "location") {
        return sortDirection === "asc"
          ? a.location.localeCompare(b.location)
          : b.location.localeCompare(a.location);
      } else {
        // Default sort by updatedAt
        return sortDirection === "asc"
          ? new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
          : new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const confirmDelete = (id: string) => {
    setJobToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDelete = () => {
    if (jobToDelete) {
      deleteJob(jobToDelete);
      setDeleteDialogOpen(false);
      setJobToDelete(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Career Openings</h1>
        <Button onClick={() => router.push("/admin/careers/new")}>
          <Plus className="mr-2 h-4 w-4" /> Add New Opening
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search job openings..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <div className="w-40">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>
                    {statusFilter === "all"
                      ? "All Status"
                      : statusFilter === "active"
                      ? "Active"
                      : "Inactive"}
                  </span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-40">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <div className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span>{typeFilter === "all" ? "All Types" : typeFilter}</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">
                <button
                  className="flex items-center"
                  onClick={() => handleSort("title")}
                >
                  Job Title
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center"
                  onClick={() => handleSort("type")}
                >
                  Type
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead>
                <button
                  className="flex items-center"
                  onClick={() => handleSort("location")}
                >
                  Location
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <button
                  className="flex items-center"
                  onClick={() => handleSort("updatedAt")}
                >
                  Last Updated
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </button>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-muted-foreground"
                >
                  No job openings found. Create your first job opening.
                </TableCell>
              </TableRow>
            ) : (
              filteredJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>
                    <Badge variant={job.isActive ? "success" : "secondary"}>
                      {job.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {format(new Date(job.updatedAt), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => toggleJobStatus(job.id)}
                        title={job.isActive ? "Deactivate" : "Activate"}
                      >
                        {job.isActive ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          router.push(`/admin/careers/edit/${job.id}`)
                        }
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => confirmDelete(job.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this job opening?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the job
              opening.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              className="text-white"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
