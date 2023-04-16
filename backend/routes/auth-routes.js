import { Router } from "express";
import * as AuthController from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/auth/auth.js";

const router = Router();

router.post("/sign-up", AuthController.signUp);
router.post("/login", AuthController.login);
router.post("/generate-otp", AuthController.generateAndSendOtp);
router.post("/validate-otp", AuthController.validateOtp);
router.get("/user", verifyToken, AuthController.getUser);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/change-password", verifyToken, AuthController.changePassword);

export default router;
