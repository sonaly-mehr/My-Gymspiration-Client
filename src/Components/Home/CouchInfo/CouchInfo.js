import React from 'react';
import './CouchInfo.css';

const CouchInfo = (props) => {
    const {image, name, passion} =props.trainer;
    return (
        <div className="col-md-3 col-12">
            <div className="single-trainer">
                <img src={image} alt="" className="img fluid"/>
                <h6>{name}</h6>
                <span>{passion}</span>
            </div>
        </div>
    );
};

export default CouchInfo;