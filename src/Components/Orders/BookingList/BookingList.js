import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingDetail from '../BookingDetail/BookingDetail';
import './BookingList.css';

const BookingList = () => {
    const [Bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://salty-caverns-62513.herokuapp.com/booking?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    })
    return (
        <div className="Booking-summary">
            <h4>Booking List</h4>
            <h6 className="bookings">You have {Bookings.length} Bookings!</h6>
            <div className="row">
                {
                    Bookings.map(booking => <BookingDetail booking={booking}></BookingDetail>)
                }
            </div>
        </div>
    );
};

export default BookingList;