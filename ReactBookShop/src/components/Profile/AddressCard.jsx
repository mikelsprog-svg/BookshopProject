import React from 'react';
import './AddressCard.css';

export function AddressCard() {
    return (
        <div className="container">
            <div className="card">
                <input type="checkbox" checked readOnly className="checkbox" />
                <div className="addressInfo">
                    <strong>Calle Inventada</strong>
                    <p>Inventada</p>
                    <p>Inventada</p>
                    <p>28001 - Madrid</p>
                    <p>Madrid</p>
                </div>
                <div className="actions">
                    <button className="editBtn">✎ Editar</button>
                    <button className="deleteBtn">✕ Eliminar</button>
                </div>
            </div>

            <button className="addBtn">
                <span>+</span> Añadir dirección
            </button>
        </div>
    )
}
