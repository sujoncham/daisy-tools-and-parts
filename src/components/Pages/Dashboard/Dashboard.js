import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useInbox from "../../../hooks/useInbox";
import auth from "../../Firebase/Firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [inboxs] = useInbox();

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h1 className="text-4xl text-primary text-bold">
            Wecome to Dashboard
          </h1>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {admin && (
              <li>
                <Link to="/dashboard/manageProduct">Manage Products</Link>
              </li>
            )}
            {admin && <li>
              <Link to="/dashboard/message">
                  Inbox
                  <div className="badge badge-secondary">{inboxs.length}</div>
              </Link>
            </li>}
            {admin && (
              <li>
                <Link to="/dashboard/allUsers"> All Users</Link>
              </li>
            )}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>
            <li>
              <Link to={`/dashboard/myProfile/:${user?.email}`}>My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/reviewList">Review List</Link>
            </li>
            {admin && <li>
              <Link to="/dashboard/addProducts"> Add Products</Link>
            </li>}
           
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
