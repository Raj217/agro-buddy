import { update } from "../controllers/crop-controller.js";
import UserRoles from "../models/constants.js";
import { writeFileSync, readFileSync } from "fs";
import { spawn } from "child_process";
import Crop from "../models/crop.js";
import CropData from "../models/crop-data.js";
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
    description,
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

  const cropImages = await CropData.findOne({ name }).collation({
    strength: 2,
    locale: "en",
  });

  let data = {};
  if (cropImages !== null) {
    let images = cropImages.images;
    if (imgs.length > 0) {
      images = [...images, ...imgs];
    }
    data = { images };
    if (description) data = { ...data, description };
    await CropData.findByIdAndUpdate({ _id: cropImages._id }, data);
  } else {
    data = { name };
    if (imgs.length > 0) {
      data = { ...data, images: imgs };
    }
    if (description) data = { ...data, description };
    await CropData.create(data);
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
  let query = {},
    cropQuery = [];

  if (name) cropQuery.push({ name });
  query = _genQuery(nitrogen, fromNitrogenLevel, toNitrogenLevel);
  if (nitrogen || fromNitrogenLevel || toNitrogenLevel)
    cropQuery.push({ nitrogen: query });

  query = _genQuery(phosphorus, fromPhosphorusLevel, toPhosphorusLevel);
  if (phosphorus || fromPhosphorusLevel || toPhosphorusLevel)
    cropQuery.push({ phosphorous: query });

  query = _genQuery(potassium, fromPotassiumLevel, toPotassiumLevel);
  if (potassium || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ potassium: query });

  query = _genQuery(temperature, fromTemperatureLevel, toTemperatureLevel);
  if (temperature || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ temperature: query });

  query = _genQuery(humidity, fromHumidityLevel, toHumidityLevel);
  if (humidity || fromHumidityLevel || toHumidityLevel)
    cropQuery.push({ humidity: query });

  query = _genQuery(ph, fromPHLevel, toPHLevel);
  if (ph || fromPHLevel || toPHLevel) cropQuery.push({ ph: query });

  query = _genQuery(rainfall, fromRainfallLevel, toRainfallLevel);
  if (rainfall || fromRainfallLevel || toRainfallLevel)
    cropQuery.push({ rainfall: query });

  let crops = await Crop.find({ $and: cropQuery }).collation({
    locale: "en",
    strength: 2,
  });

  const cropNames = new Set();
  const ids = [];
  for (var crop of crops) {
    cropNames.add(crop.name);
    ids.push(crop._id);
  }
  const images = await CropData.find({ name: { $in: [...cropNames] } });

  const aggeregate = await Crop.aggregate([
    { $match: { "_id": { $in: ids } } },
    {
      $group: {
        _id: "$name",
        nitrogen: { $avg: "$nitrogen" },
        phosphorous: {$avg: "$phosphorus" },
        potassium: {$avg: "$potassium" },
        temperature: {$avg: "$temperature" },
        humidity: {$avg: "$humidity" },
        pH: {$avg: "$pH" },
        rainfall: {$avg: "$rainfall" },
      },
    },
  ]);

  return { aggeregate, crops, images };
};

function cluster(crops) {
  const python = spawn("python", [
    "scripts/cluster/main.py",
    JSON.stringify(crops),
  ]);

  return new Promise((resolve, reject) => {
    python.stdout.on("data", function (data) {
      console.log(data.toString());
      resolve(JSON.parse(data.toString().replaceAll("'", "")));
    });
    python.on("end", function () {
      resolve("closed");
    });
    python.on("error", function (err) {
      reject(err);
    });
  });
}

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

export const updateCrop = async (vals, user) => {
  const {
    id,
    name,
    images,
    nitrogen,
    phosphorus,
    potassium,
    temperature,
    humidity,
    pH,
    rainfall,
  } = vals;

  if (user.role !== UserRoles.ADMIN) {
    throw new Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }

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

  await Crop.findOneAndUpdate({ _id: id }, cropNewDetails);

  if (images !== undefined) {
    if (name === undefined)
      throw new Exception(
        "Please specify the crop name",
        ExceptionCodes.BAD_INPUT
      );
    await CropData.findOneAndUpdate({ name: name }, { $push: { images } });
  }
};

export const updateImage = async (vals, user) => {
  if (user.role !== UserRoles.ADMIN) {
    throw new Exception(
      "You don't have enough privilege.",
      ExceptionCodes.UNAUTHORIZED
    );
  }

  const { name, images } = vals;
  if (name === undefined)
    throw new Exception("Name is required.", ExceptionCodes.BAD_INPUT);

  const img = await CropData.findOne({ name }).collation({
    strength: 2,
    locale: "en",
  });
  const updateObject = {
    name: name,
    images: images,
    __v: img.__v,
  };
  if (img) {
    img.images = images;
    await CropData.findOneAndReplace({ _id: img._id }, updateObject);
  }
};
