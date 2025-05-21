import { NextResponse } from "next/server";
import { sendContactDetails } from "./controller";
import { connectToDB } from "@/app/lib/mongodb";
import { AppError, handleErrorResponse } from "@/app/utilsServer/appError";
import mongoose from "mongoose";

export async function POST(request: Request) {
  try {
    await connectToDB();

    // Log the database connection status
    const state = mongoose.connection.readyState;
    const statusMessages = [
      "disconnected",
      "connected",
      "connecting",
      "disconnecting",
    ];
    console.log(
      `Database connection status: ${statusMessages[state] || "unknown"}`
    );

    const data = await request.json();

    const contactDetails = await sendContactDetails(data);

    return NextResponse.json(
      {
        status: 201,
        message: "Contact saved successfully",
        data: contactDetails,
      },
      { status: 201 }
    );
  } catch (err) {
    return handleErrorResponse(err as AppError);
  }
}
