import { NextResponse } from "next/server";

export class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode = 500) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export function handleErrorResponse(err: AppError) {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  return NextResponse.json(
    {
      status,
      error: {
        statusCode,
        status,
        isOperational: err.isOperational || false,
      },
      message: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    },
    { status: statusCode }
  );
}
