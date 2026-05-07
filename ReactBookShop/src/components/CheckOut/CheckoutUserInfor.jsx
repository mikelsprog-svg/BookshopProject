import React from "react";
import "./CheckoutUserInfor.css";

export function CheckoutUserInfor() {
  return (
    <div className="checkout-user">
      <h2>Dirección de envío</h2>
      <form className="checkout-form">
        <div className="field-row">
          <input placeholder="Nombre completo *" />
          <input placeholder="Apellidos *" />
        </div>
        <input className="full" placeholder="Calle *" />
        <div className="field-row">
          <input placeholder="Piso" />
          <input placeholder="Mano" />
          <input placeholder="Ciudad *" />
        </div>
        <div className="field-row">
          <input placeholder="Código postal *" />
          <input placeholder="Teléfono *" />
        </div>

        <label className="billing-checkbox">
          <input type="checkbox" /> La dirección de facturación es la misma que la de envío
        </label>

        <hr />
        <h3>Dirección de facturación</h3>
        <div className="field-row">
          <input placeholder="Nombre completo *" />
          <input placeholder="Apellidos *" />
        </div>
        <input className="full" placeholder="Calle *" />
        <div className="field-row">
          <input placeholder="Piso" />
          <input placeholder="Mano" />
          <input placeholder="Ciudad *" />
        </div>
        <div className="field-row">
          <input placeholder="Código postal *" />
          <input placeholder="Teléfono *" />
        </div>
      </form>
    </div>
  );
}
