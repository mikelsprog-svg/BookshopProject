import React, { useState } from 'react';
import { CartContext } from './CartContext';

export function CartProvider({ children }) {
  const createDemoCartItems = () => ([
    {
      id: 1984,
      title: 'El ejercicio ciego',
      image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
      price: 20.95,
      quantity: 1,
    },
    {
      id: 1002,
      title: 'La biblioteca perdida',
      image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
      price: 19.5,
      quantity: 1,
    },
  ]);

  const [cartItems, setCartItems] = useState(createDemoCartItems);

  const normalizeBook = (book) => ({
    id: book.id ?? book.Id,
    title: book.title ?? book.Name,
    image: book.image ?? book.Image,
    price: Number(book.price ?? book.PriceAfterDiscount ?? book.Price ?? 0),
    quantity: book.quantity ?? 1,
  });

  const addToCart = (book) => {
    const normalizedBook = normalizeBook(book);

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === normalizedBook.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === normalizedBook.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, normalizedBook];
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== bookId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (bookId) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (bookId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
