import { useContext, createContext } from 'react'
import { signup, login, getUser, generateOtp, forgotPassword } from '../api'
// import { ToastProvider, useToasts } from 'react-toast-notifications';
import toast from 'react-hot-toast';
const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const signUp = async (formData) => {
        try {
            const { data } = await signup(formData);
            console.log(data);
            localStorage.setItem("token", data.token);
            toast.success(data.message);
            return { data };
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const logIn = async (formData) => {
        try {
            const { data } = await login(formData);
            console.log(data);
            localStorage.setItem("token", data.token);
            toast.success(data.message);
            return { data };
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const getUserDetails = async (userId) => {
        try {
            const { data } = await getUser(userId);
            console.log(data);
            toast.success(data.message);
            return { data };
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    };

    const generateOtpandMail = async (email) => {
        try {
            const { data } = await generateOtp(email);
            console.log(data);
            toast.success(data.message);
            return { data };
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

        }
    };

    const forgotpassword = async (email) => {
        try {
            const { data } = await forgotPassword(email);
            console.log(data);
            toast.success(data.message);
            return { data };
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);

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

