import { Router } from "express";
import * as CropDetails from "../controllers/crop-controller.js";

const router = Router();

router.post("", CropDetails.register);
router.get("", CropDetails.getPreview);
router.get("/details", CropDetails.getDetails);
router.patch("", CropDetails.update);
router.delete("", CropDetails.deleteCrop);
router.put("/image", CropDetails.updateImage);

export default router;
