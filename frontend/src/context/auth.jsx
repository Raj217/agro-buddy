import { useContext, createContext } from 'react'
import { signup, login, getUser, generateOtp, forgotPassword } from '../api'

const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {


    const signUp = async (formData) => {
        try {
            const { data } = await signup(formData);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
        }
    };

    const logIn = async (formData) => {
        try {
            const { data } = await login(formData);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
        }
    };

    const getUserDetails = async (userId) => {
        try {
            const { data } = await getUser(userId);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
        }
    };

    const generateOtpandMail = async (email) => {
        try {
            const { data } = await generateOtp(email);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
        }
    };

    const forgotpassword = async (email) => {
        try {
            const { data } = await forgotPassword(email);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{
            login: logIn,
            signup: signUp,
            getUserDetails: getUserDetails,
            generateOtp: generateOtpandMail,
            forgotPassword: forgotpassword,
        }}>
            {children}
        </AuthContext.Provider>
    )
};
export default AuthContextProvider;
export { AuthContext };

