import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth);
    const formattedData = format(date, 'PP');
    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment:name,
            date:formattedData,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone: event.target.phone.value,
        }
        console.log(booking)

        fetch('http://localhost:4000/booking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
        if(data.success){
            toast(`Appointment is set, ${formattedData} at ${slot}`)
            toast('insert done')
        }else{
            toast.error(`Already hava an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
        }
        refetch();
        // to close the modal
        setTreatment(null);
        })

    }
    return (
        <div>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                key={index}
                                 value={slot}
                                 >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder='Your Name' value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' value={user?.email || ''}  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="input input-bordered w-full max-w-xs text-white bg-accent" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;