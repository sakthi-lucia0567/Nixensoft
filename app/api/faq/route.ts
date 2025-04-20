import { NextResponse } from "next/server";
import { CreateFAQSchema } from "@/types/faq.schema";
import { connectToDatabase } from "@/lib/connection/mongodb";
import { FAQ } from "@/models/Faq";

export async function GET() {
  await connectToDatabase(); // Ensure database is connected
  try {
    const faqs = await FAQ.find(); // Retrieve FAQs from the database
    return NextResponse.json({ faqs });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await connectToDatabase(); // Ensure database is connected
  const body = await req.json();
  const result = CreateFAQSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error.errors }, { status: 400 });
  }

  try {
    const newFAQ = new FAQ(result.data); // Create a new FAQ
    await newFAQ.save(); // Save it to the database
    return NextResponse.json({ faq: newFAQ }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save FAQ" }, { status: 500 });
  }
}
