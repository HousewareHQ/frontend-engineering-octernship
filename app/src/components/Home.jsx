import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Model";

import WarningIcon from "../assets/WarningIcon";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let text = formData.get("text").toString() ?? "";
    text = text.trim();
    if (text == "") {
      setShowModal(true);
      return;
    }
    if (text.includes(" ")) {
      setIsValid(true);
      setShowModal(true);
      return;
    }
    navigate(`/output/${text.toLowerCase()}`);
  };

  useEffect(() => {
    document.getElementById("text").focus();
  }, []);

  return (
    <main className="section">
      <div className="home__main">
        <h3>Remove Duplicate Character</h3>
        <form onSubmit={onSubmit}>
          <input
            id="text"
            placeholder="Enter the text"
            name="text"
            pattern="[a-zA-Z ]*"
            title="Please enter alphabets only."
          />
          <button type="submit" className="btn btn--primary">
            Submit
          </button>
        </form>
      </div>
      {showModal && (
        <WarningModal setShowModal={setShowModal} isValid={isValid} />
      )}
    </main>
  );
};

function WarningModal({ setShowModal, isValid }) {
  return (
    <Modal>
      <section className="warning__modal">
        <span className="warning__icon">
          <WarningIcon />
        </span>
        <div>
          <h4>{isValid ? "Invalid Input" : "No Input Error"}</h4>
          <p>
            {isValid
              ? "You can't include space in the text. Please enter again"
              : "You can't submit empty text to the output page. Please input some text."}
          </p>
          <button className="btn" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </div>
      </section>
    </Modal>
  );
}

export default Home;
