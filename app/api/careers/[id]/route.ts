import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/connection/mongodb";
import { Career } from "@/models/Career";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase(); // Ensure database connection
    const { id } = await params;

    const career = await Career.findById(id); // Find career by ID

    if (!career) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, career });
  } catch (err) {
    console.error("Error fetching career:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase(); // Ensure database connection
    const json = await req.json();
    const { id } = await params;

    const updatedCareer = await Career.findByIdAndUpdate(
      id, // Find job by ID
      json, // Updated data
      { new: true } // Return the updated job
    );

    if (!updatedCareer) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, career: updatedCareer });
  } catch (err) {
    console.error("Error updating Career:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase(); // Ensure database connection
    const { id } = await params;

    const deletedCareer = await Career.findByIdAndDelete(id); // Delete job by ID

    if (!deletedCareer) {
      return NextResponse.json(
        { success: false, error: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, career: deletedCareer });
  } catch (err) {
    console.error("Error deleting career:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    // Find the career by ID
    const career = await Career.findById(id);

    if (!career) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    // Toggle the isActive status
    career.isActive = !career.isActive;
    await career.save();

    return NextResponse.json({
      success: true,
      career: career,
    });
  } catch (err) {
    console.error("Error toggling career status:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
