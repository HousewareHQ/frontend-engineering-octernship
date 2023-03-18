import React, { useContext } from 'react';
import nodeContext from './nodeContext';
import Card from './Card.js'
import './Second.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate} from 'react-router-dom';

const SecondPage = () => {
    const navigate=useNavigate();
    const a = useContext(nodeContext);
    let str = [...a.state];
    const uniqueChar = new Set();
    str.forEach((ele) => {
        uniqueChar.add(ele);
    })
    // console.log("length ==>",uniqueChar);

    return <div className='main'>
        <div className='screen'>
        <div className='arrow' onClick={()=>navigate('/')}>
                <ArrowBackIcon />
            </div>
            <div className='old'>
            <h1>Old String :-</h1>
            <p>{a.previous}</p>
            </div>
            <div className='result'>
            <h1>Resultant String :-</h1>
            <p>{a.resultant}</p>
            </div>
            
            
        </div>

        <div className="outer-container">
            

            {str.map((e, i) => {
                // console.log(e);

                return (

                    <Card value={e} index={i} uniqueChar={uniqueChar} />


                )

            })}
        </div>


    </div>;
}



export default SecondPage;