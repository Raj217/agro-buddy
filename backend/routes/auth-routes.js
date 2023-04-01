import { Router } from "express";
import * as AuthController from "../controllers/auth-controller.js";
import { verifyToken } from "../middleware/auth/auth.js";

const router = Router();

router.post("/sign-up", AuthController.signUp);
router.post("/generate-otp/:email", AuthController.generateAndSendOtp);
router.post("/forgot-password/:email", AuthController.forgotPassword);
router.post("/reset-password/:email", AuthController.resetPassword);
router.post("/login", AuthController.login);
router.get("/user/:id", verifyToken, AuthController.getUser);
router.post("/validate-otp", AuthController.validateOtp)

export default router;
