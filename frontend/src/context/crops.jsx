import React, { createContext } from "react";
import { getCropDetails } from "../api";

const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const [cropData, setCropData] = React.useState({
    _id: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    pH: "",
    rainfall: "",
    createdAt: "",
    updatedAt: "",
  });

  const getCrops = async (inputData) => {
    try {
      const { data } = await getCropDetails(inputData);
      console.log(data);
      setCropData({
        ...data,
        _id: data._id,
        phosphorus: data.phosphorus,
        potassium: data.potassium,
        temperature: data.temperature,
        humidity: data.humidity,
        pH: data.pH,
        rainfall: data.rainfall,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });
      return { data };
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CropContext.Provider
      value={{
        getCropDetails: getCrops,
        cropData,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export default CropContextProvider;
export { CropContext };
