import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const MyProducts = () => {
  const [user] = useAuthState(auth)
    const [tools, setTools] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`http://localhost:5000/products?customer=${user.email}`, {
        method:'GET', 
        headers:{
          'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403){
            navigate('/');
          }
         return res.json()}
          )
        .then((data) => {
          setTools(data)
        });
    }, [user]);


  return (
    <div>
      <h1 className="text-3xl mt-10">Manage Products</h1>
      <div className="overflow-y-auto">
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
