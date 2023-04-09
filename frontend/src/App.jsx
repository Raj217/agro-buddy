import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Home } from './components'
import About from './pages/about/About'
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import GenerateOtp from "./pages/Otp/GenerateOtp";

function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/otp" element={<GenerateOtp />} />
      </Routes>
    </div>
  );
}

export default App;
