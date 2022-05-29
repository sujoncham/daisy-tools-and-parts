import React from "react";

const BusinessSummary = () => {
  return (
    <div className="p-5 mt-20 mb-20">
      <h1 className="text-3xl text-center text-blue-500 font-bold">Business Summery</h1>
      <div className="divider w-56 m-auto mt-5 mb-10">
          <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
          </div>
      </div>
                
      <div className="card mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-14 place-items-center">
        <div className="card w-80 bg-base-100 shadow-xl border">
          <div className="card-body text-center">
            <h2 className="text-2xl  text-blue-500 font-bold">Monthly Sell</h2>
            <p>31K</p>
            <p className="text-purple-500 font-bold">From January 1st to February 1st</p>
         
          </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl border">
          <div className="card-body text-center">
            <h2 className="text-2xl  text-blue-500 font-bold">Happy Clients</h2>
            <p className="text-xl">4,200k</p>
            <p className="text-purple-500 font-bold">↗︎ 40 (2%)</p>
          
          </div>
        </div>

        <div className="card w-80 bg-base-100 shadow-xl border">
        <div className="card-body text-center">
            <h2 className="text-2xl text-blue-500 font-bold">New Register</h2>
            <p>1200k</p>
            <p className="text-purple-500 font-bold">↗︎ 40 (2%)</p>
          
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default BusinessSummary;
