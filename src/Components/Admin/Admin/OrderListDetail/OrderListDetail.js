import React from 'react';
import './OrderListDetail.css';

const OrderListDetail = (props) => {
    const { email, userName , serviceName} = props.order;
    return (
        <div>
            <div className="Orders">
                <span className="user-name">{userName}</span>
                <span className="order-email">{email}</span>
                <span className="service-name">{serviceName}</span>
                <span className="visa">Visa</span>

            </div>
        </div>
    );
};

export default OrderListDetail;