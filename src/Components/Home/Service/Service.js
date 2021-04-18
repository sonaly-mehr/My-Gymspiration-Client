import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import './Service.css';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="service-container">
            <div className="container">
                <h4>Our Services</h4>
                <p>Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt.</p>
                <div className="row">

                    {
                        services.map(service => <ServiceData service={service}></ServiceData>)

                    }
                </div>
            </div>
        </section>
    );
};

export default Service;