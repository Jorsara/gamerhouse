import './ItemDetail.css';
import {Row, Col, Container, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import ThemeContext from '../../context/ThemeContext';

function ItemDetail ({id, title, description, price, pictureUrl, stock}) {
    const [cartCount, setCartCount] = useState(0);
    const { addToCart, cart, clear, removeFromCart, isInCart } = useContext(ThemeContext);

    function onAdd(cantidad){
        setCartCount(cantidad);
        let addItem = {
            item: {
                id: id,
                title: title,
                description: description,
                price: price,
                pictureUrl: pictureUrl,
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

                    {/* Test de funcionalidades del carrito.}                    
                    <Button onClick={()=> console.log(cart)}>Ver Cart</Button>
                    <Button onClick={() => addToCart({item:{id:2, title: 'test'},quantity:2})}>Agregar producto duplicado</Button>
                    <Button onClick={() => removeFromCart(2)}>Eliminar</Button>
                    <Button onClick={()=> clear()}>Clear</Button>
                    {*/}

                </Col>   
            </Row> 
        </Container>       
    );
}
  
export default ItemDetail;
