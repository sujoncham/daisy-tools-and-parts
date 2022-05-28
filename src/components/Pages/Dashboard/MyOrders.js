import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../Firebase/Firebase.init';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import DeletingConfirmModel from './DeletingConfirmModel';
import RowOrder from './RowOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deletingOrder, setDeletingOrder] = useState(null);

  const {data : orders, isLoading, refetch} = useQuery('users', ()=>fetch(`http://localhost:5000/purchase?customer=${user?.email}`, {
    method:'GET',
    headers:{
      authorization : `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then((res) => res.json()));

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  
   
    return (
        <div>
      <h1 className="text-3xl mt-10">My Order products: {orders.length}</h1>
      <div className="font-bold">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>My Email</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                orders?.map((order, index) => <RowOrder 
                index={index} 
                key={order._id}
                order={order}
                setDeletingOrder={setDeletingOrder}
                ></RowOrder>)
            }
          </tbody>
        </table>
      </div>
      </div>
      {deletingOrder && <DeletingConfirmModel refetch={refetch} deletingOrder={deletingOrder} setDeletingOrder={setDeletingOrder}></DeletingConfirmModel>}
    </div>
    );
};

export default MyOrders;