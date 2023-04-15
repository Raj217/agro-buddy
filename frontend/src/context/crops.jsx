import React, { createContext, useState } from "react";
import Crop from "../api/models/crop";
import API from "../api/api";

const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const api = new API();

  const [crops, setCropData] = useState(new Map());
  console.log(crops);

  const getCrops = async (inputData) => {
    try {
      const { data } = await api.getCropDetails(inputData);
      for (var cropData in data) {
        crops.set(crops.get(cropData["_id"]).readDetails(cropData["details"]));
      }
      setCropData(new Map(crops));
      return { data };
    } catch (error) {
      console.log(error);
    }
  };
  const getPreview = async (inputData) => {
    try {
      const { data } = await api.getCropPreview(inputData);
      let name;
      for (let i = 0; i < data["preview"].length; i++) {
        name = data["preview"][i]["_id"];
        if (!crops.has(name)) {
          crops.set(name, new Crop());
        }
        crops.get(name).readData(data["data"][i]);
        crops.get(name).readPreview(data["preview"][i]);
      }

      setCropData(new Map(crops));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CropContext.Provider
      value={{
        getCropDetails: getCrops,
        getCropPreview: getPreview,
        crops: crops,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export default CropContextProvider;
export { CropContext };
