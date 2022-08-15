import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bannerbg from '../../assets/images/bg.png';
const AppointmentBanner = ({date, setDate}) => {
    return (

        <div 
        className= 'h-1/6 px-12 '
        style={{
            background: `url(${bannerbg})`,
            backgroundSize: 'cover'

        }}
        >
            <div className="hero max-h-lg">
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
                    

                </div>
            </div>
            
        </div>
        </div>
    );
};

export default AppointmentBanner;