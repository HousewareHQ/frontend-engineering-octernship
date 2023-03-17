import React,{useState,useReducer,useContext} from 'react'
import NodeContext from './nodeContext'

const NodeState=(props)=>{
  const [state,setState]=useState('');
  console.log(state);
    return(
        <NodeContext.Provider value={{state,setState}}>
          {props.children}
        </NodeContext.Provider>
    )
   

}
export default NodeState;
