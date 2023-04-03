import { update } from "../controllers/crop-controller.js";
import UserRoles from "../models/constants.js";
import Crop from "../models/crop.js";
import Exception, { ExceptionCodes } from "../utils/Error.js";

export const registerCropDetails = async (cropDetails, user) => {
  if (user.role != UserRoles.ADMIN) {
    throw new Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }
  const { name, images, details } = cropDetails;
  if (!name) throw new Exception("Name is required", ExceptionCodes.BAD_INPUT);
  let imgs = [];
  if (images) imgs = images;
  let cropNewDetails;

  if (details) {
    const {
      nitrogen,
      phosphorus,
      potassium,
      temperature,
      humidity,
      pH,
      rainfall,
    } = details;

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
  let updateFields = {};
  if (cropNewDetails !== undefined) {
    if (crop !== null && crop.details.length > 0) {
      updateFields = {
        details: [...crop.details, cropNewDetails],
      };
    } else {
      updateFields = {
        details: [cropNewDetails],
      };
    }
  }
  if (imgs.length > 0) {
    if (crop !== null && crop.images.length > 0) {
      updateFields["images"] = [...crop.images, ...images];
    } else {
      updateFields["images"] = images;
    }
  }
  if (crop) {
    await Crop.findByIdAndUpdate({ _id: crop._id }, updateFields);
  } else {
    await Crop.create({
      name,
      ...updateFields,
    });
  }
};

// TODO: Add absolute values (should return the nearest values)
export const getCropDetails = async (cropDetails, user) => {
  const {
    name,
    nitrogen,
    fromNitrogenLevel,
    toNitrogenLevel,
    phosphorus,
    fromPhosphorusLevel,
    toPhosphorusLevel,
    potassium,
    fromPotassiumLevel,
    toPotassiumLevel,
    temperature,
    fromTemperatureLevel,
    toTemperatureLevel,
    humidity,
    fromHumidityLevel,
    toHumidityLevel,
    ph,
    fromPHLevel,
    toPHLevel,
    rainfall,
    fromRainfallLevel,
    toRainfallLevel,
  } = cropDetails;
  if (user.role !== UserRoles.ADMIN)
    throw new Exception("Unauthorized", ExceptionCodes.UNAUTHORIZED);
  let cropNameQuery = {},
    cropQuery = {};
  if (name) cropNameQuery["name"] = { name };

  if (nitrogen)
    cropQuery["details"]["nitrogen"] = { $gte: nitrogen, $lte: nitrogen };
  if (fromNitrogenLevel)
    cropQuery["details"]["nitrogen"] = {
      ...cropQuery["nitrogen"],
      $lte: fromNitrogenLevel,
    };
  if (toNitrogenLevel)
    cropQuery["nitrogen"] = {
      ...cropQuery["nitrogen"],
      $gte: toNitrogenLevel,
    };

  if (phosphorus)
    cropQuery["phosphorus"] = { $gte: phosphorus, $lte: phosphorus };
  if (fromPhosphorusLevel)
    cropQuery["phosphorus"] = {
      ...cropQuery["phosphorus"],
      $lte: fromPhosphorusLevel,
    };
  if (toPhosphorusLevel)
    cropQuery["phosphorus"] = {
      ...cropQuery["phosphorus"],
      $gte: toPhosphorusLevel,
    };

  if (potassium) cropQuery["potassium"] = { $gte: potassium, $lte: potassium };
  if (fromPotassiumLevel)
    cropQuery["potassium"] = {
      ...cropQuery["potassium"],
      $lte: fromPotassiumLevel,
    };
  if (toPotassiumLevel)
    cropQuery["potassium"] = {
      ...cropQuery["potassium"],
      $gte: toPotassiumLevel,
    };

  if (temperature)
    cropQuery["temperature"] = { $gte: temperature, $lte: temperature };
  if (fromTemperatureLevel)
    cropQuery["temperature"] = {
      ...cropQuery["temperature"],
      $lte: fromTemperatureLevel,
    };
  if (toTemperatureLevel)
    cropQuery["temperature"] = {
      ...cropQuery["temperature"],
      $gte: toTemperatureLevel,
    };

  if (humidity) cropQuery["humidity"] = { $gte: humidity, $lte: humidity };
  if (fromHumidityLevel)
    cropQuery["humidity"] = {
      ...cropQuery["humidity"],
      $lte: fromHumidityLevel,
    };
  if (toHumidityLevel)
    cropQuery["humidity"] = {
      ...cropQuery["humidity"],
      $gte: toHumidityLevel,
    };

  if (ph) cropQuery["pH"] = { $gte: ph, $lte: ph };
  if (fromPHLevel)
    cropQuery["pH"] = {
      ...cropQuery["pH"],
      $lte: fromPHLevel,
    };
  if (toPHLevel)
    cropQuery["pH"] = {
      ...cropQuery["pH"],
      $gte: toPHLevel,
    };

  if (rainfall) cropQuery["rainfall"] = { $gte: rainfall, $lte: rainfall };
  if (fromRainfallLevel)
    cropQuery["rainfall"] = {
      ...cropQuery["rainfall"],
      $lte: fromRainfallLevel,
    };
  if (toRainfallLevel)
    cropQuery["rainfall"] = {
      ...cropQuery["rainfall"],
      $gte: toRainfallLevel,
    };

  let crops = Crop.find({ $and: { cropQuery } });
  let cropIds = [];
  for (var crop in crops) {
    cropIds.push(crop.cropDetailIds);
  }

  cropDetails = await Crop.find({
    $and: { ...cropNameQuery, cropDetails: { _id: cropIds, ...cropQuery } },
  });
  return { cropDetails };
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
