import { useContext, createContext } from 'react'

const CropContext = createContext();

export default CropContextProvider = ({ children }) => {
    return (
        <CropContext.Provider value={{}}>
            {children}
        </CropContext.Provider>
    )
};

export { CropContext };

