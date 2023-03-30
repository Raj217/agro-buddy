import { Router } from "express";
import * as AuthController from "../controllers/auth-controller.js";

const router = Router();

router.post("/login", AuthController.login);
router.post("/generate-otp", AuthController.generateAndSendOtp);
router.get("/user", AuthController.getUser);
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/sign-up", AuthController.signUp);

export default router;
