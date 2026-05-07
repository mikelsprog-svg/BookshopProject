import React from "react";
import { useCart } from "../../customHooks/useCart";
import "./CartItem.css";

export function CartItem({ book }) {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className="cart-item">
            <img src={book.image} alt={book.title} />
            <div className="cart-item__content">
                <h3>{book.title}</h3>
                <p>Precio: ${book.price.toFixed(2)}</p>
                <p>Cantidad: {book.quantity}</p>
                <div className="cart-item__actions">
                    <button className="btn btn-secondary" onClick={() => decreaseQuantity(book.id)}>-</button>
                    <button className="btn btn-secondary" onClick={() => increaseQuantity(book.id)}>+</button>
                    <button className="btn btn-danger cart-item__delete" onClick={() => removeFromCart(book.id)}>
                        <svg className="cart-item__delete-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M9 3.75h6a1.5 1.5 0 0 1 1.5 1.5V6h3a.75.75 0 0 1 0 1.5h-1.05l-.78 10.2A2.25 2.25 0 0 1 15.42 20H8.58a2.25 2.25 0 0 1-2.25-2.3L5.55 7.5H4.5A.75.75 0 0 1 4.5 6h3v-.75A1.5 1.5 0 0 1 9 3.75Zm-.9 3h7.8V5.25a.3.3 0 0 0-.3-.3H9.4a.3.3 0 0 0-.3.3V6.75ZM8.06 7.5l.72 9.45a.75.75 0 0 0 .75.7h5.94a.75.75 0 0 0 .75-.7l.72-9.45H8.06Zm2.44 2.25c.41 0 .75.34.75.75v3.75a.75.75 0 0 1-1.5 0v-3.75c0-.41.34-.75.75-.75Zm3 0c.41 0 .75.34.75.75v3.75a.75.75 0 0 1-1.5 0v-3.75c0-.41.34-.75.75-.75Z"/>
                        </svg>
                        <span>Eliminar del carrito</span>
                    </button>
                </div>
            </div>
        </div>
    );
}