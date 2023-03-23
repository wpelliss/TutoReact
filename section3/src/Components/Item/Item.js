import "./Item.css"

function Item(props)
{
    return (
        <button onClick={props.func}>{props.txt}</button>
    );
}

export default Item;