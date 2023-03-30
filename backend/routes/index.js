import AuthRoutes from "./auth-routes.js";
import CropRoutes from "./crop-routes.js";
import { Router } from "express";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/crop", auth, CropRoutes);

export default router;
