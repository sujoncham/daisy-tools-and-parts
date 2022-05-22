import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start">
          <h1 className="text-4xl text-primary text-bold">
            Wecome to Dashboard
          </h1>
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
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
              <Link to="/dashboard/addReview"> Add Review</Link>
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
