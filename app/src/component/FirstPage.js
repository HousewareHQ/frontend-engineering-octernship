import React,{useState,useContext} from 'react';
import './First.css'
import nodeContext from './nodeContext';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const navigate=useNavigate();
    const[box,setbox]=useState('');
    const a=useContext(nodeContext)
const handleSubmit = () =>{
    if(box.length===0){
        console.log(box.length);
        alert("provide a non-empty value")
    }else{
        a.setState(box);
        navigate('/Second');
    }
}

    return <div>
        <div className='container'>
            <div className='Text-box'>
                <input type="text" value={box} onChange={event=>setbox(event.target.value)}/>
            </div>

            <div className='submit-button'>
                <button type='submit' onClick={handleSubmit}> Submit</button>
            </div>
        </div>


    </div>;
}


export default FirstPage;