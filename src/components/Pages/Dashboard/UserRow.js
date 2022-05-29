import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ index, user, refetch }) => {
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`https://hidden-beyond-54066.herokuapp.com/users/admin/${email}`, {
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
        {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">admin</button>}
      </td>

      <td>
        <button disabled={role === 'admin'} className="btn btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
