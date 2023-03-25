import classes from './Home.module.css'
import { useState } from 'react';
import Button from './Button/Button';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [val, setVal] = useState('')
    const navigate = useNavigate();

    const onSubHand = (e) => {
        e.preventDefault();
        if (val.trim() === "") {
            alert("Please Enter a valid text")
            return
        }
        else {
            let arr = []
            for (let i = 0; i < val.length; i++) {
                arr.push(val[i]);
            }
            console.log(`after push ${arr}`);



            const freq = {}
            let flag = 0;
            for (let key of arr) {
                if (key in freq) {
                    freq[key]++;
                    flag++;
                }
                else {
                    freq[key] = 1;
                }
                console.log(typeof (freq));
            }
            const freqLen = Object.keys(freq).length;
            console.log("flag: ", flag)
            console.log("length ", Object.keys(freqLen).length);
            console.log(freq);
            if (flag === 0) {
                alert("You already have the string with no duplicates")
                // val = ''
            }
            else {
                // console.log("haaa");
                navigate('/rmdup', { state: { arr, freqLen } });
            }

        }
    }

    return (
        <div>
            <div className={classes.main}>
                <div className={classes.header}>
                    <h1>Duplicate Character Remover </h1>
                </div>

                <div className={classes.inp}>
                    <form onSubmit={onSubHand}>
                        <div className={`${classes.form__group} ${classes.field}`}>

                            <span><h3>Enter your Text below:- </h3></span>
                            <label htmlFor='txtbox' className={classes.form__label}></label>

                            <input className={classes.form__field} type="text" name="txtbox" placeholder="Text" value={val} onChange={(e) => { setVal(e.target.value) }} />

                        </div>
                        <div className={classes.bttn}>
                            <Button />

                        </div>
                    </form>





                </div>

                <div className={classes.footer}>
                    <h6>Powered By</h6>
                    @aksweb

                </div>



            </div>
        </div>
    )
}
export default Home