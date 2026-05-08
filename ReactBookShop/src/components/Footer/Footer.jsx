import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img className="footer-logo" src="/favicon.svg" alt="Logo de la empresa" />
                <p>© 2026 - Relatos de papel</p>
            </div>
        </footer>
    );
}