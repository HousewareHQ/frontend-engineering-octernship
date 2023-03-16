import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Output from "./components/Output";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/output/:text" element={<Output />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
