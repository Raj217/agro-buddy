export const genAllQuery = (cropDetails) => {
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
  query = genRangeQuery(nitrogen, fromNitrogenLevel, toNitrogenLevel);
  if (nitrogen || fromNitrogenLevel || toNitrogenLevel)
    cropQuery.push({ nitrogen: query });

  query = genRangeQuery(phosphorus, fromPhosphorusLevel, toPhosphorusLevel);
  if (phosphorus || fromPhosphorusLevel || toPhosphorusLevel)
    cropQuery.push({ phosphorous: query });

  query = genRangeQuery(potassium, fromPotassiumLevel, toPotassiumLevel);
  if (potassium || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ potassium: query });

  query = genRangeQuery(temperature, fromTemperatureLevel, toTemperatureLevel);
  if (temperature || fromPotassiumLevel || toPotassiumLevel)
    cropQuery.push({ temperature: query });

  query = genRangeQuery(humidity, fromHumidityLevel, toHumidityLevel);
  if (humidity || fromHumidityLevel || toHumidityLevel)
    cropQuery.push({ humidity: query });

  query = genRangeQuery(ph, fromPHLevel, toPHLevel);
  if (ph || fromPHLevel || toPHLevel) cropQuery.push({ pH: query });

  query = genRangeQuery(rainfall, fromRainfallLevel, toRainfallLevel);
  if (rainfall || fromRainfallLevel || toRainfallLevel)
    cropQuery.push({ rainfall: query });

  return cropQuery;
};

export const isNotEmpty = (crop) => {
  return (
    crop["nitrogen"] != null &&
    crop["phosphorus"] != null &&
    crop["potassium"] != null &&
    crop["temperature"] != null &&
    crop["ph"] != null &&
    crop["rainfall"] != null &&
    crop["humidity"] != null
  );
};

export const filterEmpty = (crops) => {
  const filteredCrops = [];
  for (var i = 0; i < crops.length; i++) {
    if (isNotEmpty(crops[i])) {
      filteredCrops.push(crops[i]);
    }
  }
  return filteredCrops;
};

export const genRangeQuery = (absolute, from, to) => {
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
