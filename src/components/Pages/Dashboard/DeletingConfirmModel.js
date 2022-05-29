import React from "react";
import { toast } from "react-toastify";

const DeletingConfirmModel = ({deletingOrder, setDeletingOrder, refetch}) => {
    const {_id, name} = deletingOrder;


    const orderDelete = () => {
       
          fetch(`https://hidden-beyond-54066.herokuapp.com/purchase/${_id}`, {
          method: "DELETE",
          headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          } })
          .then((res) => res.json())
          .then((result) => {
              console.log(result);
            if (result.deletedCount) {
              toast.success(`Order: ${name} is delete`);
              setDeletingOrder(null)
              refetch();
            }
          });
        }
    

  return (
    <div>
      
      <input type="checkbox" id="order-Deleting-Modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete this <span className="text-2xl text-red-500">({name} )</span> order!
          </h3>
          <p className="py-4">
            You've been selected for a order to delete which will never get back;
          </p>
          <div className="modal-action">
            <label htmlFor="order-Deleting-Modal" className="btn btn-sm">
              Cancel
            </label>
            <button onClick={()=>orderDelete(_id)} className="btn btn-sm">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingConfirmModel;
