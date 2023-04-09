import { useContext, createContext } from 'react'
import { signup, login, getUser, generateOtp, forgotPassword } from '../api'

const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    let loggedIn = localStorage.getItem('token');


    const signUp = async (formData) => {
        try {
            const { data } = await signup(formData);
            return { data };
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    const logIn = async (formData) => {
        try {
            const { data } = await login(formData);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    const getUserDetails = async (userId) => {
        try {
            const { data } = await getUser(userId);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    const generateOtpandMail = async (email) => {
        try {
            const { data } = await generateOtp(email);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    const forgotpassword = async (email) => {
        try {
            const { data } = await forgotPassword(email);
            console.log(data);

            return { data };
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    };

    return (
        <AuthContext.Provider value={{
            loggedIn,
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

