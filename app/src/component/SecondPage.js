import React,{useContext} from'react';
import nodeContext from './nodeContext';

const SecondPage = () => {
    const a=useContext(nodeContext);
    return <div>
        <h1>{a.state}</h1>
    </div>;
}



export default SecondPage;