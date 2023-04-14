import React, { createContext, useState } from "react";
import { getCropDetails } from "../api";

const CropContext = createContext();

import Crop from "../api/models/crop";

const CropContextProvider = ({ children }) => {

  const crop = new Crop();

  const [crops, setCropData] = useState();


  const getCrops = async (inputData) => {
    try {
      const { data } = await getCropDetails(inputData);
      crop.readDetails(data['preview']);
      crop.readData(data['images'][0]);
      // console.log(crop);

      // console.log(data['preview']);
      // console.log(data['images'][0]);
      // console.log(data['images'][0]);
      // console.log(data);
      setCropData(crop);
      return { data };
    }
    catch (error) {
      console.log(error);
    }
  };
  return (
    <CropContext.Provider
      value={{
        getCropDetails: getCrops,
        crops,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export default CropContextProvider;
export { CropContext };
