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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Save,
  GripVertical,
  ChevronDown,
  Edit,
} from "lucide-react";
import { useCMSStore } from "@/lib/cms-store";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsEditor() {
  const { faqs } = useCMSStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<any>(null);

  const handleEditFAQ = (faq: any) => {
    setEditingFAQ({ ...faq });
    setIsDialogOpen(true);
  };

  const handleAddNewFAQ = () => {
    setEditingFAQ({
      question: "",
      answer: "",
    });
    setIsDialogOpen(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditingFAQ((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSaveFAQ = () => {
    if (editingFAQ.id) {
      // Update existing FAQ
      // updateFAQ(editingFAQ.id, editingFAQ);
    } else {
      // Add new FAQ
      // addFAQ(editingFAQ);
    }
    setIsDialogOpen(false);
    setEditingFAQ(null);
  };

  const handleDeleteFAQ = (id: string) => {
    if (
      confirm(
        "Are you sure you want to delete this FAQ? This action cannot be undone."
      )
    ) {
      // deleteFAQ(id);
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
          <h1 className="text-3xl font-bold">Edit FAQs</h1>
        </div>

        <Button
          onClick={handleAddNewFAQ}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New FAQ
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Manage the FAQs displayed on your website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq._id} value={faq._id}>
                  <div className="flex items-center">
                    <div className="mr-2 text-gray-400">
                      <GripVertical className="h-5 w-5" />
                    </div>
                    <AccordionTrigger className="flex-grow hover:no-underline">
                      <span className="text-left font-medium">
                        {index + 1}. {faq.question}
                      </span>
                    </AccordionTrigger>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditFAQ(faq);
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          // handleDeleteFAQ(faq.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <AccordionContent>
                    <p className="text-gray-700 pl-7">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {faqs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No FAQs added yet</p>
                <Button onClick={handleAddNewFAQ}>Add Your First FAQ</Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingFAQ?.id ? "Edit FAQ" : "Add New FAQ"}
            </DialogTitle>
            <DialogDescription>
              {editingFAQ?.id
                ? "Update this frequently asked question"
                : "Add a new frequently asked question to your website"}
            </DialogDescription>
          </DialogHeader>

          {editingFAQ && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  name="question"
                  value={editingFAQ.question}
                  onChange={handleInputChange}
                  placeholder="e.g., How will digital marketing improve my business?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="answer">Answer</Label>
                <Textarea
                  id="answer"
                  name="answer"
                  value={editingFAQ.answer}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Provide a clear and concise answer to the question..."
                />
              </div>

              <Separator />

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium mb-3">Preview</h3>
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-medium">
                      {editingFAQ.question || "Question will appear here..."}
                    </h4>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="mt-2 text-gray-700">
                    {editingFAQ.answer || "Answer will appear here..."}
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
              onClick={handleSaveFAQ}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="mr-2 h-4 w-4" /> Save FAQ
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
