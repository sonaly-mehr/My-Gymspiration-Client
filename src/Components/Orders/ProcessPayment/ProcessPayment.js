import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';
const stripePromise = loadStripe('pk_test_51IeF2FDWdYPFaGFdcB4l7ZnOYxuVEToaYpUgLehHupf7KUBNSlAzbuCd7Y3oaObJaE1QlOGwDS55LrNZeU2gsgW3008PyxC6sG');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
           <CardForm handlePayment={handlePayment}></CardForm>
        </Elements>
    );
};

export default ProcessPayment;