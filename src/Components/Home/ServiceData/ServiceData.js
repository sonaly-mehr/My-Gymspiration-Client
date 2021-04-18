import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceData.css';

const ServiceData = ({ service }) => {
    const history = useHistory()
    const handleService = (id) => {
        history.push(`/book/${id}`);
    }
    return (
        <div className="col-md-4 col-12">
            <div className="single-service-info">
                <div className="service-img">
                    <div>
                        <img src={service.imageURL} alt="" />
                    </div>
                </div>
                <div className="service-description">
                    <h5>{service.name}</h5> <span>-${service.price}</span>
                    <p>{service.description}</p>
                    <button onClick={() => handleService(service._id)} className="search-btn">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceData;