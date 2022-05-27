import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ index, user, refetch }) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method:'PUT',
            headers:{
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if(res.status === 403){
                toast.error('failed to add an admin')
            }
           return res.json()}
            )
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                refetch();
            toast.success("admin created successfully");
            }
        })
    }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm">admin</button>}
      </td>

      <td>
        <button className="btn btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
