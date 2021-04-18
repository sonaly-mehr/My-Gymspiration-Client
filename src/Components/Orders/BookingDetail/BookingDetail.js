import React from 'react';
import './BookingDetail.css';
import bookLogo from '../../../img/cardio.jpg'
const BookingDetail = (props) => {
    const { email, serviceName , servicePrice, userDate} = props.booking;
    return (
        <div className="col-md-6 col-12">
            <div className="single-booking">
            <img src={bookLogo} alt="" className="img fluid"/>
                <h6>Your Email: {email}</h6>
                <h4>{serviceName}</h4>
                <h5>${servicePrice}</h5>
                <span>Order Date: {userDate}</span>
            </div>
        </div>
    );
};

export default BookingDetail;