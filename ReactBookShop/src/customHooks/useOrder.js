import { useState, useEffect } from "react";
import allOrdersData from "../data/oldOrders.json";

export function useOrder(userId = -1) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [metaData, setMetadata] = useState({});

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            try {
                const userOrders = allOrdersData.filter(o => o.fk_user === Number(userId));

                const formattedOrders = userOrders.map(order => {
                    const totalQty = order.data.reduce((acc, item) => acc + item.cantidad, 0);
                    const totalPrice = order.data.reduce((acc, item) => acc + item.precio_total, 0);

                    return {
                        id: order.Id,
                        reference: `PED-${order.Id.toString().padStart(5, '0')}`,
                        itemCount: totalQty,
                        totalAmount: totalPrice.toFixed(2),
                        status: "Completado"
                    };
                });

                setOrders(formattedOrders);
                setMetadata({ totalCount: formattedOrders.length });
                setLoading(false);
            } catch (e) {
                console.error("Error loading orders", e);
                setLoading(false);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [userId]);

    return { orders, loading, metaData };
}