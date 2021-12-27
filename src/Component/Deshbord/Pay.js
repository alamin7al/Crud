import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheackOutForm from './CheackOutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51K4VazLqEpkIafbhxY78CAju4W7myrBb1EUXOHaLUxJOfXiIOkgDdAz80kTGlvo21krfN9GaSpjIaK8wrNm5hK8600F6Zlahrc')
const Pay = () => {
    const { payId } = useParams()
    const [paymentData, setPaymentData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/mobile/${payId}`)
            .then(res => res.json())
            .then(data => setPaymentData(data))
    }, [payId])
    return (
        <div>
            <div className=' text-center'>
                <h4>Please Pay For ${paymentData.price} for {paymentData.phonename} </h4>
                <div className="text-start">
                    <h5>Your Name: {paymentData.name} </h5>
                    <h6> Your email: {paymentData.email} </h6>
                    <h5> Mobile Name: {paymentData.phonename} </h5>
                    <h4>Mobile Price : ${paymentData.price} </h4>
                </div>
            </div>
            {paymentData?.price && <Elements stripe={stripePromise}>
                <CheackOutForm paymentData={paymentData} />
            </Elements>}
        </div>
    );
};

export default Pay;