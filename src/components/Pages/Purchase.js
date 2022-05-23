
import React, { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import PurchaseModal from "./PurchaseModal/PurchaseModal";

const Purchase = () => {
    const [purchase, setPurchase] = useState(null);
    const [date, setDate] = useState(new Date());
    const [tools, setTools] = useState([]);

    

  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center">Our Latest Products tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {tools.map((tool) => (
          <div key={tool._id} tool={tool} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <img src={tool.img} alt="" />
              <h2 className="card-title">{tool.name}</h2>
              <p>{tool.description}</p>
              <p>Price : {tool.price}</p>
              <p>Quantity: {tool.quantity}</p>
              <label onClick={()=>setPurchase(tool)}  htmlFor="purchase-modal" className="btn btn-primary w-56"> Purchase</label>
            </div>
          </div>
        ))}
      </div>
      {purchase && <PurchaseModal date={date} setDate={setDate} purchase={purchase} setPurchase={setPurchase} ></PurchaseModal>}
      
    </div>
  );
};

export default Purchase;
