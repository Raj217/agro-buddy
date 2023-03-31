import UserRoles from "../models/constants";
import Crop from "../models/crop";
import Exception, { ExceptionCodes } from "../utils/Error";

export const registerCropDetails = async (cropDetails, user) => {
  if (user.role != UserRoles.ADMINISTRATOR) {
    throw Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }
  const {
    name,
    nitrogen,
    phosphrous,
    potassium,
    temperature,
    humidity,
    pH,
    rainfall,
    img,
  } = cropDetails;
  if (!name) throw Exception("Name is required", ExceptionCodes.BAD_INPUT);

  let cropNewDetails = {
    nitrogen: nitrogen,
    phosphrous: phosphrous,
    potassium: potassium,
    temperature: temperature,
    humidity: humidity,
    pH: pH,
    rainfall: rainfall,
  };

  let crop = await Crop.findOne({ name });
  if (crop)
    await Crop.findOneAndUpdate(
      { _id: crop._id },
      { details: [...crop.details, cropNewDetails] }
    );
  else crop = await Crop.create({ name, img, details: [cropNewDetails] });
};

// TODO: Add absolute values (should return the nearest values)
export const getCropDetails = async (cropDetails) => {
  const {
    name,
    fromNitrogenLevel,
    toNitrogenLevel,
    fromPhosphrousLevel,
    toPhosphrousLevel,
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

  if (!fromPhosphrousLevel)
    cropQuery["phosphorous"] = { $gte: fromPhosphrousLevel };
  if (!toPhosphrousLevel)
    cropQuery["phosphorous"] = {
      ...cropQuery["phosphorous"],
      $lte: toPhosphrousLevel,
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

  let cropDetails = Crop.find({
    $and: { ...cropNameQuery, cropDetails: { _id: cropIds, ...cropQuery } },
  });
};
export const updateCropDetails = async (name, cropDetails) => {
  await Crop.findOneAndUpdate({ name }, { cropDetails: cropDetails });
};
export const deleteCropDetails = async (name, cropDetails) => {
  await Crop.findOneAndRemove({ name }, { cropDetails: cropDetails });
};
