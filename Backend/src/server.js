import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import parkingRoutes from "./routes/parking.routes.js";
import adminRoutes from "./routes/admin.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.options("*", cors());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
