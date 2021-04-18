import React, { useEffect, useState } from 'react';
import TestimonialInfo from '../TestimonialInfo/TestimonialInfo';
import './Testimonial.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeTestimonial')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
  return (
    <section className="testimonial-container">
      <div className="container">
        <h4>What our customers say</h4>
        <h6>Thousands of people got benefit of our programs.</h6>
      
      <div className="row">
        {
          testimonials.map(testimonial => <TestimonialInfo testimonial={testimonial}></TestimonialInfo>)
        }
      </div>
      </div>
    </section>
  );
};

export default Testimonial;