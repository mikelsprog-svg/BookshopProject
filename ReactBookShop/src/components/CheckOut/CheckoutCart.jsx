import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../customHooks/useCart";
import "../Cart/CartSummary.css";

export function CheckoutCart({ formData }) {
	const navigate = useNavigate();
	const { getTotalItems, getTotalPrice, clearCart } = useCart();
	const totalItems = getTotalItems();
	const totalPrice = getTotalPrice();

	// Validar campos obligatorios de envío
	const shippingFields = [
		"shipping-full-name",
		"shipping-last-name",
		"shipping-street",
		"shipping-city",
		"shipping-postal-code",
		"shipping-phone",
	];

	// Validar campos obligatorios de facturación (si no es la misma dirección)
	const billingFields = [
		"billing-full-name",
		"billing-last-name",
		"billing-street",
		"billing-city",
		"billing-postal-code",
		"billing-phone",
	];

	const isFormValid = () => {
		// Verificar campos de envío
		for (let field of shippingFields) {
			if (!formData[field] || formData[field].trim() === "") {
				return false;
			}
		}

		// Verificar campos de facturación si no es la misma dirección
		if (!formData.sameBillingAddress) {
			for (let field of billingFields) {
				if (!formData[field] || formData[field].trim() === "") {
					return false;
				}
			}
		}

		return true;
	};

	const isValid = isFormValid();

	const handlePay = () => {
		if (isValid) {
			window.alert("Pedido realizado con exito");
			clearCart();
			navigate("/");
		}
	};

	return (
		<aside className="cart-summary">
			<h2>Subtotal de la cesta</h2>
			<div className="cart-summary__price-row">
				<span className="cart-summary__total">{totalPrice.toFixed(2)}€</span>
				<span className="cart-summary__items">({totalItems} artículos)</span>
			</div>

			{!isValid && (
				<div className="checkout-cart__error-message">
					<p className="checkout-cart__error-title">⚠️ Completa todos los campos requeridos</p>
				</div>
			)}

			<button
				className={`btn btn-primary cart-summary__checkout ${
					!isValid ? "cart-summary__checkout--disabled" : ""
				}`}
				onClick={handlePay}
				disabled={!isValid}
			>
				Pagar
			</button>
			<button 
				className="cart-summary__continue"
				onClick={() => navigate("/")}
			>
				Continuar comprando
			</button>
		</aside>
	);
}

