import React from 'react';
import Couches from '../Couches/Couches';
import FitnessCourse from '../FitnessCourse/FitnessCourse';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Service></Service>
           <Couches></Couches>
           <Testimonial></Testimonial>
           <FitnessCourse></FitnessCourse>
           <Footer></Footer>
        </div>
    );
};

export default Home;