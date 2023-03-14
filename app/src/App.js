import {useState} from 'react'
import './App.css';

function App() {
  const [openResult, setOpenResult] = useState(false);
  const [isError, setIsError] = useState(false);
  const [content, setContent] = useState("");
  return (
    <section>
      <form action="" className={isError? "error":"normal"} onSubmit={(evt)=>{
        evt.preventDefault();
          // openResult if there is some content
          // else set the error
          if(content.length !== 0){
            setOpenResult(true);
          } else (
            setIsError(true)
          )
      }}>
        <textarea className="editable" value={content} onChange={(e)=>{
          if(isError) setIsError(false);
          setContent(e.target.value);
        }}></textarea>
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
      {(openResult)?<div className="result">
        <div className="display">{content}</div>
        <button className='close-btn' onClick={(evt)=>{
          setOpenResult(false);
        }} >Close</button>
      </div>:""}
    </section>
  );
}

export default App;
