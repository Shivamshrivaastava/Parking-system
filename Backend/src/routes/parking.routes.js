import express from "express";
import { park, exit } from "../controllers/parking.controller.js";
import { protect } from "../middleware/auth.js";

const router=express.Router();
router.post("/park",protect,park);
router.put("/exit/:id",protect,exit);

export default router;