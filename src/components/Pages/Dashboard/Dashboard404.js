import React from 'react';
import { useNavigate } from "react-router-dom";
import errorImage from '../../../assets/images/error.png';

const Dashboard404 = () => {
    const navigate = useNavigate();

    
    const handleDashboard = () =>{
      navigate('/dashboard'); 
    }

    return (
        <div className="grid grid-cols-1 gap-3 justify-items-center mt-20 mb-20">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={errorImage} alt="Shoes" />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-xl text-red-500">Please, check you domain and link</p>
          <div className="card-actions justify-center mt-20">
            <button onClick={handleDashboard} className="btn btn-primary">Back to Dashboard</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dashboard404;