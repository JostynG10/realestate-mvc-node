/* ==================== ROUTES INDEX ==================== */

/* ========== Importing models ========== */
import express from "express";
import authRoutes from "@routes/auth.routes.js";

/* ========== Declaration of constants ========== */
const router = express.Router();

/* ========== Declaration of routes ========== */
router.use("/auth", authRoutes);

/* ========== Exporting models ========== */
export default router;