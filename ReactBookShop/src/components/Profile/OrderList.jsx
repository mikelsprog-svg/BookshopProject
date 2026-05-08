import React from 'react';
import { OrderItem } from './OrderItem';
import './OrderList.css';

import oldOrders from "../../data/oldOrders.json"
import {useOrder} from "../../customHooks/useOrder.js";
export function OrderList({userId}) {
    const { orders, loading } = useOrder(userId);

    return (
        <div className="wrapper">
            <div className="controls">
                <div className="showEntries">
                    Mostrar <input type="number" defaultValue="25" className="inputNumber" /> registros
                </div>
                <div className="search">
                    Buscar: <input type="text" className="inputText" />
                </div>
            </div>

            <table className="table">
                <thead>
                <tr>
                    <th>Referencia <span>↑↓</span></th>
                    <th>Librería <span>↑↓</span></th>
                    <th>Estado <span>↑↓</span></th>
                    <th>Fecha <span>↑↓</span></th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => <OrderItem key={order.id} data={order} />)}
                </tbody>
            </table>

            <div className="footer">
                <p>Mostrando registros del 0 al 0 de un total de 0 registros</p>
                <div className="pagination">
                    <button className="pageBtn" disabled>Anterior</button>
                    <button className="pageBtn" disabled>Siguiente</button>
                </div>
            </div>
        </div>
    );
}