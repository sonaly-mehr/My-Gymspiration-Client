import React from 'react';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faPlus, faUserPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import OrderList from '../OrderList/OrderList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';

const Admin = () => {
    return (
        <section className="admin-section">

            <div className="container">
                <div className="admin-panel">

                    <Router>
                        <div className="admin-menu">
                            <nav>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon className="menu-icon" icon={faBox}></FontAwesomeIcon> <Link to="/order">Order List</Link>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="menu-icon" icon={faPlus}></FontAwesomeIcon> <Link to="/add">Add Service</Link>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="menu-icon" icon={faUserPlus}></FontAwesomeIcon> <Link to="/make">Make Admin</Link>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon className="menu-icon" icon={faThLarge}></FontAwesomeIcon> <Link to="/manage">Manage Services</Link>
                                    </li>
                                </ul>
                            </nav>

                            <Switch>
                                <Route exact path="/admin">
                                    <AddService></AddService>
                                </Route>

                                <Route path="/add">
                                    <AddService></AddService>
                                </Route>
                                
                                <Route path="/order">
                                    <OrderList></OrderList>
                                </Route>

                                <Route path="/make">
                                    <MakeAdmin></MakeAdmin>
                                </Route>

                                <Route path="/manage">
                                    <ManageService></ManageService>
                                </Route>

                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>

        </section>
    );
};

export default Admin;