import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESFULLY");
  } catch (error) {
    console.error("MONGODB FAILED TO CONNECT", error);
    procces.exit(1); // 1 exit with failure // 0 exit with succes
  }
};
