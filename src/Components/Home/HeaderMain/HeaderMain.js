import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <section className="header-main">
            <div className="container">
                <h3>A <span>brand new</span></h3>
                <h2>training experience</h2>
                <p>Work towards your fitness goal with one of our amazing personal trainer, for the price of one cup of coffee per week</p>
                <button>Get appointment</button>
            </div>
        </section>
    );
};

export default HeaderMain;