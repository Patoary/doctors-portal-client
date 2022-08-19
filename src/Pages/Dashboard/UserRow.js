import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import {toast} from 'react-toastify';
const UserRow = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:4000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch()
            toast('Successfully made an admin')
        })
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
                <td><button className='btn btn-xs'>Remove User</button></td>
                <td>Blue</td>
            </tr>
        </>
    );
};

export default UserRow;