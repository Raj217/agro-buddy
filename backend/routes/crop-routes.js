import { Router } from "express";
import * as CropDetails from "../controllers/crop-controller.js";

const router = Router();

router.post("/register", CropDetails.register);
router.get("/get", CropDetails.getCropDetails);
router.put("/update-details", CropDetails.updateCropDetails);
router.put("/update", CropDetails.update);
router.delete("/delete", CropDetails.delete);

export default router;
