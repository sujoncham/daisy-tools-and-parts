import React from 'react';
import { toast } from 'react-toastify';

const RowProduct = ({tool, refetch, index}) => {
    const {_id, name, price, quantity, img} = tool;


    const handleDeleteForm = (id) => {
        const confirmDelete = window.confirm('Are you want to delete this doctor?');
        if(confirmDelete){
          fetch(`https://hidden-beyond-54066.herokuapp.com/products/${id}`, {
          method: "DELETE",
          headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              toast(`Product: ${name} is deleted`);
              refetch();
            }
          });
        }
      };


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <img style={{width:'50px'}} src={img} alt="" />
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <button onClick={()=>handleDeleteForm(_id)} className="btn btn-sm">Delete</button>
            </td>
        </tr>
    );
};

export default RowProduct;