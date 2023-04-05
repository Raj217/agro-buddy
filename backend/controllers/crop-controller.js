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

export const updateCropDetails = async (req, res, next) => {
  CropService.updateCropDetails(req.name, req.cropDetails, req.loggedInUser)
    .then(() => {
      res.status(ExceptionCodes.REQUEST_FULFILLED).json();
    })
    .catch((err) => {
      next();
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

export const update = (req, res) => {
  CropService.updateCrop(
    req.id,
    req.name,
    req.img,
    req.cropDetails,
    req.loggedInUser
  )
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "Updated successfully" });
    })
    .catch((err) => {
      next(err);
    });
};
