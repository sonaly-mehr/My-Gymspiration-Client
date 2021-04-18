import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft,  faStar} from '@fortawesome/free-solid-svg-icons';
import React from 'react';  
import './TestimonialInfo.css';
const TestimonialInfo = ({ testimonial }) => {
    return (
        <div className="col-md-4 col-12">
            <div className="single-testimonial-info">
                <FontAwesomeIcon className="quote" icon={faQuoteLeft}></FontAwesomeIcon>
                <p>{testimonial.description}</p>
                <h5>{testimonial.name}</h5>
                <span>{testimonial.designation}</span> <br/>
                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default TestimonialInfo;