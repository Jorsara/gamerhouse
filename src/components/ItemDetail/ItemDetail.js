import './ItemDetail.css';
import {Row, Col, Container} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function ItemDetail ({id, title, description, price, pictureUrl, stock}) {
    const [cartCount, setCartCount] = useState(0);
    function onAdd(cantidad){
        setCartCount(cantidad);
    }
    return (
        <Container className="prodDesc">
            <Row>
                <Col> 
                    <img className="imagenProd" src={pictureUrl} alt="Producto" />
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
