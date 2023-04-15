import { replaceAt } from "../../utils/string_utils";

class CropDetailsQuery {
  constructor(
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
    rainfall,
    fromRainfallLevel,
    toRainfallLevel,
    humidity,
    fromHumidityLevel,
    toHumidityLevel,
    ph,
    fromPHLevel,
    toPHLevel
  ) {
    this.name = name;
    this.nitrogen = nitrogen;
    this.fromNitrogenLevel = fromNitrogenLevel;
    this.toNitrogenLevel = toNitrogenLevel;
    this.phosphorus = phosphorus;
    this.fromPhosphorusLevel = fromPhosphorusLevel;
    this.toPhosphorusLevel = toPhosphorusLevel;
    this.potassium = potassium;
    this.fromPotassiumLevel = fromPotassiumLevel;
    this.toPotassiumLevel = toPotassiumLevel;
    this.temperature = temperature;
    this.fromTemperatureLevel = fromTemperatureLevel;
    this.toTemperatureLevel = toTemperatureLevel;
    this.rainfall = rainfall;
    this.fromRainfallLevel = fromRainfallLevel;
    this.toRainfallLevel = toRainfallLevel;
    this.humidity = humidity;
    this.fromHumidityLevel = fromHumidityLevel;
    this.toHumidityLevel = toHumidityLevel;
    this.ph = ph;
    this.fromPHLevel = fromPHLevel;
    this.toPHLevel = toPHLevel;
  }

  toQuery() {
    let query = "";
    if (this.name) query += "&name=" + this.name;
    if (this.nitrogen) query += "&nitrogen=" + this.nitrogen;
    if (this.fromNitrogenLevel)
      query += "&fromNitrogenLevel=" + this.fromNitrogenLevel;
    if (this.toNitrogenLevel)
      query += "&toNitrogenLevel=" + this.toNitrogenLevel;
    if (this.phosphorus) query += "&phosphorus=" + this.phosphorus;
    if (this.fromPhosphorusLevel)
      query += "&fromPhosphorusLevel=" + this.fromPhosphorusLevel;
    if (this.toPhosphorusLevel)
      query += "&toPhosphorusLevel=" + this.toPhosphorusLevel;
    if (this.potassium) query += "&potassium=" + this.potassium;
    if (this.fromPotassiumLevel)
      query += "&fromPotassiumLevel=" + this.fromPotassiumLevel;
    if (this.toPotassiumLevel)
      query += "&toPotassiumLevel=" + this.toPotassiumLevel;
    if (this.temperature) query += "&temperature=" + this.temperature;
    if (this.fromTemperatureLevel)
      query += "&fromTemperatureLevel=" + this.fromTemperatureLevel;
    if (this.toTemperatureLevel)
      query += "&toTemperatureLevel=" + this.toTemperatureLevel;
    if (this.rainfall) query += "&rainfall=" + this.rainfall;
    if (this.fromRainfallLevel)
      query += "&fromRainfallLevel=" + this.fromRainfallLevel;
    if (this.toRainfallLevel)
      query += "&toRainfallLevel=" + this.toRainfallLevel;
    if (this.ph) query += "&ph=" + this.ph;
    if (this.fromPHLevel) query += "&fromPHLevel=" + this.fromPHLevel;
    if (this.toPHLevel) query += "&toPHLevel=" + this.toPHLevel;
    if (this.humidity) query += "&humidity=" + this.humidity;
    if (this.fromHumidityLevel)
      query += "&fromHumidityLevel=" + this.fromHumidityLevel;
    if (this.toHumidityLevel)
      query += "&toHumidityLevel=" + this.toHumidityLevel;

    if (query.length > 0) {
      query = replaceAt(query, 0, "?");
    }
    return query;
  }
  clear() {

    this.name = null;
    this.nitrogen = null;
    this.fromNitrogenLevel = null;
    this.toNitrogenLevel = null;
    this.phosphorus = null;
    this.fromPhosphorusLevel = null;
    this.toPhosphorusLevel = null;
    this.potassium = null;
    this.fromPotassiumLevel = null;
    this.toPotassiumLevel = null;
    this.temperature = null;
    this.fromTemperatureLevel = null;
    this.toTemperatureLevel = null;
    this.rainfall = null;
    this.fromRainfallLevel = null;
    this.toRainfallLevel = null;
    this.humidity = null;
    this.fromHumidityLevel = null;
    this.toHumidityLevel = null;
    this.ph = null;
    this.fromPHLevel = null;
    this.toPHLevel = null;
  }
}

export default CropDetailsQuery;
