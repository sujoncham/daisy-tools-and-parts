import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeTools = () => {
    const navigate = useNavigate();
  const [tools, setTools] = useState([]);

  const newTools = tools.slice(-6)

  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handlePurchasePage = ()=>{
    navigate('/purchase');
  }

  return (
    <div className="mt-20 mb-42">
      <h1 className="text-3xl text-center text-blue-500 uppercase font-bold mb-14">Our Latest Products tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {newTools.map((tool) => (
          <div key={tool._id} tool={tool} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <img src={tool.img} alt="" />
              <h2 className="card-title">{tool.name}</h2>
              <p>{tool.description}</p>
              <p>Price : {tool.price}</p>
              <p>Quantity: {tool.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-center mt-20 card card-compact bg-base-100 shadow-xl">
        <button onClick={handlePurchasePage} className="btn btn-primary m-auto w-96 mb-10">Purchase</button>
      </div>
    </div>
  );
};

export default HomeTools;
