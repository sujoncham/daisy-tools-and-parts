import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeTools = () => {
    const navigate = useNavigate();
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("daisyTools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const handlePurchasePage = ()=>{
    navigate('/purchase');
  }

  return (
    <div>
      <h1>Home Tools : {tools.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {tools.map((tool) => (
          <div key={tool.id} tool={tool} className="card w-96 bg-base-100 shadow-xl">
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
      <div className="card-actions justify-center mt-20 mb-20">
        <button onClick={handlePurchasePage} className="btn btn-primary w-56">Purchase</button>
      </div>
    </div>
  );
};

export default HomeTools;
