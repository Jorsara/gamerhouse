import './CartWidget.css';
import { NavLink } from 'react-router-dom';
import carrito from '../../assets/icons/carrito.png';
import React, { useContext } from 'react';
import CartContext from '../../context/CartContext';


function CartWidget() {
    const { cantItems } = useContext(CartContext);
    return (
        <NavLink to="/cart" className={`${cantItems === 0 ? 'nav-link cartWidget cartVacio' : 'nav-link cartWidget' }`}>
            <img src={carrito} alt="carrito"></img>
            <div className="cartCounter">{cantItems}</div>
        </NavLink>
    );
}
  
export default CartWidget;
