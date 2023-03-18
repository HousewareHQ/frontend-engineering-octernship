import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { changeData } from "../store";
const PageTwo = () => {
  const original = useSelector((val)=>{
    return val.data.Original
  })
  const duplicate = useSelector((val)=>{
    return val.data.Duplicate
  })

  const dispatch = useDispatch()
  const nav = useNavigate()
  useEffect(()=>{
    // security precaution to prevent view of this page without inputting the values
    if(original.length === 0){
        nav('/')
    }
  },[original,nav])

  useEffect(()=>{
    // setting random colors for the character
    let maxval = 0xFFFFFF
    let elements = document.getElementsByClassName('letters')
    elements  = Array.from(elements);
    elements.map((val,index)=>{
      let data = val.getAttribute('value')
      let next = val.nextElementSibling
      let previous = val.previousElementSibling
      let randomcolor = Math.random()*maxval
      randomcolor = Math.floor(randomcolor)
      randomcolor = randomcolor.toString(16)
      let randcolor = randomcolor.padStart(6,0)
      randcolor = randcolor.toUpperCase()
      val.style.backgroundColor = `#${randcolor}`
      while(next !== null){
        if (data === next.getAttribute('value')){
          next.style.backgroundColor =`#${randcolor}`
        }
        next = next.nextElementSibling
      }
      while(previous !== null){
        if (data === previous.getAttribute('value')){
          previous.style.backgroundColor =`#${randcolor}`
        }
        previous = previous.previousElementSibling
      }

    })

  },[duplicate])
  
  function remove(e){
    const element = e.target.parentElement
    const value = element.getAttribute('value')
    let next = element.nextElementSibling
    let previous = element.previousElementSibling
    const animate = document.getElementsByClassName('error-p')
    while(next !==null){
      const elem_data = next.getAttribute('value')
      const index = next.getAttribute('number')
      if (elem_data === value ){
        dispatch(changeData.delete_value(parseInt(index)))
        animate[0].setAttribute('id','animate')
        setTimeout(()=>{
          animate[0].removeAttribute('id')
        },2500)
      }
      next = next.nextElementSibling
    }
    while (previous !== null){
      const elem_data = previous.getAttribute('value')
      const index = previous.getAttribute('number')
      if(elem_data === value){
        dispatch(changeData.delete_value(parseInt(index)))
        animate[0].setAttribute('id','animate')
        setTimeout(()=>{
          animate[0].removeAttribute('id')
        },2500)
      }
      previous = previous.previousElementSibling
    }
  }
  return (
    <>
      <NavLink to='/' className='link'>Back</NavLink>
      <div className="page_two">
        {
            [...duplicate].map((value,index)=>{
                return(
                    <p  key={index} number={index} value={value} className="display_text letters"><span >{value}</span><span  className='span'  onClick={remove}><DeleteIcon className="delete"/></span></p>
                )
            })
        }
        <aside className="error-p">
            <p>Success</p>
            <p>{original}</p>
            <p>
                {
                    duplicate.map((value,index)=>{
                        return (
                            <span key={index}>{value}</span>
                        )
                    })
                }
            </p>
        </aside>
        
    </div>
    </>

  )
}

export default PageTwo