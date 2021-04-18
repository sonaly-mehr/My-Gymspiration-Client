import React from 'react';
import './Orders.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import Review from '../Review/Review';
import BookingList from '../BookingList/BookingList';
// import BookingList from '../BookingList/BookingList';

const Orders = () => {
    return (
        <section className="order-section">

            <div className="container">
                <div className="order-panel">

                    <Router>
                        <div className="order-menu">
                            <nav>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="menu-icon" icon={faCommentAlt}></FontAwesomeIcon><Link to="/bookinglist">Booking List</Link>
                                    {/* <Link to="/book">Book</Link> */}
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="menu-icon" icon={faCommentAlt}></FontAwesomeIcon><Link to="/review">Review</Link>
                                    </li>
                                </ul>
                            </nav>

                            <Switch>
                                <Route exact path="/">
                                <BookingList></BookingList>
                                </Route>

                                <Route path="/orders">
                                <BookingList></BookingList>
                                </Route>

                                <Route path="/bookinglist">
                                <BookingList></BookingList>
                                </Route>

                                <Route path="/review">
                                    <Review></Review>
                                </Route>

                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>

        </section>
    );
};
export default Orders;