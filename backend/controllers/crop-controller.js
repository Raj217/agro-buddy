import * as CropService from "../services/crop.service.js";

export const registerCrop = async (req, res, next) => {
  CropService.registerCropDetails(req.body, req.loggedInUser)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};
