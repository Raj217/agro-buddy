import { useContext, createContext } from 'react'

const CropContext = createContext();

export const CropContextProvider = ({ children }) => {
    return (
        <CropContext.Provider value={{}}>
            {children}
        </CropContext.Provider>
    )
};

export const useCropContext = () => useContext(CropContext);