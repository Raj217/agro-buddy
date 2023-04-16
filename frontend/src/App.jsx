import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import GenerateOtp from "./pages/Otp/GenerateOtp";
import Footer from "./components/footer/Footer";
import ForgotPasswordParams from "./components/ForgotPassword/ForgotPasswordParams";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Charts from "./components/contents/Charts";
import Developer from "./components/DevelopersPage/DevelopersPage";
import Content from "./components/content/Content";
import Search from "./components/search/Search";
import { AuthContext } from "./context/auth";

function App() {
  const { loggedIn } = React.useContext(AuthContext);
  const [signedIn, setSignedIn] = React.useState(loggedIn);
  React.useEffect(() => {}, [signedIn]);
  return (
    <div className="App">
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/otp" element={<GenerateOtp />} />
        <Route
          path="/forgot-password/:token"
          element={<ForgotPasswordParams />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/details/:crop" element={<Content />} />
        <Route path="/search" element={<Search />} />
        <Route path="/developers" element={<Developer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
