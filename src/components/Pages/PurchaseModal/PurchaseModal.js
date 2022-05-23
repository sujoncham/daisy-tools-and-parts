import { format } from "date-fns";
import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const PurchaseModal = ({date, setDate, setPurchase, purchase}) => {
  const {_id, name} = purchase;
  const formatDate = format(date, 'PP');
  const [user] = useAuthState(auth);
  
  
  const handlePurchaseForm = (event) =>{
    event.preventDefault();
    const purchaseValue = event.target.purchaseValue.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    
    const purchase = {
      toolId: _id,
      date:formatDate,
      productName: name,
      purchaseValue, 
      phone, 
      address,
      customer:user.email,
      customerName:user.displayName
    };

    // postdata
    fetch('http://localhost:5000/purchase', {
      method: "POST", 
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(purchase)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.success){
        toast("Your have purchased successfully");
      } else{
        toast.error("You can not buy once at a day");
      }

    })
    setPurchase('');


  }

    return (
        <div>

        <input type="checkbox" id="purchase-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          
            <form onSubmit={handlePurchaseForm} className="grid grid-cols-1 gap-3 justify-items-center">
              <div className="form-control w-full max-w-xs">
                <input type="email" value={name} className="input input-bordered mb-3" readOnly disabled />
                <input type="email" value={formatDate} className="input input-bordered mb-3" readOnly disabled />
                <input type="text" value={user?.displayName} className="input input-bordered mb-3" readOnly disabled />
                <input type="email" value={user?.email} className="input input-bordered mb-3" readOnly disabled />
                <input type="number" name="phone" placeholder="Phone" className="input input-bordered mb-3" />
                <textarea type="text" name="address" className="textarea textarea-bordered mb-3" placeholder="address"></textarea>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Purchase quantity</span>
                </label>
                <input
                  type="number"
                  name="purchaseValue"
                  className="input input-bordered"
                />
              </div>
              
              <div className="justify-center">
                <button className="btn">Purchase</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
};

export default PurchaseModal;