/* ==================== AUTH ROUTES ==================== */

/* ========== Importing models ========== */
import { authControllers } from "@controllers";
import express from "express";

/* ========== Declaration of constants ========== */
const router = express.Router();

/* ========== Get methods ========== */
router.get("/", authControllers.login);

/* ========== Exporting models ========== */
export default router;
