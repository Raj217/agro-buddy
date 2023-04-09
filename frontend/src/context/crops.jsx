import { useContext, createContext } from 'react';
import { getCropDetails } from '../api';

const CropContext = createContext();

const CropContextProvider = ({ children }) => {

    const getCrops = async (inputData) => {

        try {
            const { data } = await getCropDetails(inputData);
            console.log(data);
            return { data };
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <CropContext.Provider value={{
            getCropDetails: getCrops
        }}>
            {children}
        </CropContext.Provider>
    )
};

export default CropContextProvider;
export { CropContext };

