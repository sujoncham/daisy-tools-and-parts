import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import UserRow from './UserRow';

const AllUsers = () => {
   
    const { data:allUsers, isLoading, refetch} = useQuery('users', ()=>fetch('http://localhost:5000/users', {
        method: 'GET',
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>res.json()));

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div>
      <h1 className="text-3xl mt-10">All Users</h1>
      <div className="overflow-y-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                allUsers?.map((user, index) => <UserRow index={index} key={user._id} user={user} refetch={refetch}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllUsers;