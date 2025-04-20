import { z } from "zod";

export const CareerTypeEnum = z.enum([
  "full-time",
  "part-time",
  "contract",
  "internship",
  "remote",
]);

export const CareerOpeningSchema = z.object({
  _id: z.string().uuid(),
  title: z.string().min(3),
  type: CareerTypeEnum,
  location: z.string().min(2),
  description: z.string().min(10),
  requirements: z.array(z.string().min(3)),
  isActive: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const CreateCareerSchema = CareerOpeningSchema.omit({
  _id: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateJobSchema = CreateCareerSchema.partial();

export type CareerOpening = z.infer<typeof CareerOpeningSchema>;
export type CreateCareerInput = z.infer<typeof CreateCareerSchema>;
export type UpdateCareerInput = z.infer<typeof UpdateJobSchema>;
