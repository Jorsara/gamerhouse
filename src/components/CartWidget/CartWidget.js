import './CartWidget.css';
import {Nav} from 'react-bootstrap';
import carrito from '../../assets/icons/carrito.png';
import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';


function CartWidget() {
    const { cart } = useContext(ThemeContext);
    const cartCounter = cart.length;
    return (
        <Nav.Link href="/cart" className={`${cart.length === 0 ? 'cartWidget cartVacio' : 'cartWidget' }`}>
            <img src={carrito} alt="carrito"></img>
            <div className="cartCounter">{cartCounter}</div>
        </Nav.Link>
    );
}
  
export default CartWidget;
