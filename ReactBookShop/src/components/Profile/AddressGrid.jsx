import React from 'react';
import {AddressCard} from './AddressCard';
import './AddressGrid.css';

export function AddressGrid (){
    return (
        <div className="container">
            <div className="grid">
                <AddressCard />
            </div>

            <button className="addBtn">
                <span className="plus">+</span> Añadir dirección
            </button>
        </div>
    )
}
