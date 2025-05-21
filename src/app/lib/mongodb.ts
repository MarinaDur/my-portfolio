import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  console.error("MONGODB_URI is missing from environment variables");
  process.exit(1); // Exit the process if the MongoDB URI is not defined
}

export async function connectToDB() {
  // Check if there's already an established connection
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // After connection is established, log the current connection state
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB connection is established and ready.");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exiting the process in case of an error
  }
}
