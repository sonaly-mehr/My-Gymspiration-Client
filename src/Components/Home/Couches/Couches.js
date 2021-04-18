import React from 'react';
import './Couches.css';
import couch1 from '../../../img/trainer1.png';
import couch3 from '../../../img/trainer3.jpg';
import couch2 from '../../../img/trainer2.jpg';
import couch4 from '../../../img/trainer4.jpg';
import CouchInfo from '../CouchInfo/CouchInfo';


const Couches = () => {
    const trainers = [
        {
            image: couch1,
            name: 'Robert Stain',
            passion: 'Fitness Coach'
        },
        {
            image: couch3,
            name: 'Merry joe',
            passion: 'Fitness Coach'
        },
        {
            image: couch2,
            name: 'Jhon Henry',
            passion: 'Fitness Coach'
        },
        {
            image: couch4,
            name: 'Kristen Larry',
            passion: 'Fitness Coach'
        }
    ]
    return (
        <section className="couches-container">
            <div className="container">
                <h4>Our Couches</h4>
                <p>Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.</p>
                <div className="trainers">
                    <div className="row">
                        {
                            trainers.map(trainer => <CouchInfo trainer={trainer}></CouchInfo>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Couches;