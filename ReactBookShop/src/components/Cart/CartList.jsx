import React from "react";
import { useCart } from "../../customHooks/useCart";
import { CartItem } from "./CartItem";
import "./CartList.css";

export function CartList() {
    const { cartItems, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-list cart-list--empty">
                <p>Tu carrito está vacío.</p>
            </div>
        );
    }

    return (
        <div className="cart-list">
            {cartItems.map((book) => (
                <CartItem key={book.id} book={book} />
            ))}
            <div className="cart-list__footer">
                <button className="btn btn-secondary cart-list__clear" onClick={clearCart}>
                    <svg className="cart-list__clear-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M9 3.75h6a1.5 1.5 0 0 1 1.5 1.5V6h3a.75.75 0 0 1 0 1.5h-1.05l-.78 10.2A2.25 2.25 0 0 1 15.42 20H8.58a2.25 2.25 0 0 1-2.25-2.3L5.55 7.5H4.5A.75.75 0 0 1 4.5 6h3v-.75A1.5 1.5 0 0 1 9 3.75Zm-.9 3h7.8V5.25a.3.3 0 0 0-.3-.3H9.4a.3.3 0 0 0-.3.3V6.75ZM8.06 7.5l.72 9.45a.75.75 0 0 0 .75.7h5.94a.75.75 0 0 0 .75-.7l.72-9.45H8.06Zm2.44 2.25c.41 0 .75.34.75.75v3.75a.75.75 0 0 1-1.5 0v-3.75c0-.41.34-.75.75-.75Zm3 0c.41 0 .75.34.75.75v3.75a.75.75 0 0 1-1.5 0v-3.75c0-.41.34-.75.75-.75Z"/>
                    </svg>
                    <span>Vaciar carrito</span>
                </button>
            </div>
        </div>
    );
}