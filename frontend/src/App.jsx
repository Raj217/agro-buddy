import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Home, CustomTextField } from './components'

function App() {

  return (
    <div className="App">
      <CustomTextField type="email" />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
