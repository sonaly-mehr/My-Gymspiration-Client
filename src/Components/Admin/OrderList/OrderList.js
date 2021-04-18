import React, { useEffect, useState } from 'react';
import OrderListDetail from '../Admin/OrderListDetail/OrderListDetail';
import './OrderList.css';

const OrderList = () => {
    const [Orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://salty-caverns-62513.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    })
    return (
        <section className="order-list-container">
            <h4>Order List</h4>

            <div className="order-details">
                <div className="order-header">
                <span>Name</span> <span>Email ID</span> <span>Service</span> <span>Pay With</span>
                </div>
                {
                    Orders.map(order => <OrderListDetail order={order}></OrderListDetail>)
                }
            </div>
        </section>
    );
};

export default OrderList;