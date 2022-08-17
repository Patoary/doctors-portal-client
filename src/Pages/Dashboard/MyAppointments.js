import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:4000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data));
        }
    },[user]);
    return (
        <div>
            <h3>My Appointments : {appointments.length}</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((appointment, index) => <tr className='hover'>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;