import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

function Item ({id, title, description, price, pictureUrl}) {
    function onAdd(cantidad){
        console.log(cantidad);
    }
    return (
        <div className="itemContainer">
            <img class="img-prod" src={pictureUrl} />
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>            
            <ItemCount stock="5" initial={1} onAdd={() => onAdd()}/>  
        </div>
    );
}
  
export default Item;
