import AuthRoutes from "./auth-routes.js";
import CropRoutes from "./crop-routes.js";
import { Router } from "express";
import { verifyToken } from "../middleware/auth/auth.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/crop", verifyToken, CropRoutes);

export default router;
