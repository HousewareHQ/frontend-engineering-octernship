import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Screen1 } from "./components/Screen1";
import { Screen2 } from "./components/Screen2";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Screen2"
          element={<Screen2 originalText={text} setText={setText} />}
        />
        <Route path="/" element={<Screen1 text={text} setText={setText} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
