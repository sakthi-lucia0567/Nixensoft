import { Schema, model, models } from "mongoose";

// Define the FAQ schema
const faqSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  { timestamps: true } // Automatically handles createdAt and updatedAt fields
);

// Ensure we don't overwrite the existing model if it exists
export const FAQ = models.FAQ || model("FAQ", faqSchema);
