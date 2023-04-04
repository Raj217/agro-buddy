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

const genQuery = (absolute, from, to) => {
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

  query = genQuery(nitrogen, fromNitrogenLevel, toNitrogenLevel);
  if (nitrogen || fromNitrogenLevel || toNitrogenLevel)
    cropQuery.push({ "details.nitrogen": query });

  query = genQuery(phosphorus, fromPhosphorusLevel, toPhosphorusLevel);
  if (phosphorus || fromPhosphorusLevel || toPhosphorusLevel)
    cropQuery.push({ "details.phosphorous": query });

  query = genQuery(potassium, fromPotassiumLevel, toPotassiumLevel);
  if (potassium || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ "details.potassium": query });

  query = genQuery(temperature, fromTemperatureLevel, toTemperatureLevel);
  if (temperature || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ "details.temperature": query });

  query = genQuery(humidity, fromHumidityLevel, toHumidityLevel);
  if (humidity || fromHumidityLevel || toHumidityLevel)
    cropQuery.push({ "details.humidity": query });

  query = genQuery(ph, fromPHLevel, toPHLevel);
  if (ph || fromPHLevel || toPHLevel) cropQuery.push({ "details.ph": query });

  query = genQuery(rainfall, fromRainfallLevel, toRainfallLevel);
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
