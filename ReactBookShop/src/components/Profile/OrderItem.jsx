import React from 'react';
import './OrderItem.css';

export function OrderItem (data) {
    return (
        <tr className="row">
            <td>{data.referencia}</td>
            <td>{data.libreria}</td>
            <td>{data.estado}</td>
            <td>{data.fecha}</td>
        </tr>
    )
}

