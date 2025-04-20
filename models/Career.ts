import { Schema, model, models } from "mongoose";

const careerSchema = new Schema(
  {
    title: String,
    type: String,
    location: String,
    description: String,
    requirements: [String],
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Career = models.careers || model("careers", careerSchema);
