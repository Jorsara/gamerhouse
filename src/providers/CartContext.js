import React, { useState } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function CartContext({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  function getFromCart(id) {
    return cart.find(x => x.item.id === id);
  }

  function isInCart({ id }) {
    return id === undefined ? undefined : getFromCart(id) !== undefined;
  }

  function addToCart(obj) {
    if (isInCart(obj.item)) {
        console.log('El item ya esta en el carrito.');
        return;
    }
    setCart([...cart, obj]);
    console.log('Elemento agregado al carrito.');
  }

  function removeFromCart(id){
    const index = cart.indexOf(getFromCart(id));
    if (index > -1) {
    cart.splice(index, 1);
    }
    console.log('Un producto eliminado del carrito.')
  }

  function clear() {
    setCart([]);
    console.log('El carrito fue vaciado.');
  }

  return (
    <ThemeContext.Provider
      value={{ cart, addToCart, clear, removeFromCart }}
    >
      {children}
    </ThemeContext.Provider>
  );
}