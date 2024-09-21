import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Oakkharaphong Garpanya",
    studentId: "660610806",
  });
};