import AuthRoutes from "./auth-routes.js";
import { Router } from "express";

const router = Router();

router.use("/auth", AuthRoutes);

export default router;
