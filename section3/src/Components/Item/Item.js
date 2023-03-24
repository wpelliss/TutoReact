import "./Item.css"
import image from "../../Images/gigachad.jpg"

console.log(image);

function Item(props)
{
    return (
        <div>
            <button onClick={props.func}>{props.txt}</button>
            <img src={image} alt="" height="50"/>
        </div>
    );
}

export default Item;