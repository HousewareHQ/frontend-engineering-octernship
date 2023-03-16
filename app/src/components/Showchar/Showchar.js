import React from 'react'
import './Showchar.css'
import { MdDeleteForever } from 'react-icons/md'

function Showchar({data,handleDelete}) {
  return (
    <div className='main-char' style={{backgroundColor: data.color[data.name]}}>
        <h1>{data.name}</h1>
        <button className='delete-btn' onClick={() => handleDelete(data.id)} ><MdDeleteForever/></button>
    </div>
  )
}

export default Showchar