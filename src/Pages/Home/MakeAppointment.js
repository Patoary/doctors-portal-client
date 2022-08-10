import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-100px]' src={doctor} alt=''></img>
            </div>
            <div className='flex-1 mr-32'>
                <h3 className='text-xl text-primary font-bold mb-2'>Appointment</h3>
                <h2 className='text-3xl text-white mb-2'>Make an Appointment Today</h2>
                <p className='text-white mb-2'>
                    Hello everyonfe! We are specialists practicing dentistry in Nakanoshima, Osaka.My name is Arimoto and I work as a specialist of Periodontology/Implantology,certified by EFP (http://www.efp.org/). I studied periodontology at the department of periodontics at the university of Gothenburg in Sweden for 3 years , in order to be a specialist of periodontics.Dr. Toshihiro Ushikubo,who studied endodontology for 2 yearsat the department of Endodonticsat the university of Pennsylvania in the U.S. made a strong partnership in order to spread evidence-based dentistry in Japan and to providehigh quality global standard treatments to our patients. We, as specialists, think that there are few clinics that can provide satisfactory treatments to patients who come from abroad.
                </p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;