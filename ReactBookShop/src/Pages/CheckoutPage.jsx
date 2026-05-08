import React, { useState } from "react";
import { CheckoutUseInfo } from "../components/CheckOut/CheckoutUseInfo";
import { CheckoutCart } from "../components/CheckOut/CheckoutCart";
import "./CheckoutPage.css";

export function CheckoutPage() {
	const [formData, setFormData] = useState({
		"shipping-full-name": "",
		"shipping-last-name": "",
		"shipping-street": "",
		"shipping-floor": "",
		"shipping-number": "",
		"shipping-city": "",
		"shipping-postal-code": "",
		"shipping-phone": "",
		sameBillingAddress: false,
		"billing-full-name": "",
		"billing-last-name": "",
		"billing-street": "",
		"billing-floor": "",
		"billing-number": "",
		"billing-city": "",
		"billing-postal-code": "",
		"billing-phone": "",
	});

	const handleFormChange = (fieldId, value) => {
		setFormData((prev) => ({
			...prev,
			[fieldId]: value,
		}));
	};

	const handleCheckboxChange = (checked) => {
		setFormData((prev) => ({
			...prev,
			sameBillingAddress: checked,
		}));
	};

	return (
		<div className="checkout-page">
			<div className="checkout-page__left">
				<CheckoutUseInfo
					formData={formData}
					onFormChange={handleFormChange}
					onCheckboxChange={handleCheckboxChange}
				/>
			</div>
			<div className="checkout-page__right">
				<CheckoutCart formData={formData} />
			</div>
		</div>
	);
}
