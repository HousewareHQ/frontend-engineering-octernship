import { Navigate, useNavigate, useLocation } from "react-router-dom"
import { Flex } from 'rebass'
import classes from './RemoveDup.module.css'
import Card from "./Card/Card";
import { useState } from "react";


const RemoveDup = () => {
    console.log("state", useLocation().state);
    const recData = useLocation().state?.arr || [];
    const freqLen = useLocation().state?.freqLen || 0;
    // const { recData, freqLen } = useLocation().state;

    // const history = useHistory();
    const navigate = useNavigate();


    const [data, setData] = useState(recData)
    const orgStr = recData.join('')
    const [newStr, setNewStr] = useState(orgStr)



    const revEngine = (item, index) => {
        console.log("freqlen: ", freqLen);
        console.log(item);
        console.log(index);
        const newData = [...data]
        for (let i = index + 1; i < data.length; i++) {
            // console.log(data);
            if (newData[i] === item) {
                newData.splice(i, 1);
                i--;
                setData(newData);
            }
            setNewStr(newData.join(''))

        }

        console.log(data);
    }
    function handleClick() {
        navigate('/')
    }

    return (
        <div className={classes.outer}>


            <div className={classes.main}>

                <div>
                    <button type="" onClick={handleClick}>Go Back</button>
                    {<div>
                        <span><h2>Original String : {orgStr} </h2></span> <span><h2>New String : {newStr} </h2></span>
                    </div>}
                </div>
                <div className={classes.message}>
                    {(data.length === freqLen) ? <h3>Successfully Removed All the duplicates</h3> : ""}
                </div>

                <div className={classes.flexContainer}>

                    {/* <div className={classes.flexItem}> */}
                    {data.map((item, index) => (
                        <Card value={item} key={`${item}_${index}`} className={` ${classes.flexItem}  ${classes.a}`}>
                            <div className={classes.inside}>
                                {item}
                            </div>


                            <button className={classes.delete} onClick={() => revEngine(item, index)}>Remove this</button>
                        </Card>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default RemoveDup