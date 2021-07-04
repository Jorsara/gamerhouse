import './Cart.css';
import {Nav} from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from '../../context/ThemeContext';
import picture from '../../assets/img/producto.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Cart() {
    const { cart, addToCart, removeFromCart } = useContext(ThemeContext);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
        addToCart({
            item:{
                id: 1,
                title: 'Producto 1',
                description: 'Lorem impsum',
                price: 200,
                pictureUrl: picture,
                stock: 4,
                category: 1
            },
            quantity: 2 
        });
        addToCart({
            item:{
                id: 2,
                title: 'Producto 2',
                description: 'Lorem impsum',
                price: 200,
                pictureUrl: picture,
                stock: 4,
                category: 1
            },
            quantity: 1 
        });
        cart.forEach(item => {
            console.log(item.item.price);
            setCartTotal(cartTotal + item.item.price);
        })
    });
    
    
    return (
        <Container className="cartContainer">
            <Row>
                <Col>
                    <h2 className="text-center">Carrito</h2>
                    <div className="cartItems">
                        <table>
                            <thead>
                                <tr>
                                    <th className="product-thumbnail">&nbsp;</th>
                                    <th className="product-name">Producto</th>
                                    <th className="product-price">Precio</th>
                                    <th className="product-quantity">Cantidad</th>
                                    <th className="product-subtotal">Subtotal</th>
                                    <th className="product-remove">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(producto => {
                                    return <tr className="cartItem" key={producto.item.id}>
                                        <td className="product-thumbnail"><img src={producto.item.pictureUrl} /></td>
                                        <td className="product-name">{producto.item.title}</td>
                                        <td className="product-price">{producto.item.price}</td>  
                                        <td className="product-quantity">{producto.quantity}</td>
                                        <td className="product-subtotal">{producto.item.price * producto.quantity}</td>
                                        <td className="product-remove"><Button onClick={()=> removeFromCart(producto.item.id)}>X</Button></td>
                                    </tr>;
                                })} 
                                <tr>
                                    <td class="cartTotal">
                                        {cartTotal}
                                    </td>
                                </tr>
                            </tbody>   
                        </table>
                    </div>
                </Col>
            </Row>
        </Container>
        
    );
}
  
export default Cart;
