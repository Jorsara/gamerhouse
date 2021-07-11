import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';

function Item ({id, title, description, price, imageId, stock}) {
    const { addToCart } = useContext(CartContext);
    const photo = require(`../../assets/img/${imageId}`).default;
    function onAdd(cantidad){
        let addItem = {
            item: {
                id: id,
                title: title,
                description: description,
                price: price,
                imageId: imageId,
                stock: stock
            },
            quantity: cantidad
        };
        addToCart(addItem);
    }
    return (
        <div className="itemContainer">
            <Link to={`/item/${id}`}>
                <img className="img-prod" src={photo}  alt="Producto" />
                <p>ID: {id}</p>
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                <p>Price: {price}</p>    
            </Link>        
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>        
    );
}
  
export default Item;
