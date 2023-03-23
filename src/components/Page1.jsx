import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  "./page1.css";

export const Page1 = () => {
    const navigate = useNavigate()
    let [inputValue,setInput]= useState('')

    const handleChangeFunction = (event) => {
        setInput(event.target.value)
    }
    const handleSubmitFunction = (event) => {
        event.preventDefault()
        inputValue = inputValue.trim()
        if( (!inputValue)|| inputValue === ' '){
            alert('Opps Error! Plz Enter a Valid String.')
        }
        else{
            navigate('/page2',{ 
                state: inputValue
            })
        }
    }
    return(
        <div className="Container">
            <h1>This is Page 1</h1>
            <form>
                <input  type="text" placeholder='Enter your string here!' onChange={handleChangeFunction} />
                <button onClick={handleSubmitFunction} >Submit</button>
            </form>
        </div>
    )
}