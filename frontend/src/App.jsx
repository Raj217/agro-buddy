import "./App.css";
import { Route, Routes } from 'react-router-dom'
import { Home } from './components'
import CancelIcon from '@mui/icons-material/Cancel'

function App() {

  return (
    <div className="App">
      <CancelIcon />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
