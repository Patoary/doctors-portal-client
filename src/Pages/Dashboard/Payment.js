import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LaKKLF5F0rQ849D8uHdutCmqIwtTGDp0Z85AK7ue654oppDvS7KuKdNXSkae7e2Tjj91x80RVlgjU0aWrMheFsF00GuHl4IpF');

const Payment = () => {
    const { id } = useParams();
    const url = `https://tranquil-headland-79943.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment?.patientName}</p>
                    <h2 class="card-title">Pay for {appointment?.treatment}</h2>
                    <p>Your Appointment<span className='text-orange-500'>{appointment?.date}</span> at <span className='text-orange-500'>{appointment?.slot}</span></p>
                    <p>Please pay: ${appointment?.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50  max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;