import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center grid lg:grid-cols-2 md:grid-cols-1 xsm:grid-cols-1'>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={doctor} alt=''></img>
            </div>
            <div className='flex-1 lg:mr-28 md:p-16 xsm:p-10'>
                <h3 className='text-xl text-primary font-bold mb-3'>Appointment</h3>
                <h2 className='text-3xl text-white mb-3'>Make an Appointment Today</h2>
                <p className='text-white mb-3'>
                    Hello everyonfe! We are specialists practicing dentistry in Nakanoshima, Osaka.My name is Arimoto and I work as a specialist of Periodontology/Implantology,certified by EFP. I studied periodontology at the department of periodontics at the university of Gothenburg in Sweden for 3 years , in order to be a specialist of periodontics.Dr. Toshihiro Ushikubo.
                </p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;