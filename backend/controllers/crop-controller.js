import * as CropService from "../services/crop.service.js";
import { ExceptionCodes } from "../utils/Error.js";

export const registerCrop = async (req, res, next) => {
  CropService.registerCropDetails(req.body, req.loggedInUser)
    .then((crop) => {
      res.status(ExceptionCodes.CREATED).json(crop);
    })
    .catch((err) => {
      next(err);
    });
};

export const getCrops = async (req, res, next) => {
  CropService.getCropsDetails(req.query).then((crops) => {
    res.status(201).json(crops);
  });
};
