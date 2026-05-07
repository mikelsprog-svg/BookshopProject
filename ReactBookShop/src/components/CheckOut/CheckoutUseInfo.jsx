import React from "react";
import "./CheckoutUseInfo.css";

function Field({ label, id, value, onChange, className = "", ...props }) {
  return (
    <div className={`form-field ${className}`.trim()}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        {...props}
      />
    </div>
  );
}

export function CheckoutUseInfo({ formData, onFormChange, onCheckboxChange }) {
  return (
    <div className="checkout-user">
      <h2>Dirección de envío</h2>
      <form className="checkout-form">
        <div className="field-row">
          <Field
            label="Nombre completo *"
            id="shipping-full-name"
            value={formData["shipping-full-name"]}
            onChange={onFormChange}
          />
          <Field
            label="Apellidos *"
            id="shipping-last-name"
            value={formData["shipping-last-name"]}
            onChange={onFormChange}
          />
        </div>
        <Field
          className="full"
          label="Calle *"
          id="shipping-street"
          value={formData["shipping-street"]}
          onChange={onFormChange}
        />
        <div className="field-row field-row--three">
          <Field
            label="Piso"
            id="shipping-floor"
            value={formData["shipping-floor"]}
            onChange={onFormChange}
          />
          <Field
            label="Número"
            id="shipping-number"
            value={formData["shipping-number"]}
            onChange={onFormChange}
          />
          <Field
            className="field--wide"
            label="Ciudad *"
            id="shipping-city"
            value={formData["shipping-city"]}
            onChange={onFormChange}
          />
        </div>
        <div className="field-row">
          <Field
            label="Código postal *"
            id="shipping-postal-code"
            value={formData["shipping-postal-code"]}
            onChange={onFormChange}
          />
          <Field
            label="Teléfono *"
            id="shipping-phone"
            value={formData["shipping-phone"]}
            onChange={onFormChange}
          />
        </div>

        <label className="billing-checkbox">
          <input
            type="checkbox"
            checked={formData.sameBillingAddress}
            onChange={(event) => onCheckboxChange(event.target.checked)}
          />
          La dirección de facturación es la misma que la de envío
        </label>

        <fieldset
          className={`billing-section ${
            formData.sameBillingAddress ? "billing-section--disabled" : ""
          }`}
          disabled={formData.sameBillingAddress}
        >
          <hr />
          <h3>Dirección de facturación</h3>
          <div className="field-row">
            <Field
              label="Nombre completo *"
              id="billing-full-name"
              value={formData["billing-full-name"]}
              onChange={onFormChange}
            />
            <Field
              label="Apellidos *"
              id="billing-last-name"
              value={formData["billing-last-name"]}
              onChange={onFormChange}
            />
          </div>
          <Field
            className="full"
            label="Calle *"
            id="billing-street"
            value={formData["billing-street"]}
            onChange={onFormChange}
          />
          <div className="field-row field-row--three">
            <Field
              label="Piso"
              id="billing-floor"
              value={formData["billing-floor"]}
              onChange={onFormChange}
            />
            <Field
              label="Número"
              id="billing-number"
              value={formData["billing-number"]}
              onChange={onFormChange}
            />
            <Field
              className="field--wide"
              label="Ciudad *"
              id="billing-city"
              value={formData["billing-city"]}
              onChange={onFormChange}
            />
          </div>
          <div className="field-row">
            <Field
              label="Código postal *"
              id="billing-postal-code"
              value={formData["billing-postal-code"]}
              onChange={onFormChange}
            />
            <Field
              label="Teléfono *"
              id="billing-phone"
              value={formData["billing-phone"]}
              onChange={onFormChange}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
