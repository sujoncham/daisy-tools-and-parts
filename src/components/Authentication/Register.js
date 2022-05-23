import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/Firebase.init";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const myStyle = {
  width: "35px",
  height: "35px",
  marginRight: "10px",
};

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, pError] = useUpdateProfile(auth);

  if (error || gError || pError) {
    return <p>Error: {error?.message}</p>;
  }
  if (loading || gLoading || updating) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user || gUser) {
    console.log(user);
  }

  const handleFormRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("submitted form", email, password);

    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
  };

  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div className="w-96">
        <h1 className="text-3xl">Register</h1>
        <form onSubmit={handleFormRegister}>
          <div className="form-control mt-5">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              name="email"
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
              name="password"
              placeholder="Password here"
              className="input input-bordered"
            />
          </div>
          <button className="btn btn-success mt-10">Register</button>
        </form>
        <p>
          New at Daisy Tools? Please,{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>{" "}
          here
        </p>
        <div className="divider">OR</div>
        <div className="text-center">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-success"
          >
            <img
              style={myStyle}
              src="https://i.ibb.co/TL9tBnZ/google.png"
              alt=""
            />{" "}
            sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
