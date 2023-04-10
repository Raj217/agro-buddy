import { createContext } from "react";
import AuthContextProvider from "./auth";
import CropContextProvider from "./crops";
import UserContextProvider from "./user";

const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
    return (
        <ApiContext.Provider value={{}}>
            <AuthContextProvider>
                <CropContextProvider>
                    <UserContextProvider>
                        {children}
                    </UserContextProvider>
                </CropContextProvider>
            </AuthContextProvider>
        </ApiContext.Provider>
    );
}

export default ApiContextProvider;