import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 xsm:mt-4'>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardDetail='Without Friday 10AM - 5PM' cartTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard bgClass='bg-accent' cardDetail='Dhanmondhi 15, Dhake Bangladesh' cartTitle='Our Locations' img={marker}></InfoCard>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardDetail='+880 013 00000000001' cartTitle='Contact Us' img={phone}></InfoCard>
        </div>
    );
};

export default Info;