"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Save,
  GripVertical,
  Edit,
} from "lucide-react";
import { useCMSStore } from "@/lib/cms-store";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const iconOptions = [
  "Pencil",
  "Code",
  "Briefcase",
  "BarChart",
  "Image",
  "FileText",
  "Globe",
  "ShoppingCart",
  "Phone",
  "Mail",
  "MessageSquare",
  "Search",
];

const colorOptions = [
  {
    name: "Blue",
    bg: "bg-blue-50",
    hover: "text-blue-600",
    active: "text-blue-800",
  },
  {
    name: "Purple",
    bg: "bg-purple-50",
    hover: "text-purple-600",
    active: "text-purple-800",
  },
  {
    name: "Teal",
    bg: "bg-teal-50",
    hover: "text-teal-600",
    active: "text-teal-800",
  },
  {
    name: "Green",
    bg: "bg-green-50",
    hover: "text-green-600",
    active: "text-green-800",
  },
  {
    name: "Red",
    bg: "bg-red-50",
    hover: "text-red-600",
    active: "text-red-800",
  },
  {
    name: "Amber",
    bg: "bg-amber-50",
    hover: "text-amber-600",
    active: "text-amber-800",
  },
  {
    name: "Pink",
    bg: "bg-pink-50",
    hover: "text-pink-600",
    active: "text-pink-800",
  },
  {
    name: "Indigo",
    bg: "bg-indigo-50",
    hover: "text-indigo-600",
    active: "text-indigo-800",
  },
];

export default function ServicesEditor() {
  const { services } = useCMSStore();
  const [editingService, setEditingService] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // For new service item
  const [newServiceItem, setNewServiceItem] = useState({ name: "", href: "" });

  const handleEditService = (service: any) => {
    setEditingService({ ...service });
    setIsDialogOpen(true);
  };

  const handleAddServiceItem = () => {
    if (newServiceItem.name.trim() && newServiceItem.href.trim()) {
      if (editingService) {
        setEditingService({
          ...editingService,
          items: [...editingService.items, { ...newServiceItem }],
        });
      }
      setNewServiceItem({ name: "", href: "" });
    }
  };

  const handleRemoveServiceItem = (index: number) => {
    if (editingService) {
      setEditingService({
        ...editingService,
        items: editingService.items.filter((_: any, i: number) => i !== index),
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingService((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleServiceItemChange = (
    index: number,
    field: string,
    value: string
  ) => {
    if (editingService) {
      const updatedItems = [...editingService.items];
      updatedItems[index] = { ...updatedItems[index], [field]: value };
      setEditingService({
        ...editingService,
        items: updatedItems,
      });
    }
  };

  const handleNewServiceItemChange = (field: string, value: string) => {
    setNewServiceItem((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveService = () => {
    if (editingService.id) {
      // Update existing service
      // updateService(editingService.id, editingService);
    } else {
      // Add new service
      // addService(editingService);
    }
    setIsDialogOpen(false);
    setEditingService(null);
  };

  const handleAddNewService = () => {
    setEditingService({
      title: "",
      icon: "Pencil",
      items: [],
      bgColor: "bg-blue-50",
      hoverColor: "text-blue-600",
      activeColor: "text-blue-800",
    });
    setIsDialogOpen(true);
  };

  const handleDeleteService = (id: string) => {
    if (
      confirm(
        "Are you sure you want to delete this service? This action cannot be undone."
      )
    ) {
      // deleteService(id);
    }
  };

  const handleColorSelect = (colorName: string) => {
    const color = colorOptions.find((c) => c.name === colorName);
    if (color && editingService) {
      setEditingService({
        ...editingService,
        bgColor: color.bg,
        hoverColor: color.hover,
        activeColor: color.active,
      });
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
          <h1 className="text-3xl font-bold">Edit Services Section</h1>
        </div>

        <Button
          onClick={handleAddNewService}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Service
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Services</CardTitle>
          <CardDescription>
            Manage the services displayed on your homepage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service._id}
                className="flex items-center gap-4 p-4 border rounded-md bg-gray-50"
              >
                <div className="flex-shrink-0">
                  <GripVertical className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">{service.title}</h3>
                  <p className="text-sm text-gray-500">
                    {service.items.length} items
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditService(service)}
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    // onClick={() => handleDeleteService(service.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </div>
              </div>
            ))}

            {services.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No services added yet</p>
                <Button onClick={handleAddNewService}>
                  Add Your First Service
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingService?.id ? "Edit Service" : "Add New Service"}
            </DialogTitle>
            <DialogDescription>
              {editingService?.id
                ? "Update the details for this service category"
                : "Add a new service category to your homepage"}
            </DialogDescription>
          </DialogHeader>

          {editingService && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Service Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={editingService.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Design, Development, Marketing"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="icon">Icon</Label>
                  <Select
                    value={editingService.icon}
                    onValueChange={(value) =>
                      setEditingService({ ...editingService, icon: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an icon" />
                    </SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((icon) => (
                        <SelectItem key={icon} value={icon}>
                          {icon}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Color Scheme</Label>
                <div className="grid grid-cols-4 gap-2">
                  {colorOptions.map((color) => (
                    <Button
                      key={color.name}
                      type="button"
                      variant="outline"
                      className={`h-10 ${color.bg} hover:${color.hover} ${
                        editingService.bgColor === color.bg
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

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Service Items</Label>
                </div>

                {editingService.items.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 border rounded bg-gray-50"
                  >
                    <div className="grid grid-cols-2 gap-2 flex-grow">
                      <Input
                        value={item.name}
                        onChange={(e) =>
                          handleServiceItemChange(index, "name", e.target.value)
                        }
                        placeholder="Service name"
                      />
                      <Input
                        value={item.href}
                        onChange={(e) =>
                          handleServiceItemChange(index, "href", e.target.value)
                        }
                        placeholder="Link (e.g., /services/web-design)"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveServiceItem(index)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-2">
                  <Input
                    value={newServiceItem.name}
                    onChange={(e) =>
                      handleNewServiceItemChange("name", e.target.value)
                    }
                    placeholder="New service name"
                  />
                  <div className="flex gap-2">
                    <Input
                      value={newServiceItem.href}
                      onChange={(e) =>
                        handleNewServiceItemChange("href", e.target.value)
                      }
                      placeholder="Link (e.g., /services/web-design)"
                    />
                    <Button
                      type="button"
                      onClick={handleAddServiceItem}
                      size="icon"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveService}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="mr-2 h-4 w-4" /> Save Service
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
