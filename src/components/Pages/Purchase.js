
import React from "react";
import { useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


const Purchase = () => {
  
    const navigate = useNavigate()
    

    const {data:tools, isLoading} = useQuery('tools', ()=>fetch('http://localhost:5000/products').then(res=>res.json()));
    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }


    const handlePurchase = (id) =>{
        navigate(`/purchase/${id}`);
    }

  
  return (
    <div>
      <h1 className="text-3xl text-center">Our Latest Products tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {tools.map((tool) => (
          <div key={tool._id} tool={tool} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <img className="w-96" src={tool.img} alt="" />
              <h2 className="card-title">{tool.name}</h2>
              <p>{tool.description}</p>
              <p>Price : {tool.price}</p>
          
              <p>Quantity: {tool.quantity} {tool.quantity && tool.quantity > 1 
              ? 
              <span>pieces available</span>: 
              <span className="text-red-500 text-bold">piece not available!!</span>}
              </p>
              <div className="flex justify-center">
              <label onClick={()=>handlePurchase(tool._id)} disabled={tool.quantity === 0} htmlFor="purchase-modal" className="btn btn-primary w-56"> Purchase</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
};

export default Purchase;
