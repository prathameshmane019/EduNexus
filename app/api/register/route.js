import { connectMongoDB } from "@/lib/mongodb";
import Student from "@/models/student"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const role = "student"
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await Student.create({ name, email, password: hashedPassword,role});

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
