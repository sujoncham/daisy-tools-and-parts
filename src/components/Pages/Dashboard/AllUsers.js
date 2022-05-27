import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const AllUsers = () => {
   
    const { data:allUsers, isLoading} = useQuery('users', ()=>fetch('http://localhost:5000/users').then(res =>res.json()));

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div>
      <h1 className="text-3xl mt-10">Manage Products</h1>
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
                allUsers.map((user, index) => <tr index={index} key={user._id} user={user}>
                    <th>{index + 1}</th>
                    <td>{user.email}</td>
                    <td>
                        <button className='btn btn-sm'>admin</button>
                    </td>
              
                    <td>
                        <button className="btn btn-sm">Delete</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllUsers;