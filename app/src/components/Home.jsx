import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Model";

import WarningIcon from "../assets/WarningIcon";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = formData.get("text").toString() ?? "";
    if (text == "") {
      setShowModal(true);
      return;
    }
    navigate(`/output/${text}`);
  };

  useEffect(() => {
    document.getElementById("text").focus();
  }, []);

  return (
    <main className="section">
      <div className="home__main">
        <h3>Remove Duplicate Character</h3>
        <form onSubmit={onSubmit}>
          <input id="text" placeholder="Enter the text" name="text" />
          <button type="submit" className="btn btn--primary">
            Submit
          </button>
        </form>
      </div>
      {showModal && (
        <Modal>
          <section className="warning__modal">
            <span className="warning__icon">
              <WarningIcon />
            </span>
            <div>
              <h4>No Input Error</h4>
              <p>
                You can&apos;t submit empty text to the output page. Please
                input some text.
              </p>
              <button className="btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </section>
        </Modal>
      )}
    </main>
  );
};

export default Home;
