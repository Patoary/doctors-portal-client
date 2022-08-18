import React from 'react';
import {useQuery} from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:4000/user').then(res => res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
        return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     {
         users.map((user,index)=> <UserRow
         key={user._id}
         index= {index}
         user= {user}
         ></UserRow>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;