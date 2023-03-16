import { Route, Routes } from "react-router-dom";
import { Input, Output } from "./Routes.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  return (
    <div className="App">
      <h1>Duplicate Remover</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Input input={input} setInput={setInput} setOutput={setOutput} />
          }
        />
        <Route
          path="/result"
          element={<Output output={output} setOutput={setOutput} />}
        />
      </Routes>
    </div>
  );
}

export default App;
