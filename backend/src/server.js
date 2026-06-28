import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();

// middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
// app.use(rateLimiter);

// routes
app.use("/notes", notesRoutes);

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
  });
});
