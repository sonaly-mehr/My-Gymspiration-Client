import React, { useEffect, useState } from 'react';
import ManageServiceDetail from '../ManageServiceDetail/ManageServiceDetail';
import './ManageService.css';

const ManageService = () => {
    const [manageServices, setManageServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manage')
            .then(res => res.json())
            .then(data => setManageServices(data))
    }, [])
    return (
        <div className="manage-service-wrap">
            <h4>Manage Product</h4>
            <div className="manage-service-table">
                <span>Service Name</span><span>Action</span>
            </div>
            {
                manageServices.map(sr => <ManageServiceDetail sr={sr}></ManageServiceDetail>)
            }
        </div>
    )
};

export default ManageService;