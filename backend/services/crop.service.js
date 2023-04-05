import { update } from "../controllers/crop-controller.js";
import UserRoles from "../models/constants.js";
import Crop from "../models/crop.js";
import Images from "../models/images.js";
import Exception, { ExceptionCodes } from "../utils/Error.js";

export const registerCropDetails = async (cropDetails, user) => {
  if (user.role != UserRoles.ADMIN) {
    throw new Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }
  const {
    name,
    images,
    nitrogen,
    phosphorus,
    potassium,
    temperature,
    humidity,
    pH,
    rainfall,
  } = cropDetails;

  if (!name) throw new Exception("Name is required", ExceptionCodes.BAD_INPUT);
  let imgs = [];
  if (images) imgs = images;
  let cropNewDetails = {
    name: name,
  };

  if (nitrogen) cropNewDetails["nitrogen"] = nitrogen;
  if (phosphorus) cropNewDetails["phosphorus"] = phosphorus;
  if (potassium) cropNewDetails["potassium"] = potassium;
  if (temperature) cropNewDetails["temperature"] = temperature;
  if (humidity) cropNewDetails["humidity"] = humidity;
  if (pH) cropNewDetails["pH"] = pH;
  if (rainfall) cropNewDetails["rainfall"] = rainfall;

  if (imgs.length > 0) {
    const cropImages = await Images.findOne({ name });
    if (cropImages !== null && cropImages.images.length > 0) {
      await Images.findByIdAndUpdate(
        { _id: cropImages._id },
        { images: [...cropImages.images, ...imgs] }
      );
    } else {
      await Images.create({ name, images: imgs });
    }
  }

  await Crop.create(cropNewDetails);
};

const _genQuery = (absolute, from, to) => {
  let cropQuery = {};
  if (absolute) {
    cropQuery = {
      $gte: Math.floor(absolute),
      $lte: Math.floor(absolute),
    };
  } else {
    if (from && Math.floor(to)) {
      cropQuery = {
        $gte: from,
        $lte: Math.floor(to),
      };
    } else if (from) {
      cropQuery = {
        $gte: Math.floor(from),
      };
    } else if (to) {
      cropQuery = {
        $lte: Math.floor(to),
      };
    }
  }
  return cropQuery;
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
  let query = {},
    cropQuery = [];

  query = _genQuery(nitrogen, fromNitrogenLevel, toNitrogenLevel);
  if (nitrogen || fromNitrogenLevel || toNitrogenLevel)
    cropQuery.push({ "nitrogen": query });

  query = _genQuery(phosphorus, fromPhosphorusLevel, toPhosphorusLevel);
  if (phosphorus || fromPhosphorusLevel || toPhosphorusLevel)
    cropQuery.push({ "phosphorous": query });

  query = _genQuery(potassium, fromPotassiumLevel, toPotassiumLevel);
  if (potassium || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ "potassium": query });

  query = _genQuery(temperature, fromTemperatureLevel, toTemperatureLevel);
  if (temperature || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ "temperature": query });

  query = _genQuery(humidity, fromHumidityLevel, toHumidityLevel);
  if (humidity || fromHumidityLevel || toHumidityLevel)
    cropQuery.push({ "humidity": query });

  query = _genQuery(ph, fromPHLevel, toPHLevel);
  if (ph || fromPHLevel || toPHLevel) cropQuery.push({ "ph": query });

  query = _genQuery(rainfall, fromRainfallLevel, toRainfallLevel);
  if (rainfall || fromRainfallLevel || toRainfallLevel)
    cropQuery.push({ "details.rainfall": query });

  let cropIds = [];
  if (name) {
    const crops = await Crop.find({ name: name }).collation({
      locale: "en",
      strength: 2,
    });
    for (var crop of crops) {
      cropIds.push(crop._id);
    }
  }

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
export const deleteCropDetails = async (id, crop, user) => {
  if (user.role !== UserRoles.ADMIN) {
    throw new Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }

  if (id) await Crop.findByIdAndRemove({ _id: id });
  else if (crop)
    await Crop.deleteMany({ name: crop }).collation({
      locale: "en",
      strength: 2,
    });
  else
    throw new Exception(
      "Either id or crop is required",
      ExceptionCodes.BAD_INPUT
    );
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
