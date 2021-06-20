import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function Item ({id, title, description, price, pictureUrl, stock}) {
    function onAdd(cantidad){
        console.log(cantidad);
    }
    return (
        <div className="itemContainer">
            <Link to={`/item/${id}`}>
            <img className="img-prod" src={pictureUrl} alt="Producto" />
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>    
            </Link>        
            <ItemCount stock={stock} initial={1} onAdd={() => onAdd()}/>  
        </div>        
    );
}
  
export default Item;
