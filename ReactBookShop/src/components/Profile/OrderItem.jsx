import React from 'react';
import './OrderItem.css';

export function OrderItem ({data}) {
    return (
        <tr className="row">
            <td>{data.reference}</td>
            <td>{data.itemCount} libros</td>
            <td>
                <span className={`status ${data.status.toLowerCase()}`}>
                    {data.status}
                </span>
            </td>
            <td>{data.totalAmount} €</td>
        </tr>
    )
}

