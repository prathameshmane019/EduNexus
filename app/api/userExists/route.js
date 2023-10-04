import { connectMongoDB } from "../../../lib/mongodb";
import Student from "../../../models/student";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await Student.findOne({ email });
    console.log(user);
    return NextResponse.json({ user:user });
  } catch (error) {
    console.log(error);
  }
}

