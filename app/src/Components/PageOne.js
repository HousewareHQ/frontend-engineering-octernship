import { useDispatch,useSelector } from "react-redux"
import { changeData } from "../store"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
const PageOne = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const original = useSelector((val)=>{
    return val.data.Original
  })

  //clearing the original and duplicate value on load
  useEffect(()=>{
    dispatch(changeData.change_Original(''))
    dispatch(changeData.reset_duplicate())
  },[])
  function Submit(){
    //checking if the inputted values doesn't pass the needed conditions
    if ( original.length === 0 || original.trim().length === 0){
        const data = document.getElementById('error')
        data.style.visibility ='visible'
        dispatch(changeData.change_Original(''))
       setTimeout(()=>{
        data.style.visibility = 'hidden'
       },5000)

    }
    else{
        for (var i = 0; i < original.length; i++) {
            dispatch(changeData.change_Diplicate( original.charAt(i)))
          }
        
        navigate('/verified')
    }
  }
  return (
    <div className="page_one">
        <input onChange={(e)=>{
            dispatch(changeData.change_Original(e.target.value.trim()))
        }} value={original} type="text" placeholder="Please Input desired value ..." />
        <p id="error">Please Provide A None Empty Value</p>
        <button onClick={Submit}>Submit</button>
    </div>
  )
}

export default PageOne