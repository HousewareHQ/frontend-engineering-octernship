import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteIcon from "./assets/delete.svg";

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
    setInput("");
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
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (output.length === 0) navigate("/");
    const uniqueOutput = [...new Set(output)];

    if (output.join() === uniqueOutput.join()) {
      setSuccess("Yay, you've got no duplicates");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [output]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSuccess("");
  //   }, 3000);
  // }, [success]);

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

  const styleDuplicate = (i) => {
    const similar = output.filter((e) => e === i);

    if (similar.length > 1)
      return {
        background: "#f9e3c1",
      };

    return {
      background: "rgb(240, 255, 250)",
    };
  };

  return (
    <>
      <div className="top">
        <Link to="/" className="back-btn">
          <img src={deleteIcon} alt="" />
        </Link>

        {success && <p className="success">{success}</p>}
      </div>

      <div className="output">
        {output.map((i, idx) => (
          <div className="card" key={idx} style={styleDuplicate(i)}>
            <i className="btn-delete" onClick={(e) => handleDelete(i, idx)}>
              <img src={deleteIcon} alt="delete" />
            </i>
            <p>{i}</p>
          </div>
        ))}
      </div>
    </>
  );
};
