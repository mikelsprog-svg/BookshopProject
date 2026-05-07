import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../customHooks/useCart";
import { CartList } from "./CartList";
import "./CartSideBar.css";

export function CartSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalPrice, clearCart, cartItems } = useCart();
  const totalPrice = getTotalPrice();

  const handleNavigateToCart = () => {
    navigate("/cartpage");
    setIsOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleCartIconClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <svg 
        className="cart-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        onClick={handleCartIconClick}
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>

      {isOpen && (
        <>
          <div className="cart-sidebar__overlay" onClick={handleClose}></div>
          <div className="cart-sidebar">
            <div className="cart-sidebar__header">
              <h3>Tu carrito</h3>
              <button className="cart-sidebar__close" onClick={handleClose}>
                ✕
              </button>
            </div>

            <div className="cart-sidebar__content">
              <CartList isCompact={true} />
            </div>

            {cartItems.length > 0 && (
              <div className="cart-sidebar__footer">
                <div className="cart-sidebar__total">
                  <span>Total:</span>
                  <span className="cart-sidebar__total-amount">{totalPrice.toFixed(2)}€</span>
                </div>
                <button
                  className="btn btn-secondary cart-sidebar__clear-btn"
                  onClick={handleClearCart}
                >
                  Vaciar carrito
                </button>
              </div>
            )}

            <div className="cart-sidebar__footer-actions">
              <button className="btn btn-primary cart-sidebar__checkout-btn" onClick={handleNavigateToCart}>
                Ver carrito completo
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
