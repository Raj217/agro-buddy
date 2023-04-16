import { createContext } from "react";
import {
  signup,
  login,
  getUser,
  generateOtp,
  forgotPassword,
  validateOtp,
} from "../api";
import toast from "react-hot-toast";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  let loggedIn = localStorage.getItem("token") !== null;
  const signUp = async (formData) => {
    try {
      const { data } = await signup(formData);
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

  const verifyOtp = async (email, otp) => {
    try {
      const { data } = await validateOtp(email, otp);
      console.log(data);
      localStorage.setItem("token", data.token);
      loggedIn = true;
      toast.success(data.message);
      return { data };
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        login: logIn,
        signup: signUp,
        getUserDetails: getUserDetails,
        generateOtp: generateOtpandMail,
        forgotPassword: forgotpassword,
        validateOtp: verifyOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export { AuthContext };
