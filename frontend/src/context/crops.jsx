import React, { createContext, useState } from "react";
import Crop from "../api/models/crop";
import API from "../api/api";

const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const crop = new Crop();
  const api = new API();

  const [crops, setCropData] = useState();

  const getCrops = async (inputData) => {
    try {
      const { data } = await api.getCropDetails(inputData);
      crop.readDetails(data);
      setCropData(crop);
      return { data };
    } catch (error) {
      console.log(error);
    }
  };
  const getPreview = async (inputData) => {
    try {
      const { data } = await api.getCropPreview(inputData);
      crop.readDetails(data["preview"]);
      crop.readData(data["images"][0]);
      setCropData(crop);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CropContext.Provider
      value={{
        getCropDetails: getCrops,
        getCropPreview: getPreview,
        crops,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export default CropContextProvider;
export { CropContext };
