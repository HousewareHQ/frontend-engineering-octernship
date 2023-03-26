import { useState } from "react";
import { Link } from "react-router-dom";

function Screen1() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() === "") {
      alert("Please provide a non-empty value.");
      return;
    }

    // Redirect to Screen2
    console.log("Redirecting to Screen2 with value:", inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Link to={`/screen2/${inputValue}`}>
        <button onClick={handleButtonClick}>Submit</button>
      </Link>
    </div>
  );
}
export default Screen1;
