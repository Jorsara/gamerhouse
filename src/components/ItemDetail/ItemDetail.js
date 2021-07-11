import './ItemDetail.css';
import {Row, Col, Container} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';

function ItemDetail ({id, title, description, price, imageId, stock}) {
    const [cartCount, setCartCount] = useState(0);
    const { addToCart } = useContext(CartContext);
    const photo = require(`../../assets/img/${imageId}`).default;

    function onAdd(cantidad){
        setCartCount(cantidad);
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
        <Container className="prodDesc">
            <Row>
                <Col> 
                    <img className="imagenProd" src={photo} alt="Producto" />
                </Col>
                <Col>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Precio: ${price}</p>
                    {cartCount >= 1 ? (
                        <>
                            <p>Fueron agregados {cartCount} items al carrito</p>
                            <Link to="/cart" className="mt-2 btn btn-outline-secondary">Terminar compra</Link>
                        </>
                    ) : (
                        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>  
                    )}                    
                </Col>   
            </Row> 
        </Container>       
    );
}
  
export default ItemDetail;
