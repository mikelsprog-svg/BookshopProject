import React from "react";
import { useCart } from "../../customHooks/useCart";
import "../Cart/CartSummary.css";

export function CheckoutCart() {
	const { getTotalItems, getTotalPrice } = useCart();
	const totalItems = getTotalItems();
	const totalPrice = getTotalPrice();

	return (
		<aside className="cart-summary">
			<h2>Subtotal de la cesta</h2>
			<div className="cart-summary__price-row">
				<span className="cart-summary__total">{totalPrice.toFixed(2)}€</span>
				<span className="cart-summary__items">({totalItems} artículos)</span>
			</div>
			<button className="btn btn-primary cart-summary__checkout">Pagar</button>
			<button className="cart-summary__continue">Continuar comprando</button>
		</aside>
	);
}

