import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../Login/useAuth';

const CheackOutForm = ({ paymentData }) => {
    const { user } = useAuth()
    const { price, name, _id } = paymentData
    const [error, setEror] = useState('')
    const [process, setprocessing] = useState(false)
    const [success, setSuccess] = useState('')
    const [clientsecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setprocessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setEror(error.message)
            setSuccess('')
        } else {
            setEror('')
            console.log('[PaymentMethod]', paymentMethod);
        }
        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientsecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user.email,
                    },
                },
            },
        );
        if (intentError) {
            setEror(intentError.message)
            setSuccess('')

        }
        else {
            setEror('')
            setSuccess('your payment procced Successfully')
            setprocessing(false)
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transection: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/mobile/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })

        }
    }
    return (
        <div className='mt-5 container'>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {process ? <div>
                    <div class="spinner-grow text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div><div class="spinner-grow text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> : <button className='mt-3 btn btn-outline-dark btn-lg' type="submit" disabled={!stripe || success}>
                    Pay: ${paymentData.price}
                </button>}

            </form>
            {error && <h4 className='text-danger'> {error} </h4>}
            {success && <h4 className='text-success'> {success} </h4>}

        </div>
    );
};

export default CheackOutForm;