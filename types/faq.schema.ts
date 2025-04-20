import { z } from "zod";

export const FAQSchema = z.object({
  question: z.string().min(3),
  answer: z.string().min(3),
});

export const CreateFAQSchema = FAQSchema;
export const UpdateFAQSchema = FAQSchema.partial();

export type FAQ = z.infer<typeof FAQSchema>;
export type CreateFAQInput = z.infer<typeof CreateFAQSchema>;
export type UpdateFAQInput = z.infer<typeof UpdateFAQSchema>;
