import './ItemDetail.css';
import {Row, Col, Container} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';

function ItemDetail ({id, title, description, price, imageId, stock}) {
    const [cartCount, setCartCount] = useState(0);
    const [mostrarMsj, setMostrarMsj] = useState(0);
    const { addToCart, isInCart } = useContext(CartContext);
    const photo = require(`../../assets/img/${imageId}`).default;

    function onAdd(cantidad){
        setMostrarMsj(1);
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
        if(isInCart(addItem.item)){
            setMostrarMsj(2)
        }
        else{
            setCartCount(cantidad);        
            addToCart(addItem);
        }
    }
    return (
        <Container className="prodDesc">
            <Row>
                <Col> 
                    <img className="imagenProd" src={photo} alt="Producto" />
                </Col>
                <Col>
                    <h2 className="title-prod">{title}</h2>
                    <p className="desc-prod">{description}</p>
                    <p className="price-prod">${price}</p>
                    {mostrarMsj !== 0 ? (
                        <>
                            { mostrarMsj === 1 ? (
                                <p id="mensaje-prod">Fueron agregados {cartCount} items al carrito.</p>
                            ) : (
                                <p id="mensaje-prod">El producto ya esta en el carrito.</p>
                            )}
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
