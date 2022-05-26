import axios from "axios";
import { format } from "date-fns";
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
   const [date, setDate] = useState(new Date());
  
  const formatDate = format(date, 'PP');
  

  useEffect(()=>{
    const url = `http://localhost:5000/products/${purchaseId}`;
    fetch(url)
    .then(res =>res.json())
    .then(result => {
      setPurchase(result)
    });
}, [purchaseId]);


const handleProductUpdate = (event) =>{
  event.preventDefault();
  const quantity = event.target.quantity.value;
  const updatePurchase = {
    quantity : quantity,
  }

  const url = `http://localhost:5000/products/${purchaseId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(updatePurchase)
        })
        .then(res => res.json())
        .then(data => {
         
            toast("Updated data successfully", data);
            const stockValue = event.target.quantity.value;
            const remainStock = stockValue.filter((stock) => stock.quantity !== quantity);
            setPurchase(remainStock);
            
        });

}

const handleStockUpdateInput = event =>{
  const {quantity, ...rest} = purchase;
  const newQuantity = event.target.value;
  if(newQuantity <=0){
      toast("Stock out");
      return;
  }
  const newUpdateValue = {quantity:newQuantity, ...rest};
  setPurchase(newUpdateValue);
}
 

  const handlePurchaseForm = (event) =>{
    event.preventDefault();
    const purchaseValue = event.target.purchaseValue.value;
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    
    const purchaseData = {
      toolId: purchase._id,
      date:formatDate,
      productName: purchase.productName,
      purchaseValue, 
      phone, 
      address,
      customer:user?.email,
      customerName:user?.displayName
    };

    // postdata
    axios.post('http://localhost:5000/purchase/', purchaseData)
        .then(response => {
            toast("Purchase successfully");
        })
  
    // setPurchase('');

  }

    return (
        <div className="mt-20 mb-20">
          
          <div className="grid lg:grid-cols-2 gap-3 justify-items-center">
            <div className="w-full max-w-md mb-10">

              <form onSubmit={handleProductUpdate} >
                <div className="form-control w-96">
                  <input type="email" value={formatDate} readOnly disabled />
                  <input className='mb-2 p-1' type="text" name="img" value={purchase.img || ''} readOnly disabled />
                  <input type="text" value={purchase.name || ''} readOnly disabled />
                  <input type="text" value={purchase.price || ''} readOnly disabled />
                  <textarea type="text" name="address" value={purchase.description || ''} readOnly disabled></textarea>
               
                    <input 
                    className='input input-bordered' 
                    type="number" 
                    name="quantity"
                    value={purchase.quantity || ''} 
                    onChange={handleStockUpdateInput} 
                    />
                </div>
                <div className="justify-center mt-10">
                <button type="submit" className="btn">Update Quantity</button>
              </div>
              </form>


            </div>
            <form onSubmit={handlePurchaseForm} >
              <div className="form-control w-96">
                <input type="text" value={formatDate} readOnly disabled />
                <input type="email" value={user?.email || ''} readOnly disabled />
                <input type="text" value={purchase.name || ''} readOnly disabled />
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
                  <input type="number" value={purchase.quantity || ''} readOnly disabled />
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
                <button className="btn">Purchase</button>
              </div>
            </form>

          </div>
        
      </div>
    );
};

export default PurchaseModal;