import "./App.css";
import { Route, Routes } from 'react-router-dom'

import { Home } from './components';
import './App.css';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
