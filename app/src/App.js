import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import RemoveDup from './components/RemoveDup';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rmdup" element={<RemoveDup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
