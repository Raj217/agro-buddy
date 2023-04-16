import { Router } from "express";
import * as WelcomeController from "../controllers/welcome-controller.js";

const router = Router();

router.get("", WelcomeController.welcome);

export default router;
