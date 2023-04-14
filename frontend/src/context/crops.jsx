import React, { createContext, useState } from "react";
import API from "../api/api";
import Crop from "../api/models/crop";

const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const crop = new Crop();
  const api = new API();

  const [crops, setCropData] = useState();

  const getCropDetails = async (inputData) => {
    try {
      const { data } = api.getCropDetails(inputData);
      console.log(data);
      crop.readDetails(data["preview"]);
      crop.readData(data["images"][0]);
      setCropData(crop);
      return { data };
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CropContext.Provider
      value={{
        getCropDetails,
        crops,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export default CropContextProvider;
export { CropContext };
