import React from 'react';
const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <service className='px-12'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title text-secondary mx-auto">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'> Try another date.</span>

                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div className="card-actions justify-center" >
                        <label htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className='btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary'>Book Appointment</label>
                    </div>
                </div>
            </div>
        </service>
    );
};

export default Service;