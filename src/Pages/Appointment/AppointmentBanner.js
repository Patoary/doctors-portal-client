import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bannerbg from '../../assets/images/bg.png';
const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (

        <div 
        className= 'h-1/6 px-12 '
        style={{
            background: `url(${bannerbg})`,
            backgroundSize: 'cover'

        }}
        >
            <div classNameName="hero max-h-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:ml-32 xsm:mb-16'>
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                </div>
                <div>
                    <DayPicker 
                     mode="single"
                     selected={date}
                     onSelect={setDate}
                    />
                     <p>You have select: {format(date, 'PP')}</p>

                </div>
            </div>
            
        </div>
        </div>
    );
};

export default AppointmentBanner;