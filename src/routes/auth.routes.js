/* ==================== AUTH ROUTES ==================== */

/* ========== Importing models ========== */
import { authControllers } from "@controllers";
import express from "express";

/* ========== Declaration of constants ========== */
const router = express.Router();

/* ========== Get methods ========== */
router.get("/login", authControllers.login);

router.get("/register", authControllers.register)

/* ========== Exporting models ========== */
export default router;
