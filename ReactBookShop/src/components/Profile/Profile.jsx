import React, { useState } from 'react';
import {OrderList} from './OrderList';
import {AddressGrid} from './AddressGrid';
import './Profile.css';

export function Profile() {
    return (
        <div className="container">
            <section className="section">
                <h2 className="title">Mis pedidos</h2>
                <div className="underline"></div>
                <OrderList />
            </section>

            <section className="section">
                <h2 className="title">Direcciones</h2>
                <div className="underline"></div>
                <AddressGrid />
            </section>
        </div>
    )
}