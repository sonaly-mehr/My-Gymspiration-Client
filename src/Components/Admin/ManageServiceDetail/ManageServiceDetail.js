import React from 'react';
import './ManageServiceDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageServiceDetail = ({sr}) => {
    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            })
    }
    return (
        <div className="manage-service">
            <h6>{sr.name}</h6>
            <button onClick={()=> deleteProduct(sr._id)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
    );
};

export default ManageServiceDetail;