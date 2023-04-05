import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Home } from './components'
import About from './pages/about/About'
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
