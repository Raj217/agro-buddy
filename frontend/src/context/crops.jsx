import React, { createContext } from "react";
import { getCropDetails } from "../api";

const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const [cropData, setCropData] = React.useState({
    preview: [{
      _id: "",
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      temperature: "",
      humidity: "",
      pH: "",
      rainfall: "",
      createdAt: "",
      updatedAt: ""
    }],
    images: [{
      createdAt: "",
      images: [""],
      name: "",
      updatedAt: "",
      _id: ""
    }]
  });

  const getCrops = async (inputData) => {
    try {
      const { data } = await getCropDetails(inputData);
      setCropData(data);
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
