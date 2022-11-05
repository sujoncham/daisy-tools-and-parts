import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/Firebase.init";

const PurchaseModal = () => {
  const {purchaseId} = useParams();
  const [user] = useAuthState(auth);
  const [purchase, setPurchase] = useState({});
   const today = new Date();
   const formatDate = today.toLocaleDateString("en-US");

  useEffect(()=>{
    const url = `https://daisy-tools-parts.onrender.com/products/${purchaseId}`;
    fetch(url)
    .then(res =>res.json())
    .then(result => {
      setPurchase(result)
    });
}, [purchaseId]);



const handleQuantity = (event) =>{
  const {quantity, ...rest} = purchase; 
  const newQuantity = event.target.value;
  const newData = {quantity:newQuantity, ...rest};

  setPurchase(newData);
}





  const handlePurchaseForm = (event) =>{
    event.preventDefault();
    const purchaseValue = event.target.purchaseValue.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    
    const purchaseData = {
      toolId: purchase._id,
      date:formatDate,
      name: purchase.name,
      price: purchase.price,
      purchaseValue, 
      phone, 
      address,
      customer:user?.email,
      customerName:user?.displayName
    };

    // postdata
    axios.post(`https://daisy-tools-parts.onrender.com/purchase/`, purchaseData)
        .then(response => {
            toast("Purchase successfully");
            // setPurchase('');
        })
  }

    return (
        <div className="mt-20 mb-20">
          <h1 className="text-3xl font-bold text-center mb-12 text-blue-500">Give Your Information</h1>
          <div className="grid lg:grid-cols-2 gap-3 justify-items-center">
            <div className="w-full max-w-md mb-10">
              <img src={purchase.img} alt="" />
              <h1 className="text-3xl font-bold uppercase">{purchase.name}</h1>
              <p>{purchase.description}</p>
              <div>
                  
                    <input type="number" onChange={handleQuantity} value={purchase.quantity} className='border p-2' />
                  
              </div>
            </div>
            <form onSubmit={handlePurchaseForm} >
              <div className="form-control w-96">
                <input type="text" value={formatDate} readOnly disabled />
                <input type="email" value={user?.email || ''} readOnly disabled />
                <input type="number" name="phone" placeholder="Phone" className="input input-bordered mb-3" autoComplete="off" />
                <textarea type="text" name="address" className="textarea textarea-bordered mb-3" placeholder="address"></textarea>
              </div>
              <div className="form-control w-96">
              <label className="label">
                  <span className="label-text">Product name</span>
                  <input type="text" value={purchase.name || ''} readOnly disabled />
                </label>
              <label className="label">
                  <span className="label-text">Available Quantity</span>
                  <input type="number" value={purchase.quantity && purchase.quantity - purchase.quantity} readOnly disabled />
                </label>
              
              <label className="label">
                  <span className="label-text">Price</span>
                  <input type="number" value={purchase.price || ''} readOnly disabled />
                </label>
              
                <label className="label">
                  <span className="label-text">Purchase quantity</span>
                  <input
                  type="number"
                  name="purchaseValue"
                  className="input input-bordered"
                />
                </label>
              </div>
              <div className="justify-center mt-10">
                <button type="submit" className="btn">Purchase</button>
              </div>
            </form>
          </div>
      </div>
    );
};

export default PurchaseModal;