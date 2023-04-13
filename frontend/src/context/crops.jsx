import React, { createContext } from "react";
import { getCropDetails } from "../api";

const CropContext = createContext();

const CropContextProvider = ({ children }) => {
  const [cropData, setCropData] = React.useState({
    preview: [{
      humidity: "",
      nitrogen: "",
      pH: "",
      phosphorus: "",
      potassium: "",
      rainfall: "",
      temperature: "",
      _id: "",
    }],
    images: [{
      createdAt: "",
      description: "",
      images: ["", ""],
      name: "",
      updatedAt: "",
      _id: ""
    }]
  });

  const getCrops = async (inputData) => {
    try {
      const { data } = await getCropDetails(inputData);
      console.log(data);
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
