import React, { useEffect, useState } from "react";

const MyProducts = () => {

    const [tools, setTools] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/products/")
        .then((res) => res.json())
        .then((data) => setTools(data));
    }, []);


  return (
    <div>
      <h1 className="text-3xl mt-10">Manage Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                tools.map((tool, index) => <tr index={index} key={tool._id} tool={tool}>
                    <th>{index + 1}</th>
                    <td>
                        <img style={{width:'50px'}} src={tool.img} alt="" />
                    </td>
                    <td>{tool.name}</td>
                    <td>{tool.price}</td>
                    <td>{tool.quantity}</td>
                    <td>
                        <button className="btn btn-sm">Delete</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
