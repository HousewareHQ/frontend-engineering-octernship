import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Input = ({ input, setInput, setOutput }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError(null);
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      setError("Input can't be empty");
      return;
    }

    // Split Input into array and remove whitespaces
    const data = input
      .toLowerCase()
      .split("")
      .filter((i) => i !== "" && i !== " ");

    if (data.length === 0) {
      setError("Only space characters are not allowed");
      return;
    }
    setOutput(data);
    navigate("result");
  };

  return (
    <form onSubmit={handleSubmit} className={error && "form-error"}>
      {error && <small>{error}</small>}
      <input
        type="text"
        value={input}
        className="textbox"
        onChange={handleChange}
      />
      <input type="submit" value="submit" className="btn-submit" />
    </form>
  );
};

export const Output = ({ output, setOutput }) => {
  const handleDelete = (letter, idx) => {
    const newOutput = output.filter((i, id) =>
      i === letter ? id === idx && i : i
    );
    /* Shorthand for:
      if (i === letter) {
        if (id === idx) {
          return i;
        }
      } else {
        return i;
      } 
    */

    // Prevent state update if the outputs are the same, I did this to avoid rerun of useEffect
    output.join() !== newOutput.join() && setOutput(newOutput);
  };
  return (
    <div className="output">
      {output.map((i, idx) => (
        <div className="card" key={idx}>
          <button className="btn-delete" onClick={(e) => handleDelete(i, idx)}>
            x
          </button>
          <p>{i}</p>
        </div>
      ))}
    </div>
  );
};
