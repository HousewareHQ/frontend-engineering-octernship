import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
 const [name,Setname] = useState('');
 const navigate = useNavigate();


 function handleSubmit(e){
    e.preventDefault();
    let cnt = 0;
    for(let i = 0; i < name.length;i++){
      if(name.charAt(i) === ' '){
        cnt++;
      }
    }
    if(cnt === name.length){
      return alert("Enter a Valid String")
    }
    navigate('/show', {state: {info: name}})
 }

  return (
    <div className="background">
      <div className="main-card">
        <form onSubmit={handleSubmit} className="form-elements">
          <label htmlFor="string">Enter the String</label>
          <input type="text" className="string" id="string" maxLength={40} onChange={(e) => Setname(e.target.value)} />
          <Link onClick={handleSubmit} className='style' > <input type="submit" className="submit" value='Submit' /></Link>
        </form>
      </div>
    </div>
  );
}

export default Home;
