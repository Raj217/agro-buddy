import React, { createContext, useState } from "react";
import Crop from "../api/models/crop";
import API from "../api/api";

const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const api = new API();

  const [crops, setCropData] = useState(new Map());

  const getCrops = async (inputData) => {
    try {
      const { data } = await api.getCropDetails(inputData);
      for (let i = 0; i < data.length; i++) {
        crops.get(data[i]["_id"]).readDetails(data[i]["details"]);
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
      let cropsData = new Map();
      for (let i = 0; i < data["preview"].length; i++) {
        name = data["preview"][i]["_id"];
        if (!cropsData.has(name)) {
          cropsData.set(name, new Crop());
        }
        cropsData.get(name).readPreview(data["preview"][i]);
      }
      for (let i = 0; i < data["data"].length; i++) {
        name = data["data"][i]["_id"];
        cropsData.get(name).readData(data["data"][i]);
        cropsData.get(name).data.name = name;
      }

      setCropData(new Map(cropsData));
    } catch (error) {
      console.log(error);
    }
  };
  const getRanges = async () => {
    try {
      const { data } = await api.getparamRanges();

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CropContext.Provider
      value={{
        getCropDetails: getCrops,
        getCropPreview: getPreview,
        getParamRanges: getRanges,
        crops: crops,
        setCropData,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export default CropContextProvider;
export { CropContext };
