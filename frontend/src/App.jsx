import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Home } from './components'
import About from './pages/about/About'
import Developer from './pages/devmem/Developer'
import Contact from './pages/contact/Contact'
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import GenerateOtp from "./pages/Otp/GenerateOtp";
import Fotter from "./components/footer/Footer";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Charts from "./components/contents/Charts";
import Content from "./components/content/Content";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/otp" element={<GenerateOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
