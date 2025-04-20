import { NextResponse } from "next/server";
import { UpdateFAQSchema } from "@/types/faq.schema";
import { connectToDatabase } from "@/lib/connection/mongodb";
import { FAQ } from "@/models/Faq";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase(); // Ensure database is connected
  const body = await req.json();
  const result = UpdateFAQSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error.errors }, { status: 400 });
  }

  try {
    const updatedFAQ = await FAQ.findByIdAndUpdate(
      params.id, // The FAQ ID from the route parameters
      result.data, // The updated data
      { new: true } // Return the updated FAQ
    );

    if (!updatedFAQ) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json({ faq: updatedFAQ });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update FAQ" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await connectToDatabase(); // Ensure database is connected

  try {
    const deletedFAQ = await FAQ.findByIdAndDelete(params.id);

    if (!deletedFAQ) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json({ faq: deletedFAQ });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete FAQ" },
      { status: 500 }
    );
  }
}
