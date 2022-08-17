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
        </div>
    );
};

export default MyAppointments;