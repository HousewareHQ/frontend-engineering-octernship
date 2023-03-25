import { Button } from 'rebass';
import classes from './Card.module.css'
const Card = (props) => {
    const cardClasses = `${classes.card} w-48 my-40`;
    const colors = [
        "#FF5733", // a
        "#FFC300", // b
        "#FF33FF", // c
        "#5D26C1", // d
        "#00FF7F", // e
        "#2F4F4F", // f
        "#F08080", // g
        "#808000", // h
        "#9ACD32", // i
        "#FFA07A", // j
        "#87CEEB", // k
        "#FF1493", // l
        "#8B008B", // m
        "#9370DB", // n
        "#32CD32", // o
        "#FFB6C1", // p
        "#800000", // q
        "#00CED1", // r
        "#BA55D3", // s
        "#008080", // t
        "#C71585", // u
        "#8B4513", // v
        "#FFDAB9", // w
        "#4169E1", // x
        "#FF69B4", // y
        "#FFFF00", // z
    ];

    let col = props.value.charCodeAt() < 97 ? 65 : 97
    if (props.value.charCodeAt() < 65) {
        col = 33
    }

    return (
        // <div className={cardClasses}>{props.children}</ div>

        <div className={cardClasses} style={{ backgroundColor: colors[props.value.charCodeAt() - col] }}>
            {console.log("from card value: ", props.value)}
            {props.children}

            {/* <div className={cardClasses} style={{ backgroundColor: colors[value.charCodeAt() - col] }}>{props.children} */}

            {/* <div className={cardClasses}>{props.children} */}


            {/* </ div> */}
            {/* <Button className={cardClasses}>Remove After This</Button> */}
            {/* </div> */}
        </div>

    )
}
export default Card