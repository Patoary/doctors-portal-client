import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <service className='px-12'>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body text-center">
                    <h2 class="card-title text-secondary mx-auto">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'> Try another date.</span>

                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div class="card-actions justify-center" >
                        <button disabled={slots.length === 0}
                            className='btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary'
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </service>
    );
};

export default Service;