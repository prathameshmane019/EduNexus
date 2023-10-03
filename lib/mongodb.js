import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://maneprathamesh019:maneprathamesh019@cluster0.6tn2owo.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
