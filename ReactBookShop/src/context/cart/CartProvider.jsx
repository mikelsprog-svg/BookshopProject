import React, { useState } from 'react';
import { CartContext } from './CartContext';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  //funciones que compartiran el carrito, esto luego puede usarse si se agrega otro componente de carrito en sidebar o algo asi, para no repetir codigo:

    const addToCart = (book) => {};
    const removeFromCart = (bookId) => {};
    const clearCart = () => {};
    const increaseQuantity = (bookId) => {};
    const decreaseQuantity = (bookId) => {};
    const getTotalItems = () => {};
    const getTotalPrice = () => {};

    return (
      <CartContext.Provider
        value={{
          cartItems,
          addToCart,
          removeFromCart,
          clearCart,
          increaseQuantity,
          decreaseQuantity,
          getTotalItems,
          getTotalPrice
        }}
      >
        {children}
      </CartContext.Provider>
    );
}
