import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex justify-center items-center mt-20 mb-20">
      <div className="w-96">
        <h1 className="text-3xl">Register</h1>
        <form>
        <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email here"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password here"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-success mt-10">Register</button>
        </form>
        <p>New at Daisy Tools? Please, <Link to='/login' className="text-primary">Login</Link> here</p>
        <div className="divider">OR</div>
        <div className="text-center">
            <button className="btn btn-success">sign in with google</button>
        </div>
      </div>
    </div>
    );
};

export default Register;