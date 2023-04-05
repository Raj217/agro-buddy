import * as CropService from "../services/crop.service.js";
import { ExceptionCodes } from "../utils/Error.js";

export const register = async (req, res, next) => {
  CropService.registerCropDetails(req.body, req.loggedInUser)
    .then(() => {
      res
        .status(ExceptionCodes.CREATED)
        .json({ messsage: "Crop registered successfully" });
    })
    .catch((err) => {
      next(err);
    });
};

export const get = async (req, res, next) => {
  CropService.getCropDetails(req.query, req.loggedInUser)
    .then((crops) => {
      res.status(ExceptionCodes.REQUEST_FULFILLED).json(crops);
    })
    .catch((err) => {
      next(err);
    });
};

export const deleteCrop = async (req, res, next) => {
  CropService.deleteCropDetails(req.query.id, req.query.crop, req.loggedInUser)
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "Deleted successfully" });
    })
    .catch((err) => {
      next(err);
    });
};

export const update = async (req, res, next) => {
  CropService.updateCrop(req.body, req.loggedInUser)
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "Updated successfully" });
    })
    .catch((err) => {
      next(err);
    });
};

export const updateImage = async (req, res, next) => {
  CropService.updateImage(req.body, req.loggedInUser)
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "Updated images successfully" });
    })
    .catch((err) => {
      next(err);
    });
};
