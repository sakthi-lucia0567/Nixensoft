import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/connection/mongodb";
import { Career } from "@/models/Career";

export async function GET() {
  try {
    await connectToDatabase(); // Ensure database connection
    const careers = await Career.find(); // Retrieve all jobs from the database
    console.log("Careers:", careers); // Log the retrieved jobs to the console
    return NextResponse.json({ careers });
  } catch (err) {
    console.error("Error fetching careers:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const json = await req.json();
    console.log("Json", json);

    const newCareer = await Career.create(json);

    return NextResponse.json({ success: true, career: newCareer });
  } catch (err) {
    console.error("Error creating Career:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
