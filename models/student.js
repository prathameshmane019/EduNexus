import mongoose, { Schema, models } from "mongoose";
const studentSchema = new Schema(
  {name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'student',
  }},

  { timestamps: true }
);

const Student = models.Student || mongoose.model("Student", studentSchema);
export default Student;
