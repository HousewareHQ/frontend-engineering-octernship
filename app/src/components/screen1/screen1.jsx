import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./screen1.css";

export const Screen1 = () => {
  const navigate = useNavigate();
  let [input, setInput] = useState("");

  useEffect(() => {
    setInput("");
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    input = input.trim();
    if (!input || input === " ") {
      toast("❌ Input field cannot be empty!");
    } else {
      navigate("/screen2", {
        state: input,
      });
    }
  };
  return (
    <div className="container">
      <h2 className="input-title">Text Input</h2>
      <form>
        <input
          placeholder="Enter string here"
          autoFocus
          className="string-input-field"
          type="text"
          onChange={handleChange}
        />
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="location">Screen 1</div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};
