import AuthRoutes from "./auth-routes.js";
import CropRoutes from "./crop-routes.js";
import Welcome from "./welcome-route.js";
import { Router } from "express";
import { verifyToken } from "../middleware/auth/auth.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/crop", verifyToken, CropRoutes);
router.use("/welcome", Welcome);

export default router;
