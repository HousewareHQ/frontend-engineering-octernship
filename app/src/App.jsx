import { useEffect, useState, useRef } from 'react';
import './App.css';
import { FiDelete } from "react-icons/fi"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [main, setMain] = useState(true);
  const [chars, setChars] = useState([])
  const [staticChars, setstaticChars] = useState([])
  const header = useRef();
  const header1 = useRef();
  const notify = (e) =>
    toast(e, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      type: "error",
      theme: "dark",
    });

  /**
   * @WORKING_FOR_FORM_SUBMIT
   */
  const onSubmit = (e) => {
    e.preventDefault();
    const val = e.target.text.value; //grabs the text value
    if (val.trim() === "") { //removes the whitespaces and checks if it is empty
      notify("Please provide a non-empty value");
    } else { //if it is not empty then update state
      const stringAry = val.split(""); //converts string to array of strings
      setChars(stringAry); //set our chars 
      setstaticChars(stringAry); //set our static Chars
      setMain(false); //set out main ,which then moves us to stage 2
    }
  }
  /**
   * @BACK_FUNC
   * resets our state
   */
  const onClick = () => {
    setMain(true); //true
    setChars([]); //setting it as empty string
  }

  /**
   * @DELETE
   */
  const deleteChar = async (e) => {
    const txt = e.target.getAttribute("data-value"); //grabs the clicked value
    let index = e.target.getAttribute("data-index"); // grabs the clicked index
    index = parseInt(index); //converts the index which is string to number  
    const uniqueChars = await chars.filter((char, idx) => idx === index || char !== txt); //filters all char that doesn't have the same index and have the same elements(duplicates)
    setChars(uniqueChars); //sets our new filtered array
  }

  useEffect(() => { //checks if duplicate exists,which it renders everytime we update our chars state
    if (chars.length > 0) {
      const checkDulicateExists = chars.some(char => chars.indexOf(char) !== chars.lastIndexOf(char)); //expecting Boolean
      if (!checkDulicateExists) {
        //sets our headers
        header.current.textContent = `original string :${staticChars}`;

        header1.current.textContent = ` resultant string :${chars.toString()}`;
      }
    }
  }, [chars])

  return (
    <div className="container">
      <ToastContainer />
      {main ?
        <form onSubmit={onSubmit}>
          <h1>Duplicate character remover</h1>
          <input type="text" name='text' placeholder='please input characters' />
          <button>NEXT</button>
        </form>
        :
        <div className='wrapper'>
          <h2 ref={header}></h2>
          <h2 ref={header1}></h2>
          <div className="box">
            {chars.length > 0 &&
              chars.map((char, idx) => (
                <div className="card" key={idx}>
                  <FiDelete className='icon'
                    onClick={deleteChar}
                    data-value={char}
                    data-index={idx}
                  />
                  {char}
                </div>
              ))
            }
          </div>
          <button onClick={onClick}>Back</button>
        </div>
      }
    </div>
  );
}

export default App;
