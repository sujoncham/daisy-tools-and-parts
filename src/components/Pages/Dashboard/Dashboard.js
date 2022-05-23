import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h1 className="text-4xl text-primary text-bold">
            Wecome to Dashboard
          </h1>
         
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Products</Link>
            </li>
            <li>
              <Link to="/dashboard/myOrders">My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/myProfile">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/reviewList">Review List</Link>
            </li>
            <li>
              <Link to="/dashboard/addProducts"> Add Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
