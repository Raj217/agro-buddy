import { Router } from "express";
import * as CropDetails from "../controllers/crop-controller.js";

const router = Router();

router.post("/register", CropDetails.registerCrop);

export default router;
