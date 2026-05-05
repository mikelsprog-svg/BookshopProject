import React, {useContext} from "react";
import { CartContext } from "../../context/cart/CartContext";

export function CartItem({ book }) {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className="cart-item">
            <h3>{book.title}</h3>
            <p>Price: ${book.price.toFixed(2)}</p>
            <p>Quantity: {book.quantity}</p>
            <button onClick={() => decreaseQuantity(book.id)}>-</button>
            <button onClick={() => increaseQuantity(book.id)}>+</button>
            <button onClick={() => removeFromCart(book.id)}>Remove</button>
        </div>
    );
}