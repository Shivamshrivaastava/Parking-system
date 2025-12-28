import express from "express";
import { stats } from "../controllers/admin.controller.js";
import { protect } from "../middleware/auth.js";
import { adminOnly } from "../middleware/admin.js";

const router=express.Router();
router.get("/stats",protect,adminOnly,stats);

export default router;