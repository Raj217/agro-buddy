import UserRoles from "../models/constants.js";
import Crop from "../models/crop.js";
import Exception, { ExceptionCodes } from "../utils/Error.js";

export const registerCropDetails = async (cropDetails, user) => {
  // if (user.role != UserRoles.ADMINISTRATOR) {
  //   throw Exception(
  //     "You don't have enough privilege.",
  //     ExceptionCodes.UNAUTHORIZED
  //   );
  // }
  const { name, images } = cropDetails;
  if (!name) throw new Exception("Name is required", ExceptionCodes.BAD_INPUT);
  let imgs = [];
  if (images) imgs = images;
  let cropNewDetails = {};

  if (cropDetails.details) {
    const {
      nitrogen,
      phosphorus,
      potassium,
      temperature,
      humidity,
      pH,
      rainfall,
    } = cropDetails.details;

    cropNewDetails = {
      nitrogen: nitrogen,
      phosphorus: phosphorus,
      potassium: potassium,
      temperature: temperature,
      humidity: humidity,
      pH: pH,
      rainfall: rainfall,
    };
  }

  let crop = await Crop.findOne({ name });
  if (crop) {
    if (crop.images.size > 0) {
      imgs = [...crop.images, ...imgs];
    }
    await Crop.findOneAndUpdate(
      { _id: crop._id },
      { details: [...crop.details, cropNewDetails], images: images }
    );
  } else {
    if (cropDetails.details === undefined) {
      await Crop.create({ name, images });
    } else {
      await Crop.create({
        name,
        details: [cropNewDetails.size == 0 ? null : cropNewDetails],
        images,
      });
    }
  }
};

// TODO: Add absolute values (should return the nearest values)
export const getCropDetails = async (cropDetails, user) => {
  const {
    name,
    fromNitrogenLevel,
    toNitrogenLevel,
    fromphosphorusLevel,
    tophosphorusLevel,
    fromPotassiumLevel,
    toPotassiumLevel,
    fromTemperatureLevel,
    toTemperatureLevel,
    fromHumidityLevel,
    toHumidityLevel,
    fromPHLevel,
    toPHLevel,
    fromRainfallLevel,
    toRainfallLevel,
  } = cropDetails;
  if (user.role === undefined)
    throw Exception("Unauthorized", ExceptionCodes.UNAUTHORIZED);
  let cropNameQuery = {},
    cropQuery = {};
  if (!name) cropNameQuery["name"] = { name };

  if (!fromNitrogenLevel)
    cropQuery["details"]["nitrogen"] = { $gte: fromNitrogenLevel };
  if (!toNitrogenLevel)
    cropQuery["nitrogen"] = {
      ...cropQuery["nitrogen"],
      $lte: toNitrogenLevel,
    };

  if (!fromphosphorusLevel)
    cropQuery["phosphorus"] = { $gte: fromphosphorusLevel };
  if (!tophosphorusLevel)
    cropQuery["phosphorus"] = {
      ...cropQuery["phosphorus"],
      $lte: tophosphorusLevel,
    };

  if (!fromPotassiumLevel)
    cropQuery["potassium"] = { $gte: fromPotassiumLevel };
  if (!toPotassiumLevel)
    cropQuery["potassium"] = {
      ...cropQuery["potassium"],
      $lte: toPotassiumLevel,
    };

  if (!fromTemperatureLevel)
    cropQuery["temperature"] = { $gte: fromTemperatureLevel };
  if (!toTemperatureLevel)
    cropQuery["temperature"] = {
      ...cropQuery["temperature"],
      $lte: toTemperatureLevel,
    };

  if (!fromHumidityLevel) cropQuery["humidity"] = { $gte: fromHumidityLevel };
  if (!toHumidityLevel)
    cropQuery["humidity"] = {
      ...cropQuery["humidity"],
      $lte: toHumidityLevel,
    };

  if (!fromPHLevel) cropQuery["pH"] = { $gte: fromPHLevel };
  if (!toPHLevel)
    cropQuery["pH"] = {
      ...cropQuery["pH"],
      $lte: toPHLevel,
    };

  if (!fromRainfallLevel) cropQuery["rainfall"] = { $gte: fromRainfallLevel };
  if (!toRainfallLevel)
    cropQuery["rainfall"] = {
      ...cropQuery["rainfall"],
      $lte: toRainfallLevel,
    };

  let crops = Crop.find({ $and: { cropQuery } });
  let cropIds = [];
  for (var crop in crops) {
    cropIds.push(...crop.cropDetailIds);
  }

  cropDetails = Crop.find({
    $and: { ...cropNameQuery, cropDetails: { _id: cropIds, ...cropQuery } },
  });
};
export const updateCropDetails = async (name, cropDetails, user) => {
  if (user.role != UserRoles.ADMINISTRATOR) {
    throw Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }
  await Crop.findOneAndUpdate({ name }, { cropDetails: cropDetails });
};
export const deleteCropDetails = async (name, cropDetails, user) => {
  if (user.role != UserRoles.ADMINISTRATOR) {
    throw Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }
  await Crop.findOneAndRemove({ name }, { cropDetails: cropDetails });
};

export const updateCrop = async (id, name, img, cropDetails, user) => {
  if (user.role != UserRoles.ADMINISTRATOR) {
    throw Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }
  await Crop.findOneAndUpdate(
    { _id: id },
    { name, img, cropDetails: cropDetails }
  );
};
