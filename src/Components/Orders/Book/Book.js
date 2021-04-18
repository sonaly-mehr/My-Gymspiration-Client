import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Book.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { useForm } from 'react-hook-form';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';

const Book = () => {
    const { serviceId } = useParams();
    const [serviceKey, setServiceKey] = useState([]);
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        fetch(`https://salty-caverns-62513.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceKey(data))
    }, [serviceId])

    const onSubmit = data => {
        const userData = {
            userName: data.name,
            userEmail: data.email,
            userDate: data.date
        };
        setUserInfo(userData);
    }

    const handleCheckOut = (paymentId) => {
        const newBooking = {
            ...loggedInUser,
            ...userInfo,
            serviceName: serviceKey.name,
            servicePrice: serviceKey.price,
            paymentId
        };
        fetch('https://salty-caverns-62513.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => console.log('server side respond'))
        history.push('/orders');
    };


    return (

        <div className="bookings-info">
            <div className="container">
                <h2>Book</h2>
                <div className="booking-form" style={{ display: userInfo ? 'none' : 'block' }}>
                {/*  */}
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="single-input">
                            <input type="text" name="name" placeholder="Your Name"  {...register("name")} />
                        </div>
                        <div className="single-input">
                            <input type="email" name="email" placeholder="Your Email"  {...register("email")} />
                        </div>
                        <div className="single-input">
                            <input type="date" name="date" className="form-control" {...register("date")} />
                        </div>

                        <div className="description">
                        <div className="table-desc">
                            <h6>Description</h6>
                            <h6>Price</h6>
                        </div>

                        <div className="product-desc">
                            <h5>{serviceKey.name}</h5>
                            <h5>${serviceKey.price}</h5>
                        </div>
                    </div>

                        <div className="info-submit">
                            <input type="submit" value="Proceed to Checkout" />
                        </div>
                    </form>

                </div>
                <div className="checkout" style={{ display: userInfo ? 'block' : 'none' }}>
                    
                    <h6>Pay With</h6>
                    <ProcessPayment handlePayment={handleCheckOut}></ProcessPayment>
                    <span>Your Service charge will be ${serviceKey.price}</span>
                    {/* <button ><a href="#">Pay</a></button> */}
                    {/* onClick={handleCheckOut} */}
                    {/* <Link to="/orders">Checkout</Link> */}
                </div>
            </div>
        </div>
    );
}

export default Book;