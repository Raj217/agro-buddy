import { createContext, useState } from "react";
import {
  signup,
  login,
  getUser,
  generateOtp,
  forgotPassword,
  resetPassword,
  validateOtp,
} from "../api";
import toast from "react-hot-toast";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null);
  const signUp = async (formData) => {
    try {
      const { data } = await signup(formData);
      toast.success(data.message);
      return { data };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const logIn = async (formData) => {
    try {
      const { data } = await login(formData);
      localStorage.setItem("token", data.token);
      if (data.token) {
        setIsLoggedIn(true);
      }
      toast.success(data.message);
      return { data };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getUserDetails = async (userId) => {
    try {
      const { data } = await getUser(userId);
      toast.success(data.message);
      return { data };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const generateOtpandMail = async (email) => {
    try {
      const { data } = await generateOtp(email);
      toast.success(data.message);
      return { data };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const forgotpassword = async (email) => {
    try {
      const { data } = await forgotPassword(email);
      toast.success(data.message);
      return { data };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const resetpassword = async (email) => {
    try {
      const { data } = await resetPassword(email);
      toast.success(data.message);
      return { data };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const verifyOtp = async (email, otp) => {
    try {
      const { data } = await validateOtp(email, otp);
      localStorage.setItem("token", data.token);
      if (data.token) {
        setIsLoggedIn(true);
      }
      setIsLoggedIn(true);
      toast.success(data.message);
      return { data };
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login: logIn,
        signup: signUp,
        getUserDetails: getUserDetails,
        generateOtp: generateOtpandMail,
        forgotPassword: forgotpassword,
        resetPassword: resetpassword,
        validateOtp: verifyOtp,
        email,
        setEmail: setEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export { AuthContext };
