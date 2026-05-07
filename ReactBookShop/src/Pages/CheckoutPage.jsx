import React from "react";
import { CheckoutUserInfor } from "../components/CheckOut/CheckoutUserInfor";
import { CheckoutCart } from "../components/CheckOut/CheckoutCart";
import "./CheckoutPage.css";

export function CheckoutPage() {
	return (
		<div className="checkout-page container">
			<div className="checkout-page__left">
				<CheckoutUserInfor />
			</div>
			<div className="checkout-page__right">
				<CheckoutCart />
			</div>
		</div>
	);
}
